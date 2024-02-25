# Data structures

## Array
- Accessing by index. ordered element
- It is reference types(passed by reference)

## push, pop, shift
- Modified the original array
- Shift() method remove the first element of the array
- push() method adds new items to the end of an array
- pop() method removes (pops) the last element of an array.

        var list = ["tiger", "cat", "bear"];

        list.shift();           // ["cat", "bear"]
        list.pop();             // ["cat"]
        list.push("lion");      // ["cat","lion"]
        console.log(list)       // ["cat","lion"]

## concat
- Create a new array. have to assign to a variable

        const array1 = ['a', 'b', 'c'];
        const array2 = ['d', 'e', 'f'];
        const array3 = array1.concat(array2);
        console.log(array3); // ["a", "b", "c", "d", "e", "f"]
