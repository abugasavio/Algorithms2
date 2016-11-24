
const insertionSort = (nums) => {
	for(var i = 1, length = nums.length; i < length; i++) {
		var valueToInsert = nums[i];
		var positionToInsert = i;
		while(positionToInsert > 0 && valueToInsert < nums[positionToInsert-1]) {
			var larger = nums[positionToInsert - 1];
			nums[positionToInsert - 1] = valueToInsert;
			nums[positionToInsert] = larger;
			positionToInsert -= 1;
		}
	}
	return nums;
}


console.log(insertionSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]))
