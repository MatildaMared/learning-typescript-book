export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let foodLeft = 5;
	let waterLeft = 5;
	let availableResource: "food" | "water" | undefined;

	for (let day = 1; day <= 7; day++) {
		let diceRoll = Math.floor(Math.random() * 6) + 1;
		console.log(diceRoll);

		if (diceRoll === 1) {
			console.log("Setting available resource to food");
			availableResource = "food";
		} else if (diceRoll === 2) {
			console.log("Setting available resource to water");
			availableResource = "water";
		} else {
			if (!availableResource) {
				availableResource = diceRoll % 2 === 0 ? "food" : "water";
			} else if (availableResource === "food") {
				foodLeft += diceRoll;
				availableResource = undefined;
			} else if (availableResource === "water") {
				waterLeft += diceRoll;
				availableResource = undefined;
			}
		}

		foodLeft--;
		waterLeft--;

		if (waterLeft <= 0 || foodLeft <= 0) {
			console.log("Game lost 😢");
			return false;
		}
	}

	console.log("Game won!!! 🌸🎉");
	return true;
}
