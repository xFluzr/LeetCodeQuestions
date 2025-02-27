function singleNumber(nums: number[]): number {
  let found=0;
  for(let i=0;i<nums.length;i++){
    let temp=nums[i];
    for(let j=0;j<nums.length;j++){
      if(i===j){
        continue;
      }
      else{
        found=nums[j];
      }
      
    }
  }
  return found;
}
