const input = document.getElementById('result')
const deleteString = document.getElementById('deleteString');
const deleteAll = document.getElementById('deleteAll');
const deleteOne = document.getElementById('deleteOne');
const plusMinus = document.getElementById('plusMinus');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const output = document.getElementById('resultNumber');
const numbers = document.getElementsByClassName('calculator__buttons__number')
const actions = document.getElementsByClassName('calculator__buttons__action')
const handlePlusMinus = () => {
    //меняем знак
    if (result.value != '0')  {
        result.value *= -1;
    }
}
const addDot = () => { 
    //добавляем точку
    if (result.value.indexOf('.')===-1) {
        result.value +='.'
    }
}
const addNumber = (num) => { 
    //добавляем число в поле
    if (result.value !== '0'){
        result.value += num
    }
    else {
        result.value = num
    }
}
const addSign = (sign) => { 
    //добавляем знак (+-/*)
    if (result.value !== '0') {
        result.value += sign;
        output.innerHTML+= result.value;
        result.value = '0';
    }
}
const calc = () =>{
    //вычисляем значение
    const value = output.innerHTML+ result.value;
    result.value = eval(value);
    output.innerHTML = '';
}
function resetResult(){
    result.value = '0';
}
function resetValueAndOutput(){
    result.value = '0';
    output.innerHTML = '';
}
//привязываем обработчик нажатия на кнопку
deleteString.addEventListener('click',resetResult);
deleteAll.addEventListener('click',resetValueAndOutput);
deleteOne.addEventListener('click',()=>{
    result.value = result.value.slice(0,-1);
});
equal.addEventListener('click',() => calc() )
dot.addEventListener('click',()=> addDot())
plusMinus.addEventListener('click',()=> handlePlusMinus())
for (let i = 0; i< numbers.length; i++){
    numbers[i].addEventListener('click',()=> addNumber(numbers[i].innerHTML))
}
for ( let i = 0; i< actions.length; i++){
    actions[i].addEventListener('click',()=> addSign(actions[i].innerHTML))
}
//для того чтобы пользователь мог использовать кнопки на клаве
document.addEventListener('keyup',(event) => {
    if (event.keyCode>='0' && event.keyCode<='9') addNumber(event.keyCode);
    for (let i = 0; i < actions.length;i++){
        const act = actions[i].innerHTML;
    
        if (event.key== act){
            addSign(actions[i].innerHTML)
        }
    }
    if (event.key == '.') {
        addDot()
    }
    if (event.key == '='|| event.key == 'Enter'){
        calc()
    }
    if (event.keyCode == 8){
        result.value = result.value.slice(0,-1)
    }
})


