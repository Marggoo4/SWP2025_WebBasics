import React, { useEffect, useState } from "react";

// =====================
// COOKIE HELPERS
// =====================

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name: string) {
  const cookies = document.cookie.split("; ");
  const found = cookies.find((row) => row.startsWith(name + "="));
  return found ? found.split("=")[1] : null;
}

// =====================
// COOKIE BANNER
// =====================

function CookieBanner({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50">
      <p className="text-sm">
        We use cookies to improve your experience and store traffic data.
      </p>
      <button
        onClick={onAccept}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold"
      >
        Accept Cookies
      </button>
    </div>
  );
}

// =====================
// TRAFFIC LIGHT CARD
// =====================

type TrafficLightCardProps = {
  id: string;
  state: "red" | "yellow" | "green";
  carCount: number;
  selected?: boolean;
  onSelect: (id: string) => void;
};

function TrafficLightCard({
  id,
  state,
  carCount,
  selected,
  onSelect,
}: TrafficLightCardProps) {
  const lightBase = "h-10 w-10 rounded-full";
  const off = "bg-gray-300";

  return (
    <div
      onClick={() => onSelect(id)}
      className={`w-64 bg-white shadow-md rounded p-4 cursor-pointer transition-all ${
        selected ? "ring-4 ring-blue-500" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 bg-black p-3 rounded-lg">
          <div className={`${lightBase} ${state === "red" ? "bg-red-500" : off}`} />
          <div
            className={`${lightBase} ${
              state === "yellow" ? "bg-yellow-400" : off
            }`}
          />
          <div
            className={`${lightBase} ${
              state === "green" ? "bg-green-500" : off
            }`}
          />
        </div>

        <h2 className="text-xl font-bold">Traffic Light {id}</h2>
        <p className="text-gray-600">State: {state}</p>
        <p className="font-semibold">Cars: {carCount}</p>
      </div>
    </div>
  );
}

// =====================
// DASHBOARD
// =====================

type TrafficLight = {
  id: string;
  state: "red" | "yellow" | "green";
  carCount: number;
};

export default function TrafficDashboard() {
  const [selectedLight, setSelectedLight] = useState<string | null>(null);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  // CHECK COOKIE ON LOAD
  useEffect(() => {
    const consent = getCookie("traffic_cookie_consent");
    if (consent === "accepted") {
      setCookiesAccepted(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookie("traffic_cookie_consent", "accepted", 365);
    setCookiesAccepted(true);
  };

  const trafficLights: TrafficLight[] = [
    { id: "A", state: "green", carCount: 42 },
    { id: "B", state: "yellow", carCount: 30 },
    { id: "C", state: "red", carCount: 55 },
    { id: "D", state: "green", carCount: 20 },
  ];

  const totalCars = trafficLights.reduce(
    (sum, light) => sum + light.carCount,
    0
  );

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Traffic Light Dashboard</h1>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold">Overall State</h2>
        <p className="text-gray-600">Total Cars in System: {totalCars}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {trafficLights.map((light) => (
          <TrafficLightCard
            key={light.id}
            {...light}
            selected={selectedLight === light.id}
            onSelect={setSelectedLight}
          />
        ))}
      </div>

      {selectedLight && (
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">
            Selected Traffic Light: {selectedLight}
          </h2>
          <p className="text-gray-600">
            Detailed analytics can be shown here.
          </p>
        </div>
      )}

      {/* COOKIE BANNER */}
      {!cookiesAccepted && <CookieBanner onAccept={acceptCookies} />}
    </div>
  );
}
