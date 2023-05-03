document.addEventListener ("DOMContentLoaded",function (){

const arrayButton = document.querySelectorAll ("button")  


const lastButton = arrayButton [1]

function renderTitle(){

console.log ("renderTitle")

 const findedDiv = document.querySelectorAll ("div")

console.log (findedDiv)
const createdTitle = document.createElement("p")
createdTitle.innerText = "hello from the future"
console.log(createdTitle)
console.log(findedDiv)
findedDiv[1].appendChild(createdTitle)


}
lastButton.addEventListener("click",renderTitle)

console.log ()






















 const FinishButton=document.querySelectorAll ("button")[2]
 function ifclic () {

const End= document.createElement ("p")
End.innerText="good bye"
const findedDiv = document.querySelectorAll ("div")
findedDiv[2].appendChild(End)


 }
FinishButton.addEventListener ("click",ifclic)

})

