'use strict';

const {insersionSort} = require('./index');

describe('Code Challenge 26: Insertion Sort', () => {
  test('Should sort any array', () => {
    let arr = [8,4,23,42,16,15];
    let reverseSorted = [20,18,12,8,5,-2];
    let fewUniques = [5,12,7,5,5,7];
    let nearlySorted = [2,3,5,7,13,11];

    expect(insersionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(insersionSort(reverseSorted)).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(insersionSort(fewUniques)).toEqual([5, 5, 5, 7, 7, 12]);
    expect(insersionSort(nearlySorted)).toEqual([2, 3, 5, 7, 11, 13]);
  });

});
