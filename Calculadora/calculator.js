class Calculator{
    constructor(operand1Element, operand2Element){
        this.operand1Element = operand1Element; //Numero superior de la pantalla
        this.operand2Element = operand2Element;//Numero inferior de la pantalla
        this.clear(); //Ejecuta la funcion clear()
    }

    clear(){
        this.operand1 = 0; //Numero superior de la pantalla
        this.operand2 = 0; //Numero inferior de la pantalla
        this.operator = '';
        this.updateUI();
    }

    updateUI(){
        this.operand1Element.innerHTML = this.operand1 + this.operator; //Concatena la operacion
        this.operand2Element.innerHTML = this.operand2;
    }
    
    //Mostrar numeros en pantalla
    appendNumber(number){
        if(number === "." && this.operand2.includes('.')) return;
        this.operand2 = this.operand2 === 0 
                            ? number  
                            : this.operand2.toString()+number;
        this.updateUI();
    }

    //Eliminar numeros
    delete(){
        if(this.operand2 === 0) return;
        this.operand2 = +this.operand2.toString().slice(0,-1);
        this.updateUI();
    }

    operation(operator){
        if(this.operator){
            //calculo
            this.calc();
        }
        this.operator = operator;
        this.operand1 = +this.operand2 === 0 ? this.operand1 : this.operand2;
        this.operand2 = 0;
        this.updateUI();
    }

    calc(){
        switch(this.operator){
            case "+":
                this.operand1 = +this.operand1 + +this.operand2;
            break;
            case "-":
                this.operand1 = +this.operand1 - +this.operand2;
            break;
            case "*":
                this.operand1 = +this.operand1 * +this.operand2;
            break;
            case "/":
                this.operand1 = +this.operand1 / +this.operand2;
            break;
        }
        this.operator = "";
        this.operand2 = 0;
        this.updateUI();
    }
}

const operand1Element = document.querySelector("[data-operand-1]"); 
const operand2Element = document.querySelector("[data-operand-2]");
const clearButton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]")
const deleteButton = document.querySelector("[data-delete]");
const operationButton = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");

const calculator = new Calculator(operand1Element, operand2Element);

//BOTON C -> CLEAR para borrar los datos en pantalla
clearButton.addEventListener("click", () =>{
    calculator.clear();

})

//BOTON DE NUMEROS
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerHTML);
    })
});

//BOTON PARA BORRAR
deleteButton.addEventListener('click', () => {
    calculator.delete();
})


//BOTON DE OPERADORES
operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.operation(button.innerHTML);
    })
});

//BOTON DE RESULTADO
equalsButton.addEventListener("click", () =>{
    calculator.calc();
})