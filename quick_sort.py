# Daniel Borstelmann
# Interview Codez
# 12/20/2015

def quick_sort(a_list):
    quick_sort_helper(a_list,0,len(a_list)-1)

def quick_sort_helper(a_list,first,last):
    if first<last:

        splitpoint = partition(a_list,first,last)

        quick_sort_helper(a_list,first,splitpoint-1)
        quick_sort_helper(a_list,splitpoint+1,last)


def partition(a_list,first,last):
    pivotvalue = a_list[first]

    leftmark = first+1
    rightmark = last

    done = False
    while not done:

        while leftmark <= rightmark and a_list[leftmark] <= pivotvalue:
            leftmark = leftmark + 1

        while a_list[rightmark] >= pivotvalue and rightmark >= leftmark:
            rightmark = rightmark -1

        if rightmark < leftmark:
            done = True
        else:
            temp = a_list[leftmark]
            a_list[leftmark] = a_list[rightmark]
            a_list[rightmark] = temp

    temp = a_list[first]
    a_list[first] = a_list[rightmark]
    a_list[rightmark] = temp


    return rightmark


test_list = [12, 24, 13, 4, 6, 5, 5, 8, 9, 10, 12, 18, 19, 7, 48, 37, 26]
print(test_list)
quick_sort(test_list)
print(test_list)
