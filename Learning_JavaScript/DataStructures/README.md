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
## map
    const array = [1,2,3,4];

    const mapArray = array.map((num,i) => {
        return num * 2;
    });
    console.log("map", mapArray);
    // [2,4,6,8]

## filter
    const array1 = [1,2,3,4,6];
    
    const filterArray = array.filter(num => num > 5);
    console.log("filter", filterArray);
    // [6]

## reduce
    const array1 = [1,2,3,4]

    const reduceArray = array.reduce((accumulator,num) => {
        return accumulator + num
    }, 10);
    ### default value for accumulator = 0
    console.log("reduce",reduceArray) 
    // 20
