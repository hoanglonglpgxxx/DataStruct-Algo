const arr = ['test'];
const large = new Array(100).fill('test');

function findArr(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'test') {
            console.log('Found test');
            break;//deal with Big O, nhưng do rule worst case(nếu 'test' ở cuối array) nên cũng k hiệu quả lắm
        }
    }
}

findArr(large); //-> takes linear time to find 'test', more inputs -> more operations -> O(n) - Linear Time

function findArr2(arrs) {
    c;
    console.log(arrs[0]); //-> O(1) - Constant Time, no matter how many inputs, result still remain?
}
// O(n) sample
function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) {  //O(n)
        anotherFunction(); //O(n)
        let stranger = true; //O(n)
        a++; //O(n)
    }
    return a; //O(1)
} // -> O(1+1+1 + nn+n+n) = O(3+4n)

// ! NESTED LOOP
