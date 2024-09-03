let word = "karnataka";

const getWord = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (obj[ch]) {
      obj[ch]++;
    } else {
      obj[ch] = 1;
    }
  }
  // ex 1
  let result = Object.entries(obj).sort((pr,cu) => pr[1]- cu[1])
  return result.pop()
  // ex2
  // return Object.entries(temp).reduce(
  //   (a, c) => {
  //     if (a[1] < c[1]) {
  //       a = c;
  //     }
  //     return a;
  //   },
  //   ["", 0]
  // );
};

console.log(getWord(word));
