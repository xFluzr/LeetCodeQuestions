function searchInsert(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  /*
    Why return l?
    if we have one element list some mistakes could happen
    as L pointer is to the right and R pointer is on the left side.
    That's why we returning l because if we wouldn't we could have some issues.
*/

  return l;


}

console.log(searchInsert([1, 3, 5, 6], 5));
