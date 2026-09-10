'use strict';
// this is used to select element from the html to the js...by using the same
//class name you use for the css
// console.log(document.querySelector('.message').textContent)
// // for quick manipulation
// document.querySelector('.message').textContent = 'correct number🎉🎉'
// console.log(document.querySelector('.message').textContent)
// // document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 13;
// document.querySelector('.guess').value = 23
// console.log (document.querySelector('.guess').value = 23)
 
let secretnumber = Math.trunc(Math.random()*20)+1;
// the will control the number of chances left to try
let score = 20;
let highscore  = 0
const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click',
    function() {
        //note that the Number funtion wiill help to
        // convert the typeof for string to number
        const guess = Number(document.querySelector('.guess').value)
console.log(guess, typeof guess)
// if no number is been entered.. then it displays this command
if(!guess){
    //  document.querySelector('.message').textContent = 'no number was selected⚠️'
     displayMessage('no number was selected⚠️')
// if the number entered is correct then display this

}else if (guess === secretnumber){
    // document.querySelector('.message').textContent = 'you are correct 🎉🎉🎉'
    displayMessage('you are correct 🎉🎉🎉')
    document.querySelector('.number').textContent = secretnumber
    document.querySelector('body').style.backgroundColor = '#60b347'
document.querySelector('.number').style.width = '30rem'
// for the highscore 
if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore
}
// when guess is wrong
}else if (guess!==secretnumber) { 
    if(score > 1){
// document.querySelector('.message').textContent = guess> secretnumber?'number is too high🔝🔝🔝':'too low '
    displayMessage( guess> secretnumber?'number is too high🔝🔝🔝':'too low ')
score--;

    document.querySelector('.score').textContent = score
}else
     {//document.querySelector('.message').textContent = 'you lost 💥💥💥'
        displayMessage('you lost 💥💥💥')
    document.querySelector('.score').textContent = 0
    }

} // ← FIX: closes "else if (guess!==secretnumber)"

}); // ← FIX: closes the .check addEventListener


    // if the number entered is higher than the guess number then display this
// }else if (guess > secretnumber){
// if(score > 1){
// document.querySelector('.message').textContent = 'number is too high🔝🔝🔝'
//     score--;
//     document.querySelector('.score').textContent = score
// }else{document.querySelector('.message').textContent = 'you lost 💥💥💥'
//     document.querySelector('.score').textContent = 0
// }

    
// if the number entered is lesser than the guess number then display this
// }else if (guess <  secretnumber)
//     {if(score > 1){
// document.querySelector('.message').textContent = 'too low⏬⏬⏬'
//     score--;
//     document.querySelector('.score').textContent = score
// }else{document.querySelector('.message').textContent = 'you lost 💥💥💥'
//     document.querySelector('.score').textContent = 0
// }

// }
//  }
// )
// this part handles the again button
// so wen ever the again button is click
//1. the game restart 2. the score reset. 3.the message goes back to
//"start guessing". 4. high score reset. 5. the colour goes back to its intial color
// 6. reset the secret number 7. also restart the input space
document.querySelector('.again').addEventListener('click', function() {
    score = 20
    secretnumber = Math.trunc(Math.random()*20)+1;

    // document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
}

)