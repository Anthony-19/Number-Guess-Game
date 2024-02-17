const container = document.querySelector('.container')
const container_flex = document.querySelector('.container .container-flex');
const guessBtn = document.querySelector('.container .container-flex .input--numbers .check');
const guessInput = document.querySelector('.container .container-flex .input--numbers .input-guess');
const guessLowHigh =  document.querySelector('.container .container-flex .guessHighLow');
const guessedNum = document.querySelector('.container .container-flex .guessed-number');
const no_of_chances = document.querySelector('.container .container-flex .no-of-chances');
const lost = document.querySelector('.container .lost');
const lost_the_game = document.querySelector('.container .lost .you--lost');
const play_again = document.querySelector('.play--again')


let guessNumbers = [];
let chances = 3;
let userValue;
let randomNum;
let generateRandomNumbers = () => {
    randomNum = Math.floor(Math.random() * 10);
    // console.log(randomNum);
}
// generateRandomNumbers()

let checkGuess = () => {
    userValue = parseInt(guessInput.value);
    if(userValue !== ''){
        if(userValue !== randomNum) {
            chances--;
            guessNumbers.push(userValue);
            guessedNum.innerHTML = `Guessed number are: ${guessNumbers}`;
            if(chances !== 0){
                no_of_chances.innerHTML = `No of chances: ${chances}`
            }
            else {
                container_flex.style.display = 'none';
                lost.style.display = 'flex';
                lost_the_game.innerHTML = 'You lost the game 😥😢😤'
    
            }
            if(userValue > randomNum){
                guessLowHigh.innerHTML = `Your guess are high`;
                guessLowHigh.style.display = `block`;
            }
            else{
                guessLowHigh.innerHTML = `Your guess are low`;
                guessLowHigh.style.display = `block`;
            }
        }
        else{
            lost.style.display = 'flex'
            container_flex.style.display = 'none'
            lost_the_game.innerHTML = 'You won the game 👌😊'
        }
    }
    }
guessBtn.addEventListener('click', () => {
    if(userValue !== ''){
        checkGuess()
    }
})
let resetGame = () => {
    container_flex.style.display = 'block';
    lost.style.display = 'none';
    guessLowHigh.style.display = `none`;
    guessInput.value = '';
    chances = 3;
    no_of_chances.innerHTML = `No of chances: ${chances}`
    guessNumbers = [];
    guessedNum.innerHTML = `Guessed number are: ---`;
    generateRandomNumbers();
}

play_again.addEventListener('click', () => {
    resetGame();
})
