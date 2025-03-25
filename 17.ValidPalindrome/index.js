function isPalindrome(s) {
    if (s.length === 0) {
        return true;
    }
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
console.log(isPalindrome("kuba"));
