function twoSum(nums: number[], target: number): number[] {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }
    }
    throw new Error("No solution")
};
const nums = [7,2,4];
const target = 9;
console.log(twoSum(nums, target)); 