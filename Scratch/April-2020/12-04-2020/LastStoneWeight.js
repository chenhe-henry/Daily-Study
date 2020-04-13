// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.
// Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

var lastStoneWeight = function (stones) {
  if (stones.length === 1) {
    return stones;
  } else if (stones.length === 2) {
    let maxOfTwo = stones[0] - stones[1];
    if (maxOfTwo > 0) {
      return maxOfTwo;
    } else if (maxOfTwo === 0) {
      return [0];
    } else {
      return -maxOfTwo;
    }
  } else {
    let maxTwo = [];
    for (let i = 0; i < stones.length + 1; i++) {
      console.log("This is step " + i);
      console.log("change from " + stones);
      let maxNum = Math.max(...stones);
      maxTwo.push(maxNum);
      stones.splice(stones.indexOf(maxNum), 1);
      if (maxTwo.length > 2) {
        maxTwo = [];
      } else {
        let result = maxTwo[0] - maxTwo[1];
        if (result > 0) {
          stones.push(result);
        } else {
          null;
        }
      }

      console.log("to " + stones);
    }
    console.log("final is " + stones);
    const finalResult = Array.from(new Set(stones));
    if (stones.length % 2 != 0 && finalResult.length === 1) {
      return finalResult;
    } else if (stones.length % 2 === 0 && finalResult.length === 1) {
      return [0];
    }
  }
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
