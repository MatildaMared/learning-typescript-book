// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

type OnVowel = (vowel: string) => string;
type OnConsonant = (consonant: string) => string;
type OnPunctuation = (punctuation: string) => string;

export function createAdvancedCipher(
	onVowel: OnVowel,
	onConsonant: OnConsonant,
	onPunctuation: OnPunctuation
): (text: string) => string {
	return (text: string) => {
		let result = "";

		for (let character of text) {
			if (character.match(/[aeiou]/i)) {
				result += onVowel(character);
			} else if (character.match(/[bcdfghjklmnpqrstvwxyz]/i)) {
				result += onConsonant(character);
			} else {
				result += onPunctuation(character);
			}
		}

		return result;
	};
}
