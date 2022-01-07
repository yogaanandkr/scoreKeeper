// const p1display = document.querySelector("#p1display")
// const p2display = document.querySelector("#p2display")
// const p1button = document.querySelector("#p1button")
// const p2button = document.querySelector("#p2button")
// const resetBtn = document.querySelector('#reset')
// const select = document.querySelector('#select')

// let p1score = 0;
// let p2score = 0;
//  let winningScore 
// let gameOver = false

// select.addEventListener('change',function(){
//     winningScore = parseInt(select.value)
//     reset()
// })

// p1button.addEventListener('click',function(e){
//     if(!gameOver){
//         p1score+=1
//         if(p1score === winningScore){
//             gameOver = true
//             p1display.classList.add('win')
//             p2display.classList.add('loose')
//             p1button.classList.add('btn-success')
//             p2button.classList.add('btn-danger')
//             p1button.disabled = true;
//             p2button.disabled = true;
//         }
//         p1display.innerText = p1score
//     }  
// })

// p2button.addEventListener('click',function(e){
//     if(!gameOver){
//         p2score+=1;
//         if(p2score === winningScore){
//             gameOver = true  
//             p2display.classList.add('win')
//             p1display.classList.add('loose') 
//             p2button.classList.add('btn-success')
//             p1button.classList.add('btn-danger')
//             p1button.disabled = true;
//             p2button.disabled = true; 
//         }
//         p2display.innerText = p2score
//     }
// })
// resetBtn.addEventListener('click',reset)



// function reset(e){
//     gameOver = false;
//     p1score = 0;
//     p2score = 0;
//     p1display.innerText = p1score
//     p2display.innerText = p2score
//     p1display.classList.remove('win','loose')
//     p2display.classList.remove('win','loose')
//     p1button.classList.remove('btn-success','btn-danger')
//     p2button.classList.remove('btn-danger','btn-success')
//     p1button.disabled = false;
//     p2button.disabled = false;
    
// }


                                    // refactoring all 
let winningScore 
let gameOver = false
const resetBtn = document.querySelector('#reset')
const select = document.querySelector('#select')

select.addEventListener('change',function(){
    winningScore = parseInt(select.value)
    reset()
})

const p1={
    score: 0,
    display: document.querySelector("#p1display"),
    button: document.querySelector("#p1button")
}

const p2={
    score: 0,
    display: document.querySelector("#p2display"),
    button: document.querySelector("#p2button")
}

p1.button.addEventListener('click',function(){
    updateScores(p1,p2)
})

p2.button.addEventListener('click',function(){
    updateScores(p2,p1)
})

function updateScores(player,opponent){
    if(!gameOver){
        player.score += 1
        if(player.score === winningScore){
            gameOver = true 
            player.display.classList.add('win')
            opponent.display.classList.add('loose')
            player.button.classList.add('btn-success')
            opponent.button.classList.add('btn-danger')
            player.button.disabled = true
            opponent.button.disabled = true
        }
        player.display.innerText = player.score;
    }
}

resetBtn.addEventListener('click',reset)


function reset(){
    gameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.innerText = 0
        p.display.classList.remove('win','loose')
        p.button.classList.remove('btn-success','btn-danger')
        p.button.disabled = false;

    }
}