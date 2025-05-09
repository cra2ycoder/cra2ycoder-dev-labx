# sum index

# input: [1, 4, 5, 11, 15, 18]
# sumValue: 9
# output: [1, 2]

input = [1, 4, 5, 11, 15, 18]
sumValue = 9


def find_sum_index(numList, target):

    for i in numList:
        cur = i
        toBeFound = target - cur

        if toBeFound in numList:
            curNumIdx = numList.index(cur)
            foundNumIdx = numList.index(toBeFound, curNumIdx+1, len(numList)-1)
            return [curNumIdx, foundNumIdx]


print(find_sum_index(input, sumValue))
