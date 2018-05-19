/*  Given:
Array elements, K are integers [0,100]
Elements of array 
*/
function rotateArray(array, K) {
    var i = 0;
    while (i < K) {
        array.unshift(array.pop());
        i++;
    }
    return array;
}

alert(rotateArray([1,2,3,4,5],4));

