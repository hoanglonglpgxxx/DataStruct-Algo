//-----------------------------------ARRAY
/*1. array 
lokpup O(1)
push O(1)
insert O(n)
delete O(n)
*/
//const strings = ['a', 'b', 'd', 'c'];

// console.log(strings[2]);//lookup
//strings.push('e'); //O(1)
//console.log(strings); //pop O(1), unshift O(n) do phải loop qua các string còn lại để reindex
//splice() O(n) (tính worst case mới là n)

//Static and dynamic arr: static phải khai báo trước số lượng item; js là dynamic arr, auto allocate memory
//primitive type khi gán qua lại thì so sánh luôn true, 
//reference type thì không
const obj1 = { val: 2 };
const obj2 = obj1; //trỏ vào ô nhớ của obj1, khi đổi val của obj1 thì ob2 cũng bị đổi
const obj3 = { val: 2 };
console.log(obj1 === obj2);
console.log(obj1 === obj3); //false vì khác ô nhớ?

//context vs scope
//context khác với scope, context là this0