// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.

export function createCipher(
	cipher: (text: string) => string
): (text: string) => string {
	return (text: string) => {
		let result = "";
		for (let i = 0; i < text.length; i++) {
			result += cipher(text[i]);
		}
		return result;
	};
}
