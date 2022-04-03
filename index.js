
/**
 * Replaces the words in the sentence for neutral pronouns
 * @param  {string} phrase [phrase to replace]
 * @return {string}      [replaced phrase]
*/
function pipe(phrase) {
    if (typeof phrase !== 'string') throw new Error('Phrase must be string');

    if (!phrase.length) return '';

    const vowels = [
        { vowel: 'a', neuterVowel: 'u' },
        { vowel: 'e', neuterVowel: 'u' },
        { vowel: 'i', neuterVowel: 'i' },
        { vowel: 'o', neuterVowel: 'e' },
        { vowel: 'u', neuterVowel: 'u' },
    ];

    const words = phrase.split(/ +/g);

    const neuterPhrase = words.map(word => {
        const charIndex = lastCharIndex(word);

        const neuter = vowels.find(letter => letter.vowel == word[charIndex]);

        let newWord = word;

        if (neuter) {
            newWord = replaceAt(word, neuter.neuterVowel, charIndex);
        }


        return newWord;
    });

    return neuterPhrase.join(' ');
}

function lastCharIndex(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const last = word[word.length - 1];

    if (last === 's') {
        return word.length - 2;
    } else {
        if (vowels.includes(word[word.length -2])) {
            return -1;
        }
    }

    return word.length - 1;
}

function replaceAt(word, replacement, index) {
    return word.substring(0, index) + replacement + word.substring(index + replacement.length);
}

exports.pipe = pipe;