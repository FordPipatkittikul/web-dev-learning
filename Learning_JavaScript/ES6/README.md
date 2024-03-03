# ES6
Some feature Update!
## let, const
- const variable can't be reassign. Using it for store something that doesn't have to be change.

- Variables declared by let are only available inside the block where they're defined.

## Destructuring
- JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

      const obj = {
      player: "bobby",
      expereince: 100,
      wizardLevel: false
      }
      
      // const player = obj.player; // same thing             player: bobby
      // const experience = obj.expereince // same thing      experience: 100
      // const { player, expereince} = obj //  same thing     player: bobby, experience: 100
      
      // let wizardLevel = obj.wizardLevel; //  same thing   ans : false
      // let {wizardLevel} = obj; // same thing ans : false
## obj properties
      let name = "Ford";
      const obj1 = {
          [name]: "hi hi"
      }
      
      console.log(obj1) // { Ford: 'hi hi' }


      let a = "Ford";
      let b = true;
      let c = {}
      const obj2 = { a,b,c }

      console.log(obj2) // { a: 'Ford', b: true, c: {} }
## template Strings

      const firstName = "John";
      const lastName = "Doe";
      const greetingBest = `Hi my name is ${firstName} ${lastName}, I'm a student
## default arguments

      function greet( firstName = '', lastName = ''){
         return `Hi my name is ${firstName} ${lastName}, I'm a student`;
      }
## arrow functions
      function add(a,b) {
          return a + b;
      }  // same thing
      
      const add2 = (a,b) => a+b; // same thing
