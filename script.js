console.log(5)
function namer(name) {
const f = name.slice(0,1).toUpperCase()
const s = name.slice(1).toLowerCase()
const ansver = f+s
return ansver
}
alert (namer("TaTyAna")) 




document.addEventListener ("DOMContentLoaded",function(){

    const FindButton = document.querySelectorAll ("button")[1]
    let i  = 0
    function passButton (FindButtons) {

        console.log('passButton')
        i = 0 
       
    }
    function bark () {
        console.log('bark')
        i++
       
    }
    function site () {
        console.log('site')
        i++
    }
    function jump () {
        console.log('jump')
        i++
    }
    

    function test(){
        const title =  document.createElement('p');
        title.innerText = `New Title ${i}`;
         console.log(title,'this is my title');
         document.querySelector('.ooooo').appendChild(title);
  
        switch (i){
            case 0:
                bark()
            break
            
            case 1:
                jump()
             break
            case 2:
                site()
                break
            
            case 3:
                passButton()
            break
        }
    setTimeout(bark,3000)
    }

    
    FindButton.addEventListener("click",  test )
    FindButton.addEventListener("mouseenter",   jump )
    FindButton.addEventListener("mouseleave",   bark )





})

