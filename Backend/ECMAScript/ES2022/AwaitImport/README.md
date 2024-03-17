# AwaitImport

With this power you can include modules conditionally in order to save our resources
    
    E.X.

    // script2.mjs file
    
    export const largeNumber = 354;


    // script.mjs

    let a;
    if( 1 === 1){
        const {largeNumber} = await import ("./script2.mjs")
        a = largeNumber
    }

    /* We just want to import module if the condition is true otherwise there's no 
    point to import module in order to save our resources. */
