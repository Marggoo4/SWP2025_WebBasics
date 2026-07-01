export class WindowDisplay {
    update(temperature) {
        const advice = temperature < 10 ? "Close the window." : "You can open the window.";
        console.log(`Window display: ${temperature} °C. ${advice}`);
    }
}
