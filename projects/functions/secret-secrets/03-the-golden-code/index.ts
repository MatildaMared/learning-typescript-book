// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

type Options = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

export function createCodeCracker(
	options: Options
): (text: string) => string | undefined {
	return (text: string) => {
		for (let attempt = 0; attempt < options.attempts; attempt++) {
			const guess = options.makeGuess(text, attempt);
			if (options.validateGuess(guess)) {
				return guess;
			}
		}
		return undefined;
	};
}
