import React, { useState } from "react";

// =====================
// BUTTON
// =====================

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded"
    >
      {text}
    </button>
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

export function TrafficLightCard({
  id,
  state,
  carCount,
  selected,
  onSelect,
}: TrafficLightCardProps) {
  const colorMap = {
    red: "bg-red-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
  };

  return (
    <div
      onClick={() => onSelect(id)}
      className={`w-64 bg-white shadow-md rounded p-4 cursor-pointer transition-all ${
        selected ? "ring-4 ring-blue-500" : ""
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div className={`h-16 w-16 rounded-full ${colorMap[state]}`} />
        <h2 className="text-xl font-bold">Traffic Light {id}</h2>
        <p className="text-gray-600">State: {state}</p>
        <p className="font-semibold">Cars: {carCount}</p>
      </div>
    </div>
  );
}

// =====================
// TRAFFIC LIGHT GRID
// =====================

type TrafficLight = {
  id: string;
  state: "red" | "yellow" | "green";
  carCount: number;
};

type TrafficLightGridProps = {
  lights: TrafficLight[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function TrafficLightGrid({
  lights,
  selectedId,
  onSelect,
}: TrafficLightGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {lights.map((light) => (
        <TrafficLightCard
          key={light.id}
          {...light}
          selected={selectedId === light.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

// =====================
// DASHBOARD
// =====================

export default function TrafficDashboard() {
  const [selectedLight, setSelectedLight] = useState<string | null>(null);

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

      {/* OVERALL STATE */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold">Overall State</h2>
        <p className="text-gray-600">Total Cars in System: {totalCars}</p>
      </div>

      {/* GRID */}
      <TrafficLightGrid
        lights={trafficLights}
        selectedId={selectedLight}
        onSelect={setSelectedLight}
      />

      {/* SELECTION INFO */}
      {selectedLight && (
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">
            Selected Traffic Light: {selectedLight}
          </h2>
          <p className="text-gray-600">
            Clicked traffic light shows detailed data (Chart can go here)
          </p>
        </div>
      )}
    </div>
  );
}
