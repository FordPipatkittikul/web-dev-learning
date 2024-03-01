# ES6

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
      
      // const player = obj.player; // same thing
      // const experience = obj.expereince // same thing
      // const { player, expereince} = obj //  same thing
      
      // let wizardLevel = obj.wizardLevel; //  same thing   ans : false
      // let {wizardLevel} = obj; // same thing ans : false
## template Strings

      const firstName = "John";
      const lastName = "Doe";
      const greetingBest = `Hi my name is ${firstName} ${lastName}, I'm a student
## default arguments

        function greet( firstName = '', lastName = ''){
          return `Hi my name is ${firstName} ${lastName}, I'm a student`;
         }`
