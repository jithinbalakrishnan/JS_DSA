let word = "karnataka"


const getWord = (str) => {
  let obj = {};
  for(let i =0; i< str.length; i++){
      let ch = str[i]; 
    if(obj[ch]) {
        obj[ch]++
    } else {
        obj[ch] = 1
    }
  }
  let result = Object.entries(obj).sort((pr,cu) => pr[1]- cu[1])
  return result.pop()
}

console.log(getWord(word))