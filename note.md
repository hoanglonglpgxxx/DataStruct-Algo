1. What is Big O in coding (scalability of code)

- number of operations & elements is linear, more elements -> more operations, linear time
- dont care abt how deep is the line in graph, care abt how the line move when input increase
- Big O rule:

* Worst case
* Remove constants : ex O(101 + 5n + 1) -> O(n + 1) -> O(n), O(n/2) -> O(n)
* Different terms for inputs //nếu các inputs khác nhau, dùng terms khác để phân biệt, do không biết độ dài của chúng
* Drop Non Dominants: chỉ giữ term quan trọng nhất - dominant, những cái khác có thể bỏ : ex: O(N + n^2) -> O(N^2)

- O(n!) : deepest O, O factorial of n: adding a loop for every element
  //? What causes Space Complexity

1. Variables
2. Data Structures
3. Func call
4. Allocations

- Hash collision: xung đột băm
- idempotent

- Linked list

* fast insert, fast delete, ordered, flexible size
* slow lookup, more memory

- Single vs doubly linked list

* single: less memory, less operation, little bit faster, but can traverse from front only (used widely)
* doubly: can traverse both from back and front, if delete prev node-no need to traverse from head node and find what that prev node is (theorathically)

- Stacks and Queues

* limit operations can do on them
* are linear data structure
* allow to traverse (go to data element sequentially - tuần tự)
* they are different only at how data is removed from structure
  a. Stack - Last In First Out

- lookup O(n)
- pop O(1)
- push O(1)
- peek O(1): view that most top item

b.Queues - First In First Out

- lookup O(n)
- enqueue O(1) - push
- dequeue O(1) - remove first item in queue
- peek O(1)

//Khóa 28Tech BỎ: B1-B13, B12-B13(JS Advanced but bullshit vcl???)
/xem lại vid DSnA 10-13,20, read more abt linked list
watching vid 5 folder 9
