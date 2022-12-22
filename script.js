btn = document.getElementById("btn")
guessBtn = Array.from(document.getElementsByClassName("guess"))
text = document.querySelector("p")
replayBtn = document.getElementById("replay")
let myGuess
let randomNum
let firstTime

replay.addEventListener("click", function(){
  window.location.reload()
})

btn.addEventListener("click", function(){
  myGuess = null
  randomNum = Math.floor(Math.random() * 3) + 1
  console.log("Random number is " + randomNum)
  firstTime = true
  btn.classList.add("hide-btn")
  text.classList.add("hide-btn")
  guessBtn.forEach((each)=>{each.classList.remove("hide-guess")})
})

guessBtn.forEach((each) => each.addEventListener("click", function(){
  myGuess = parseInt(each.innerHTML)
  console.log("Your Guess is " + myGuess)
  if (firstTime){ eliminateOne() }
  else { showResult() }
}))

function eliminateOne(){
  let myArray = []
  guessBtn.forEach((each) => {
    if(parseInt(each.innerHTML) != myGuess && parseInt(each.innerHTML) != randomNum){
      myArray.unshift(each)
    }
  })
  if(myArray.length == 2){
    let num = Math.floor(Math.random() * 2)
    myArray[num].classList.add("hide-guess")
  } else {
    myArray[0].classList.add("hide-guess")
  }
  guessBtn = Array.from(document.getElementsByClassName("guess"))
  text.innerHTML = "Let me help you... I eliminated one of them!"
  +"<br><br>You can still change your choice :)"
  firstTime = false
}

function showResult(){
  if(myGuess == randomNum){
    console.log("OMG! You are correct!")
    text.innerHTML = "OMG! You are correct"
    guessBtn.forEach((each) => {
      if(each.innerHTML != myGuess){ 
        each.classList.add("hide-guess")
      }
    })
  } else {
    console.log("You do not possess any particle of sixth feeling")
    text.innerHTML = "You do not possess any particle of sixth feeling :("
    guessBtn.forEach((each) => {
      if(each.innerHTML == myGuess){ 
        each.style.color = "red"
        each.style.boxShadow = "0px 10px red"
        each.style.borderColor = "red"
      }
    })
  }
  replay.classList.remove("hide-replay")
}