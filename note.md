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

//Khóa 28Tech BỎ: B1-B13, B12-B13(JS Advanced but bullshit vcl???)
