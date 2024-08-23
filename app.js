//const divise = document.querySelector('#division')
//const moins = document.querySelector('#moins')
//const plus = document.querySelector('#plus')
//const multiply = document.querySelector('#multiply')
//const float = document.querySelector('#float_sign')

const span = document.querySelector('span')
const enter = document.querySelector('.inclusion')
const show = document.querySelector('.show_result')
const numbers = document.querySelectorAll('.letter')

const equal = document.querySelector('#equal').addEventListener('click', () => {
    show.textContent = eval(enter.textContent)
    enter.textContent = ''
})
const clear = document.querySelector('.clear').addEventListener('click', () => {
    enter.textContent = ''
    /*enter.style.backgroundColor = "blue"
    enter.style.height = "4px"
    enter.style.width = "4px"*/
})


numbers.forEach((number) => number.addEventListener('click', e => {
    const value = e.target.textContent 
    enter.textContent += value
    if(enter.equal){
        equal
        enter.textContent = ''
    }
    
}))

/*function add(){
    return a + b
}
function subtract(){
    return a - b
}
function mulltiply(){
    return a * b
}
function divide(){
    return a / b
}*/