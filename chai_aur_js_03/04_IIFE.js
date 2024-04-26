//Immediately Invoked function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    console.log(`DB CONNECTED`);
})();

// ()() - global scope ke pollution se problem hoti hai kai baar 
// global scope/variable k ppollution o hatane k liye IIFE


// named iife
// (function chaiaurjs(){ 
//     console.log("DB CONNECTED 2");
// })();

// unnamed iife
(() => {
    console.log("DB CONNECTED 2");
})();



