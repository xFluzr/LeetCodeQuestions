function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let lastArrayIndex=m+n-1;
  while(m>0 && n>0){
    if(nums1[m-1]>nums2[n-1]){
      nums1[lastArrayIndex]=nums1[m-1];
      m--;
    }else{
      nums1[lastArrayIndex]=nums2[n-1];
      n--;
    }
    lastArrayIndex--;
  }
  while(n>0){
    nums1[lastArrayIndex]=nums2[n-1];
    n=n-1;
    lastArrayIndex=lastArrayIndex-1;
  }
}