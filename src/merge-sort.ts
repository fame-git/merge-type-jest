export function merge(collection_1: number[], collection_2: number[]): number[] {
  let ans: number[] = [];
  let i = 0;
  let j = 0;

  while(i < collection_1.length && j < collection_2.length){
    if(collection_1[i] < collection_2[j]){
      ans.push(collection_1[i]);
      i++;
    }else{
      ans.push(collection_2[j]);
      j++;
    }
  }

  while(i < collection_1.length){
    ans.push(collection_1[i]);
    i++;
  }

  while(j < collection_2.length){
    ans.push(collection_2[j]);
    j++;
  }
  
  return ans;
}