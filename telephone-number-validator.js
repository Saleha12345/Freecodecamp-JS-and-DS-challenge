function telephoneCheck(str) {
  const re=/^(1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  var result=re.test(str);
  if(result){
  return true;
  }
  else{
    return false;
  }
}

telephoneCheck("555-555-5555");