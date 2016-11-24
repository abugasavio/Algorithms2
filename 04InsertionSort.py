def insertion_sort(nums):
    for i in range(1, len(nums)):
        position_to_insert = i
        value_to_insert = nums[i]
        while position_to_insert > 0 and value_to_insert < nums[position_to_insert - 1]:
            larger = nums[position_to_insert - 1]
            nums[position_to_insert - 1] = nums[position_to_insert]
            nums[position_to_insert] = larger
            position_to_insert -= 1

    return nums

if __name__ == '__main__':
    nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
    print(insertion_sort(nums))
