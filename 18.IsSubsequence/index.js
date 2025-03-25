function isSubsequence(s, t) {
    var subStringL = s.length;
    var mainStringL = t.length;
    var subPointer = 0;
    for (var mainPointer = 0; subPointer < subStringL && mainPointer < mainStringL; mainPointer++) {
        if (s[subPointer] === t[mainPointer]) {
            subPointer++;
        }
    }
    return subPointer === subStringL;
}
;
