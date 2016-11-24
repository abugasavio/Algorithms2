function bubbleSort(nums) {
	do {
		var sort = 0;
		for (var i = 0; i < nums.length; i++) {
			if (nums[i + 1] < nums[i]) {
				var larger = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = larger;
				sort += 1;
			}
		}

	} while (sort)

	return nums
}

function savio() {
	testing
}

console.log(bubbleSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]))

	savio abuga
	savio abuga
	savio abuga
