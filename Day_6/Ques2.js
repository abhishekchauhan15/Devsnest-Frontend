function array_Clone(array) {
    let arr1 = [];
    for (let item of array) {
      arr1.push(item);
    }
    return arr1;
  }
  console.log(array_Clone([1, 2, 4, 0]));
  console.log(array_Clone([1, 2, [4, 0]]));