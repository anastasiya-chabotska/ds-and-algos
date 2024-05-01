/*
Write function that translates a text to Pig Latin and back. 
English is translated to Pig Latin by taking the first letter of every word, 
moving it to the end of the word and adding ‘ay’. 
“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

hetay


*/


function convertToPigLatin(string){
    let words = string.split(" ");
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let firstChar = word.charAt(0);
        word = word.substring(1);
        words[i] = word + firstChar + "ay";
    }
    words = words.join(" ");
    console.log(words);
}

function convertFromPigLatin(string){
    let words = string.split(" ");
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let firstChar = word.charAt(word.length - 3);
        word = word.substring(0, word.length - 3);
        words[i] = firstChar + word;
    }
    words = words.join(" ");
    console.log(words);
}

convertToPigLatin("The quick brown fox");
convertFromPigLatin("Hetay uickqay rownbay oxfay")