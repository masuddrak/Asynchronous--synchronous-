console.log('give me 1 taka')
console.log('give me 2 taka')

setTimeout(() => {
    console.log('give me 10 taka')
}, 5000);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

setTimeout(() => {
    console.log('give me 20 taka')
}, 4000);
// setInterval............
let second=0
const timeID=setInterval(()=>{
    second++
    console.log(second)
    if(second>10){
        clearInterval(timeID)
    }
},2000)


console.log('give me 3 taka')
console.log('give me 4 taka')