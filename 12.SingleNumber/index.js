function singleNumber(nums) {
    var found = 0;
    for (var i = 0; i < nums.length; i++) {
        var temp = nums[i];
        for (var j = 0; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            else {
                found = nums[j];
            }
        }
    }
    return found;
}
