import {describe, expect, test} from '@jest/globals';
import {merge} from "../src/merge-sort";

describe("test merge function", ()=>{
  test('should merge two sorted arrays', () =>{
    expect(merge([1,3,5,7], [2,4,6,8])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});