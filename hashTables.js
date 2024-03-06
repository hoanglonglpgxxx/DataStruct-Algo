//object là hash table
//java là map
//python là dictionary
//insert, lookup, delete, search đều là O(1)

//? WHAT IS HASH COLLISION

/* let user = {
    age: 26,
    name: 'Kyl',
    isOld: false,
    checkFunc: function () {
        console.log('test');
    }
};

user.age; //O(1)
user.name = 'Test'; //O(1)
 */
//Map, Set
//Map : cho lưu tất cả kiểu data là key
//Set: cho lưu key không có value
/* const a = new Map();

const b = new Set(); */

/* class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    console.log(currentBucket[i][1]);
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() { //loop through all keys of hashTable
        const keysArr = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArr.push(this.data[i][0][0]);
            }
        }
        console.log(keysArr);
        return keysArr;
    }
}
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 3);
myHashTable.set('orange', 3123);
myHashTable.keys();
myHashTable.get('grapes'); */
/*2. hash tab;es
search O(1)
lookup O(1)
insert O(1)
delete O(1)

-> Advantages:Fast lookup(need good collision resolution), fast inserts, flexible keys
-> Disadvantages: Unordered, slow key iteration
*/

/**
 * Given an array, return first recurring character(the number that is repeated first) else return undefined
 * ex: [2,5,1,2,3,5,1,2,4] => return 2
 * [2,1,1,2,3,5,1,2,3] => return 1
 */

function findRecurring(arr) {
    let numberObj = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].toString();
        if (!numberObj.hasOwnProperty(key)) {
            numberObj[key] = 1;
        } else {
            // console.log(key);
            return key;
        }
        if (i === arr.length - 1 && numberObj[key] <= 1) {
            // console.log('undefined');
            return undefined;
        }
    }
} //O(n)
findRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]);
