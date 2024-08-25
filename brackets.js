
//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
let arr = ["()", "{}", "[]"]

var isValid = function(s) {
   let temp = ""
   let result = null
   for(let i =0; i< s.length; i++) {
       temp = temp + s[i];
       if(temp.length === 2) {
           let isValid = arr.includes(temp);
           temp = ""
           if(!isValid) {
               result = false
               break;
           } else {
               result = true
           }
       }
       
   }
    return result

};
console.log(isValid("()[]{]"))