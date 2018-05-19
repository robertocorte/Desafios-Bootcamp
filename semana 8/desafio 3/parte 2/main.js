/*
function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

Assume that:
    N is an odd integer within the range [1..1,000,000];
    each element of array A is an integer within the range [1..1,000,000,000];
    all but one of the values in A occur an even number of times.

Complexity:
    expected worst-case time complexity is O(N);
    expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
*/

function returnUnpaired(array) {
    array.sort();
    for (var i = 0; i < array.length; i+=2) {
        if (array[i] !== array[i+1] || array.length == i+1) { // if every 2nd numbers is not equal, or if in last element of array = return array[i]
            return array[i];
        }
    }
}
alert(returnUnpaired([3,1,5,3,1,5,3,1,3,1,7,9,1,7,1,9]));
alert(returnUnpaired([1,3,3,1,5]));
alert(returnUnpaired([1021,1021,3]));