# Daniel Borstelmann
# Interview Codez
# 12/20/2015

def merge_sort(a_list):
    if len(a_list) > 1:

        mid = len(a_list)/2
        left = a_list[:mid]
        right = a_list[mid:]

        merge_sort(left)
        merge_sort(right)

        i = 0
        j = 0
        k = 0

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                a_list[k] = left[i]
                i = i + 1
            else:
                a_list[k] = right[j]
                j = j + 1
            k = k + 1

        while i < len(left):
            a_list[k] = left[i]
            i = i + 1
            k = k + 1
        while j < len(right):
            a_list[k] = right[j]
            j = j + 1
            k = k + 1

test_list = [12, 24, 13, 4, 6, 5, 5, 8, 9, 10, 12, 18, 19, 7, 48, 37, 26]
print(test_list)
merge_sort(test_list)
print(test_list)
