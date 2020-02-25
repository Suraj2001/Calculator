let preinput='0'
let operator=''
let currentinput='0'
const calculatorscreen=document.querySelector(".calculator-screen")

const updatescreen=(number)=>{
    calculatorscreen.value=currentinput
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) =>{
    number.addEventListener(("click"),(event) =>{
        inputNumber(event.target.value)
        updatescreen(currentinput)
    })
    
})



const inputNumber= (number) =>{
    if(currentinput === '0'){
        currentinput = number
    }else{
        currentinput += number
    }
    
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator)=>{
    operator.addEventListener("click",(event) =>{
        inputoperator(event.target.value)
        updatescreen('')
    })

})

const inputoperator = (operator) =>{
    preinput = currentinput
    calculationoperator = operator
    currentinput = '0'
}

const equalsign = document.querySelector('.equal-sign')

const calculate = () =>{
    let result=0
    switch(calculationoperator){
        case '+':
            result = parseInt(preinput) + parseInt(currentinput)
            break
        case '-':
            result = parseInt(preinput) - parseInt(currentinput)
            break
        case '/':
            result = parseInt(preinput) / parseInt(currentinput)
            break
        case '*':
            result = parseInt(preinput) * parseInt(currentinput)
            break
        default:
            return
    }
    currentinput = result
    calculationoperator = ''
}


equalsign.addEventListener("click", () =>{
        calculate()
        updatescreen(currentinput)
})

const clearBtn= document.querySelector('.all-clear')

const clearAll = () =>{
    preinput='0'
    calculationoperator = ''
    currentinput = '0'
}

clearBtn.addEventListener('click', ()=>{
    clearAll()
    updatescreen(currentinput)
})

document.addEventListener('keydown',(event)=>{
    let key = event.key
    inputNumber(key)
    updatescreen()
})
