let a;
if( 1 === 1){
    const {largeNumber} = await import ("./script2.mjs")
    a = largeNumber
}
/* We just want to import module if the condition is true otherwise there's no 
point to import module in order to save our resources. */
const y = 3;

console.log(a,y)

