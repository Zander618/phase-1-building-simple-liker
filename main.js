// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.getElementById("modal").classList.add("hidden")

let likeButton = document.getElementsByClassName("like-glyph")

for(const heart of likeButton){
  heart.addEventListener('click', clickEvent)
}


function clickEvent (){
  mimicServerCall()
  .then (data => console.log(data))
  .catch(error => error.message)
  document.getElementById("modal").classList.remove("hidden")
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
