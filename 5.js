function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

const minhaString = 'Quero muito essa vaga';
const stringInvertida = inverterString(minhaString);
console.log(minhaString);
console.log(stringInvertida);