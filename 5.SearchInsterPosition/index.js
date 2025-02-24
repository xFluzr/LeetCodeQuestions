function searchInsert(nums, target) {
    var l = 0;
    var r = nums.length - 1;
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        if (target > nums[mid]) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return l;
}
console.log(searchInsert([1, 3, 5, 6], 5));
