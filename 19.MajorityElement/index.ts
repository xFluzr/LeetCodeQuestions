function majorityElement(nums: number[]): number {
  let majorityCount=0;
  let majorityNumber=0;
  for(let i=0;i<nums.length;i++){
    if(majorityCount===0){
      majorityCount=1;
      majorityNumber=nums[i];
    }else{
      if(majorityNumber===nums[i]){
        majorityCount++;
      }
      majorityCount--;
    }
  }
  return majorityNumber;
};