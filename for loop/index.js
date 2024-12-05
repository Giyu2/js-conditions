//Exe1
for( let number = 0; number <= 15; number++)
    if (number % 2 === 0){
        console.log('even number');
    } else{
        console.log('odd number');
    }
//Exe2
for (let i = 1; i < 100; i++) {
    if ( i % 3 === 0) {
        console.log(`${i} fizz`);   
    } else if ( i % 5 === 0) {
        console.log( `${i} buzz`);
    } else if ( i % 3 === 0 && i % 5 === 0){
        console.log(`${i} fizzbuzz`);
    } else {
        console.log(i);
        
    }
}









//Exe3 
let arr_1=[3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2=[9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let sumOfFirstArray = 0;
let sumOfSecondArray = 0;
for ( let i=0; i < arr_1.length; i++){
    sumOfFirstArray = sumOfFirstArray + arr_1[i];
    console.log(`this is first ${1} number`, arr_1[i]);
    console.log(`this is the sum of first array ${sumOfFirstArray}`);
    sumOfSecondArray = sumOfSecondArray + arr_2[i];
    console.log(`this is second ${2} number`,arr_2[i]);
    console.log(`this is the sum of second array ${sumOfFirstArray}`);
    console.log(sumOfFirstArray+sumOfFirstArray);
}
