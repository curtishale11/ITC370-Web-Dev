let winner = 0
//initializing racer objects 
const racer1 = {
  name: 'racer1',
  position: 0,
  minSpeed: 2,
  maxSpeed: 11,
}

const racer2 = {
  name: 'racer2',
  position: 0,
  minSpeed: 2,
  maxSpeed: 11,
}

const racer3 = {
  name: 'racer3',
  position: 0,
  minSpeed: 2,
  maxSpeed: 11,
}

const racer4 = {
  name: 'racer4',
  position: 0,
  minSpeed: 2,
  maxSpeed: 11,
}

const racer5 = {
    name: 'racer5',
    position: 0,
    minSpeed: 2,
    maxSpeed: 11,
}
        
//getting variables for html items
img1 = document.getElementById('racer1')
img2 = document.getElementById('racer2')
img3 = document.getElementById('racer3')
img4 = document.getElementById('racer4')
img5 = document.getElementById('racer5')

winnerDiv = document.getElementById('winnerDiv')
winnerImg = document.getElementById('winnerImg')
winnerText = document.getElementById('winnerText')
stoplight = document.getElementById('stoplight')

//adding event for clicking the stoplight
stoplight.addEventListener('click', function() {

  stoplight.src = "green_light.jpg"

  //setting racers to default avatar
  img1.src = "avatar1.png"
  img2.src = "avatar2.jpg"
  img3.src = "avatar3.jpg"
  img4.src = "avatar4.jpg"
  img5.src = "avatar5.jpg"

  //adding interval to move racers
  let raceInterval = setInterval(function(){
    //calling functions to move racers
    moveImg(racer1)
    moveImg(racer2)
    moveImg(racer3)
    moveImg(racer4)
    moveImg(racer5)
    
    //checking for winner
    if (racer1['position'] >= 800){
      winner = 1
      winnerImg.src = "avatar1.png"
    }
    else if (racer2['position'] >= 800){
      winner = 2
      winnerImg.src = "/avatar2.jpg"
    }
    else if (racer3['position'] >= 800){
      winner = 3
      winnerImg.src = "avatar3.jpg"
    }
    else if (racer4['position'] >= 800){
      winner = 4
      winnerImg.src = "avatar4.jpg"
    }
    else if (racer5['position'] >= 800){
        winner = 5
        winnerImg.src = "avatar5.jpg"
      }
    
    if (winner != 0){
      winnerText.innerHTML += winner
      clearInterval(raceInterval)
      //resetting images to idle animation
      img1.src = "./images/avatar1.png"
      img2.src = "./images/avatar2.jpg"
      img3.src = "./images/avatar3.jpg"
      img4.src = "./images/avatar4.jpg"
      img5.src = "./images/avatar5.jpg"
      //displaying winner
      winnerDiv.style.display = 'initial'

      winnerDiv.addEventListener('click', function(){
        //resetting stoplight and winner display
        stoplight.src = "red_light.jpg"
        winnerDiv.style.display = 'none'
        winnerText.innerHTML = 'Winner is #'
        //reseting positions of all racers and winner variable
        resetImg(racer1)
        resetImg(racer2)
        resetImg(racer3)
        resetImg(racer4)
        resetImg(racer5)
        winner = 0
      })
    }
  //setting interval for 15ms
  }, 15)

})

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function moveImg(object) {
  //getting random integer to move racer
  var x = getRndInteger(object['minSpeed'], object['maxSpeed'])
  //moving racer + adding to position variable
  document.getElementById(object['name']).style.left = object['position'] + x + "px"
  object['position'] = object['position'] + x
}

function resetImg(object) {
  //resetting position on screen and position variable to 0
  document.getElementById(object['name']).style.left = 0 + "px"
  object['position'] = 0
}