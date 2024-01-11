let inputPhrase
let generatedCode = '';

const generateCode = function() {

    document.getElementById('conversion-container').innerHTML = '';
    generatedCode = '';

    inputPhrase = document.getElementById('input-text-container').value;
    inputPhrase = inputPhrase.toLowerCase();
    console.log(inputPhrase);

    for (let i = 0; i < inputPhrase.length; i++){
        if (inputPhrase[i] === 'a') {
            generatedCode += '·-';
        } else if (inputPhrase[i] === 'b') {
            generatedCode += '-···';
        } else if (inputPhrase[i] === 'c') {
            generatedCode += '---·';
        } else if (inputPhrase[i] === 'd') {
            generatedCode += '-··';
        } else if (inputPhrase[i] === 'e') {
            generatedCode += '·';
        } else if (inputPhrase[i] === 'f') {
            generatedCode += '··-·';
        } else if (inputPhrase[i] === 'g') {
            generatedCode += '--·';
        } else if (inputPhrase[i] === 'h') {
            generatedCode += '····';
        } else if (inputPhrase[i] === 'i') {
            generatedCode += '··';
        } else if (inputPhrase[i] === 'j') {
            generatedCode += '·---';
        } else if (inputPhrase[i] === 'k') {
            generatedCode += '-·-';
        } else if (inputPhrase[i] === 'l') {
            generatedCode += '·-··';
        } else if (inputPhrase[i] === 'm') {
            generatedCode += '----';
        } else if (inputPhrase[i] === 'n') {
            generatedCode += '-·';
        } else if (inputPhrase[i] === 'o') {
            generatedCode += '---';
        } else if (inputPhrase[i] === 'p') {
            generatedCode += '·--·';
        } else if (inputPhrase[i] === 'q') {
            generatedCode += '--·-';
        } else if (inputPhrase[i] === 'r') {
            generatedCode += '·-·';
        } else if (inputPhrase[i] === 's') {
            generatedCode += '···';
        } else if (inputPhrase[i] === 't') {
            generatedCode += '-';
        } else if (inputPhrase[i] === 'u') {
            generatedCode += '··-';
        } else if (inputPhrase[i] === 'v') {
            generatedCode += '···-';
        } else if (inputPhrase[i] === 'w') {
            generatedCode += '·--';
        } else if (inputPhrase[i] === 'x') {
            generatedCode += '-··-';
        } else if (inputPhrase[i] === 'y') {
            generatedCode += '-·--';
        } else if (inputPhrase[i] === 'z') {
            generatedCode += '--··';
        } else if (inputPhrase[i] === ' ') {
            generatedCode += '··--';
        } else if (inputPhrase[i] === '1') {
            generatedCode += '·----';
        } else if (inputPhrase[i] === '2') {
            generatedCode += '··---';
        } else if (inputPhrase[i] === '3') {
            generatedCode += '···--';
        } else if (inputPhrase[i] === '4') {
            generatedCode += '····-';
        } else if (inputPhrase[i] === '5') {
            generatedCode += '·····';
        } else if (inputPhrase[i] === '6') {
            generatedCode += '-····';
        } else if (inputPhrase[i] === '7') {
            generatedCode += '--···';
        } else if (inputPhrase[i] === '8') {
            generatedCode += '---··';
        } else if (inputPhrase[i] === '9') {
            generatedCode += '----·';
        } else if (inputPhrase[i] === '0') {
            generatedCode += '-----';
        } 

        console.log(i, inputPhrase[i], generatedCode.length)
    }

    document.getElementById('conversion-container').innerHTML = generatedCode;
}

document.getElementById('submit-button').addEventListener('click', generateCode);

/*


·

-


*/