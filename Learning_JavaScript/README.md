# How JavaScript works
1) allocate memory(the process of reserving virtual or physical computer space for a specific purpose).
2) parse and execute(read and run command).
## Javascript Engine consist two parts.
1) Memory Heap is where the memory allocation happen.
2) Call Stack is where your code read and execute our scripts.

![alt text](<Screenshot (65).png>)

### 1) Memory Heap
- Memory leak will happen when we have so much of unused memory and fill up memory heap.
### 2) Call Stack

    E.X.

    const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
    }

    ### note read from bottom to above ###

    then remove one()
    then remove two()
    remove console.log('4');

    and then after this

    console.log('4');
    two()
    one()  first get run

    what happenning in call stack (First in last out)

#### stack overflow
    
        E.X.
        function foo() {
        foo()
        }
        foo()
![alt text](<Screenshot (66).png>)


## Synchronous  V.S. Asynchronous Programming
### Synchronous 
Basically means that you can only execute one thing at a time. But It can get slow because we have tow wait things to get done before we can go to other one.

    E.X.

    console.log("10")
    console.log("11")
    console.log("12")

    output : 10
             11
             12
### Asynchronous

    E.X.

    console.log("10")
    setTimeout(() => {
        console.log("11")
    }, 2000)
    console.log("12")

    output : 10
             12
             11
## Javascript run-time Environment
![alt text](<Screenshot (67).png>)
## conclusion
- Javascript is a single threaded langauge that can be non-blocking.
- single-threaded mean can only have one call Stack and can only do one at the time.
- In order to be not block a single thread. It can be asynchronous.
