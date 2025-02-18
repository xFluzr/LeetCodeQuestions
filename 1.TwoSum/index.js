function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    throw new Error("No solution");
}
;
var nums = [7, 2, 4];
var target = 9;
console.log(twoSum(nums, target));
