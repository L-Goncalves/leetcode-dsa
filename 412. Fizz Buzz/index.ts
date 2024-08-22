// @ts-nocheck
function fizzBuzz(n: number): string[] {
    const answers = [];
    for(let i = 1; i <= n; i++){
        if(i%3 === 0 && i%5 === 0){
            answers.push("FizzBuzz")
        }
        else if(i%3 === 0){
            answers.push("Fizz");
        }
        else if(i%5 === 0){
            answers.push("Buzz")
        }
        else {
            answers.push(i.toString())
        }
   
    }

    return answers;
};