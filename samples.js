//log all pairs of arr
/* const boxes = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
        console.log(boxes[i], boxes[j]);
    }
} *///-> big O : O(n^2)

//
function boo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('test');
    }
}
boo([1, 2, 3]);//O(1), khi function call mới có complexity là O(1)

function changeArr(n) {
    let hiArr = [];
    for (let i = 0; i <= n; i++) {
        hiArr[i] = 'hi';
    }
    return hiArr;
}
changeArr(6);