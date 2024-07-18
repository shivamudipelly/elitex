let icons = document.querySelectorAll('.option-icon i')
let you =  document.querySelector('.your-icon')
let yourOption = document.querySelector('.you h3')
let comp = document.querySelector('.computer-icon')
let compOption = document.querySelector('.computer h3')
let result = document.querySelector('.result h2')

let stop1 = document.querySelector('.stop')
let text = document.querySelector('.fetching')

let j=0
/* ------------------------------------------------------------------------------------------------------------------------------- */
/*                                            setting the pause of the game for 2 seconds                                          */
/* ------------------------------------------------------------------------------------------------------------------------------- */

// function stop(){
//     stop1.style.height = "100%"
//     text.style.height  = "100%"
//     text.style.zIndex = 2;
//     setTimeout(() => {
//         text.innerHTML = "generating output ......."
//     }, 1000);
//     text.innerHTML = "intializing...."
// }

// function off(){
//     text.style.zIndex = -1
//     stop1.style.height = 0
//     text.style.height  = 0
// }
/* ------------------------------------------------------------------------------------------------------------------------------- */
/*                                       local stogare  getting items                                                              */
/* ------------------------------------------------------------------------------------------------------------------------------- */
// function func(){
//     const itemCount = localStorage.length
//     const allItems = {}
    
    
//     for(let j =0;j<itemCount;j++){
//         const key = localStorage.key(j)
//         allItems[key] = localStorage.getItem(key) 
//     }
//     return allItems
//     // console.log(allItems)
//     // localStorage.clear()
// }

/* ------------------------------------------------------------------------------------------------------------------------------- */
/*                                                       game logic code                                                           */
/* ------------------------------------------------------------------------------------------------------------------------------- */


let arr = [["rock","fa-hand-back-fist"],["paper","fa-hand"],["scissor","fa-hand-scissors"]]
for(let i=0;i<icons.length;i++){
    icons[i].addEventListener('click',function(){
        
        // stop()
    rand = Math.floor(Math.random()*3)
            
    you.innerHTML = `<i class="fa-solid ${arr[i][1]}"></i>`
    yourOption.innerHTML = arr[i][0]
    comp.innerHTML = `<i class="fa-solid ${arr[rand][1]}"></i>`
    compOption.innerHTML = arr[rand][0]
            
    if(arr[i][0] == "rock" && arr[rand][0] == "paper"){
        result.innerHTML = "BETTER LUCK NEXT TIME"
        localStorage.setItem(j++,"you lose") 
    }
    else if(arr[i][0] == "rock" && arr[rand][0] == "scissor"){
        result.innerHTML = "you won "
        localStorage.setItem(j++,"you win")
    }
    else if(arr[i][0] == "paper" && arr[rand][0] == "scissor"){
        result.innerHTML = "BETTER LUCK NEXT TIME"
        localStorage.setItem(j++,"you lose")
    }
    else if(arr[i][0] == "paper" && arr[rand][0] == "rock"){
        result.innerHTML = "you won"
        localStorage.setItem(j++,"you win")
    }
    else if(arr[i][0] == "scissor" && arr[rand][0] == "paper"){
        result.innerHTML = "you won"
        localStorage.setItem(j++,"you win") 
    }
    else if(arr[i][0] == "scissor" && arr[rand][0] == "rock"){
        result.innerHTML = "BETTER LUCK NEXT TIME"
        localStorage.setItem(j++,"you lose")
    }
    else{
    result.innerHTML = "tie"
    localStorage.setItem(j++,"tie")
   }
//    off()
//    setTimeout(reset,2000)

})
}


/* ------------------------------------------------------------------------------------------------------------------------------- */
/*                                          clearing all ouputs of the after 4 seconds                                             */
/* ------------------------------------------------------------------------------------------------------------------------------- */
function reset(){
    you.innerHTML = ""
    yourOption.innerHTML = ""
    comp.innerHTML = ""
    compOption.innerHTML = ""
    result.innerHTML = ""
}