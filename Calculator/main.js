var bar = document.getElementById('numBar')
var left  = 0,right=0;
var op = '';
function appendNumber(number){
    if(op == '' ){
        bar.value += number;
        left = parseFloat(bar.value);
        console.log(left);
        if(isNaN(left)){
            alert('Syntax Error')
            allClear();
        }
    }
    else{
        bar.value = "";
        bar.value += number;
        right = parseFloat(bar.value);
        calculate()
        if(isNaN(right)){
            alert('Syntax Error')
            allClear();
        }
    }

}

function appendOperation(operation){
    op = operation;
}
function calculate(){
    switch(op){
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right ;
            break;
        case '*':
            result = left * right ;
            break;
        case '/':
            result = left / right;
            break;
    }
    bar.value = result;
    left = result;
    right = 0;
    op = '';
}

function allClear(){
    left = 0 , right = 0 , op = '' , bar.value = "";
}
