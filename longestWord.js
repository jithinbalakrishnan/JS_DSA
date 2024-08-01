const test= "My name  sdfsfsdfff is Jithin"

const getLongestWord = (str) => {
    let words= str.split(' ');
    let maxLength = 0
    let maxWord = "";
    for(let i=0; i < words.length; i++) {
        if(words[i].length > maxLength) {
            maxLength = words[i].length;
            maxWord = words[i];
        }
    }
    // words.forEach(element => {
    //     if() {

    //     }
    // });
    return maxWord
}

console.log(getLongestWord(test))