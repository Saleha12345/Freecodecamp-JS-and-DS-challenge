function palindrome(str) {
   str = str.replace(/[^\w\']|_/g, "").toLowerCase();
  let count = str.length - 1;
  console.log(str);
  for(let i=0;i<str.length;i++){
    if(str[i]!=str[count]){
      return false;
    }
    else{
      count--;
    }
  }
  return true;
}

palindrome("eye");