const textInput = document.getElementById("inputText");
const result = document.getElementById("result");

function isvowel(text) {
    const vowels = ["a", "o", "e", "i", "u"];
    let count = 0;

    for (let char of text.toLowerCase()){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}


function checkVowels() {
    const user_input = textInput.value;
    const vowelcount = isvowel(user_input)
    result.innerHTML = `the number of vowels: ${vowelcount}`;
    reset()
}

function reset() {
    textInput.value = "";
}