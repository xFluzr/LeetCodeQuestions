function isPalindrome(s: string): boolean {
  if (s.length === 0) {
    return true;
  }

  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let l=0;
  let r=s.length-1;

  while(l<r){
    if(s[l]!==s[r]){
      return false;
    }
    l++;
    r--;
  }

  return true;

}

console.log(isPalindrome("kuba"));
