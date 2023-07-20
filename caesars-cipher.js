var ourlanguage = "NOPQRSTUVWXYZABCDEFGHIJKLM";
var english = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function rot13(str) {
  let result = ""; 
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  for (let i = 0; i < str.length; i++) {
     var special=specialChars.test(str[i]);
    if (str[i] != " " && !(special)) {
      var alphabet = str[i];
      var index = returnindex(alphabet);
      result += ourlanguage.charAt(index);
    }
    else if(special){
      result+=str[i];
    }
    else{
      result+=" ";
    }
  }
  console.log(result);
  return result;
}

function returnindex(char) {
  for (let i = 0; i < english.length; i++) {
    if (char == english[i]) {
      return i; 
    }
  }
}

rot13("SERR PBQR PNZC");
