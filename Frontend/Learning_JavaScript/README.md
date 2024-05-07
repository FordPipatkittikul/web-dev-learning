# JavaScript
It is dynamically typed languages and weakly typed languagues

    var a = 1
    var b = "abc"
    console.log(a+b)   ans: "1abc"   // weakly typed

Dynamic typed vs static typed: https://www.coderscampus.com/static-typing-vs-dynamic-typing/
# How JavaScript works
1) allocate memory(the process of reserving virtual or physical computer space for a specific purpose).
2) parse and execute(read and run command).
## Javascript Engine consist two parts.
1) Memory Heap is where the memory allocation happen.
2) Call Stack is where your code read and execute our scripts.

![alt text](<Screenshot (65).png>)

picture credit: from https://zerotomastery.io/

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

picture credit: from https://zerotomastery.io/
## Synchronous  V.S. Asynchronous Programming
### Synchronous 
Basically means that you can only execute one thing at a time. But It can get slow because we have to wait things to get done before we can go to other one. or what we call single-thread

    E.X.

    console.log("10")
    console.log("11")
    console.log("12")

    output : 10
             11
             12
### Asynchronous
It is multi-thread, which means operations or programs can run in parallel.
    
    E.X.

    console.log("10")
    setTimeout(() => {
        console.log("11")
    }, 2000)
    console.log("12")

    output : 10
             12
             11

## Single threaded V.S. Multi-thread
- single-threaded mean can only have one call Stack and can only do one at the time.
- Multi-thread mean multiple call stack and can do multiple at the time.

## Javascript run-time Environment
![alt text](<Screenshot (67).png>)
1) Call Stack

2) callbackqueue

3) Event loop: Keep checking Call stack is empty

4) Web Api
- DOM
- fetch
- setTimeout()

        test example
        function printHello() {
            console.log(3);
        }

        function baz() {
            setTimeout(printHello, 3000);
            console.log(4)
        }

        function bar() {
            console.log(2)
            baz();
        }

        function foo() {
            console.log(1)
            bar();
        }

        foo();

        Visual on how its running: http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG
            8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KI
            CAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0K
            ZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

picture credit: from https://zerotomastery.io/
## conclusion
- Javascript is a single threaded langauge that can be non-blocking.
- single-threaded mean can only have one call Stack and can only do one at the time.
- In order to be not block a single thread. It can be asynchronous.

# Review ECMAScript-new-features from ES6 - ES2023

Guide : https://github.com/daumann/ECMAScript-new-features-list
