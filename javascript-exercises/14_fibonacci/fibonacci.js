const fibonacci = function(num) {
    if(num < 0){
        return "OOPS";
    }
    if(num == 1){
        return 1;
    }
    let fib1 = 1;
    let fib2 = 0;
    let seq = 0;
    for(let i = 2; i <= num; i++){
        seq = fib1 + fib2;
        fib2 = fib1;
        fib1 = seq;
    }
    return seq;
};

// Do not edit below this line
module.exports = fibonacci;
