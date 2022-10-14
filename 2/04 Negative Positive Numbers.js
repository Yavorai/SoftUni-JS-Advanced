function demo(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      result.unshift(nums[i]);
    } else {
      result.push(nums[i]);
    }
  }

  console.log(result.join("\n"));
}
demo([7, -2, 8, 9]);
demo([3, -2, 0, -1]);

//=================================================================

function demo(nums) {
  const result = [];

  for (let num of nums) {
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }

  for (let num2 of result) {
    console.log(num2);
  }
}
