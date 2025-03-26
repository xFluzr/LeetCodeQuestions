function majorityElement(nums) {
    var majorityCount = 0;
    var majorityNumber = 0;
    for (var i = 0; i < nums.length; i++) {
        if (majorityCount === 0) {
            majorityCount = 1;
            majorityNumber = nums[i];
        }
        else {
            if (majorityNumber === nums[i]) {
                majorityCount++;
            }
            majorityCount--;
        }
    }
    return majorityNumber;
}
;
