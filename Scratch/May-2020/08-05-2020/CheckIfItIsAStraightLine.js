// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.
var checkStraightLine = function (coordinates) {
  if (!coordinates) return null;
  if (coordinates.length <= 2) return true;
  else {
    let rateArr = [];
    for (let i = 1; i < coordinates.length; i++) {
      let rate =
        (coordinates[i][1] - coordinates[i - 1][1]) /
        (coordinates[i][0] - coordinates[i - 1][0]);
      rateArr.push(rate);
    }

    const ifRateUnique = new Set(rateArr);
    if (ifRateUnique.size === 1) return true;
    return false;
  }
};
console.log(checkStraightLine());
console.log(checkStraightLine([[1, 2]]));
console.log(
  checkStraightLine([
    [4, 5],
    [5, 6],
  ])
);
console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);
