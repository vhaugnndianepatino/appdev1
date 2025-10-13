function greet(name){
    return "Hello, " + name + "!";
}
console.log (greet ("Vhaugnn"));

const square = (num) => num * num;
console.log("Square of 7:", square(7));

function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}

let result = calculator(27, 22);
console.log("Sum:", result.sum);
console.log("Product:", result.product);