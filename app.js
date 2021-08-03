function calculator() {
const displayDiv = document.querySelector(".display");
const output = document.createElement("div");
displayDiv.appendChild(output);

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const clear = document.querySelector(".clear");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const minus = document.querySelector(".minus");
const add = document.querySelector(".add");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");

output.textContent = " "
one.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + 1
})
two.addEventListener("click", () => {
    const displayedNum = output.textContent

    output.textContent = displayedNum + 2
    
})
three.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + 3
})
four.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + 4
})
five.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + 5
})
six.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + 6
})
seven.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + 7
})
eight.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + 8
})
nine.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + 9
})
zero.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + 0
})
decimal.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + "."
})
add.addEventListener("click", () => {
   const displayedNum = output.textContent
   output.textContent = displayedNum + "+" 


})
minus.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + "-" 
 
    
})
divide.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + "/" 
 
})
multiply.addEventListener("click", () => {
    const displayedNum = output.textContent
    output.textContent = displayedNum + "*" 
 
})

clear.addEventListener("click", () => {
    
    wipe();
})
equals.addEventListener("click", () => {
    if (output.textContent.includes("+")) {
     let a = output.textContent.slice(0, output.textContent.indexOf("+"))
     let b = output.textContent.slice(output.textContent.indexOf("+") + 1, output.textContent.length)

     sum(a, b)
    }
    if (output.textContent.includes("-")) {
        let a = output.textContent.slice(0, output.textContent.indexOf("-"))
        let b = output.textContent.slice(output.textContent.indexOf("-") + 1, output.textContent.length)
   
        substract(a, b)
       }
    if (output.textContent.includes("/")) {
        let a = output.textContent.slice(0, output.textContent.indexOf("/"))
        let b = output.textContent.slice(output.textContent.indexOf("/") + 1, output.textContent.length)
   
        div(a, b)
       }   
    if (output.textContent.includes("*")) {
        let a = output.textContent.slice(0, output.textContent.indexOf("*"))
        let b = output.textContent.slice(output.textContent.indexOf("*") + 1, output.textContent.length)
   
        mult(a, b)
       }



})

function sum(a, b) {
    return output.textContent = (+a + +b)   
  }
  function substract(a, b) {
    return output.textContent = (a - b)
}
function mult(a, b) {
    return output.textContent = (a * b)
}
function div(a, b) {
    return output.textContent = (a / b)
}

function wipe() {
    return output.textContent = " "
}
}

calculator();