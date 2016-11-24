
def bubble_sort(nums):
    sorted = True
    while sorted:
        sorts = 0
        for i in range(len(nums) - 1):
            if nums[i + 1] < nums[i]:
                sorts += 1
                number = nums[i]
                nums[i] = nums[i + 1]
                nums[i + 1] = number
            else:
                sorts += 0
        sorted = bool(sorts)
    return nums

if __name__ == '__main__':
    nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
    print(bubble_sort(nums))
    testing this

