function validBraces(braces){
  while(braces.includes("()") || braces.includes("[]") || braces.includes("{}")){
    braces = braces.replace("()","");
    braces = braces.replace("[]","");
    braces = braces.replace("{}","");
  }
  return braces.length > 0 ? false : true;
}
