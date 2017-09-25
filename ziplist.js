function zipList(listA, listB) {
  const result = [];
  for (let i = 0; i < listA.length; i++) {
    result.push(listA[i]);
    result.push(listB[i]);
  }
  return result;
}

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}

const testListA = [1, 3, 5, 7, 9];
const testListB = [2, 4, 6, 8, 10];
console.log(zipList(testListA, testListB));
console.log(zipListTheSimpleWay(testListA, testListB));
