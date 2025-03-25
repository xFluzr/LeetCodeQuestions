function isSubsequence(s: string, t: string): boolean {
  const subStringL=s.length;
  const mainStringL=t.length;

  //TWO POINTERS !!
  let subPointer=0;
  for(let mainPointer=0;subPointer<subStringL && mainPointer<mainStringL;mainPointer++){
    if(s[subPointer]===t[mainPointer]){
      subPointer++;
    }
  }
  return subPointer === subStringL;
};