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
//context khác với scope, context là this

//instantiation: khởi tạo class,  contrstor func chạy đầu tiên, khi extend class thì phải gọi constructor của nó - dùng super, khi đó this sẽ trỏ vào class đang gọi super(không phải class được super)
/*
 */
/* class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`name is ${this.name}, type is ${this.type}`);
    }
}

class Wiz extends Player {
    constructor(name, type) {
        super(name, type);
    }
    test() {
        console.log(`this is ${this.name}`);
    }
}

const wiz1 = new Wiz('test1', 'test2');
console.log(wiz1.test()); */

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
    }
}

const newArr = new MyArray();
newArr.push('hi');
console.log(newArr);