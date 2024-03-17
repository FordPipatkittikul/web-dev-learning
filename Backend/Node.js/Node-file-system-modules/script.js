const fs = require('fs')

// readFile

// fs.readFile("./hello.txt", (err, data) => {
//     if (err) {
//         console.log("errorrr");
//     }
//     console.log("Asynchronous",data.toString("utf8"));
// });

// readFileSync

// const file = fs.readFileSync("./hello.txt");
// console.log("Synchronous",file.toString())

// APPEND

// fs.appendFile("./hello.txt", " This is so cool!", (err) =>{
//     if (err) {
//         console.log(err)
//     }
// })

// WRITE

// fs.writeFile("bye.txt", "Sad to see you go", err => {
//     if (err) {
//         console.log(err)
//     }
// })

// DELETE

// fs.unlink("./bye.txt", err =>{
//     if (err) {
//         console.log(err)
//     }
//     console.log("Delete successfully") 
// })

// ____________________________________________________________

/// Exercise : https://adventofcode.com/2015/day/1

// my solution
function part1(){

    fs.readFile("./exercise.txt", (err, data) => {
        console.time("q1-me")
        if (err) {
            console.log("errorrr");
        }

        let answer = 0;
        for(let i = 0; i < data.length; i++){
            if (data.toString()[i] === "(" ){
                answer ++;
            }if (data.toString()[i] === ")"){
                answer --;
            }
        }
        console.log("part 1", answer)
        console.timeEnd("q1-me")
    });

}

// prof solution
function p1(){

    fs.readFile("./exercise.txt", (err, data) => {
        console.time("q1-prof")
        if (err) {
            console.log("errorrr");
        }

        const directions = data.toString();
        const directionsArray = directions.split("");
        const answer = directionsArray.reduce((acc, currentItem) =>{
            if (currentItem === "("){
                return acc += 1
            } else if (currentItem === ")"){
                return acc -= 1
            }
        }, 0)
        console.log("floor:", answer)
        console.timeEnd("q1-prof")
    });

}


part1()
p1()

// __________________________ end part 1 _______________________________//

// my solution
function part2(){

    fs.readFile("./exercise.txt", (err, data) => {
        console.time("q2-me")
        if (err) {
            console.log("errorrr");
        }

        let floor = 0;
        let position = 0;
        for(let i = 0; i < data.length; i++){
            if (data.toString()[i] === "(" ){
                floor ++;
                position ++;
            }if (data.toString()[i] === ")"){
                floor --;
                position ++;
            }if(floor === -1){
                break;
            }
        }
        console.log("part 2",position)
        console.timeEnd("q2-me")
    });

}

// prof solution
function p2(){

    fs.readFile("./exercise.txt", (err, data) => {
        console.time("q2-prof")
        if (err) {
            console.log("errorrr");
        }

        const directions = data.toString();
        const directionsArray = directions.split("");
        let counter = 0;
        let acc = 0;
        const answer = directionsArray.some((currentItem) =>{
            if (currentItem === "("){
                acc += 1
            } else if (currentItem === ")"){
                acc -= 1
            }
            counter ++;
            return acc < 0;
        })
        console.log("basement entered at: " , counter)
        console.timeEnd("q2-prof")
    });

}

part2()
p2()

// __________________________ end part 2 _______________________________//