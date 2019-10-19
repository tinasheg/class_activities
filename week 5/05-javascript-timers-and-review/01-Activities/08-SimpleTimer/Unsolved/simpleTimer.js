// Step 1:
// Use the following Audio file below:

var audio = new Audio("raven.mp3");

//  Step 2: do the following between the --- comments below
//  after 5 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

// ---------------------
// CODE STEP TWO HERE
// ---------------------

const target = document.getElementById("time-left");

setTimeout(fiveSeconds,5000);
setTimeout(tenSeconds,10000);
setTimeout(timeUp,15000);

// Step 3:
// Fill in the blanks to these functions.
function fiveSeconds() {
  let newText = document.createElement("h2");
  newText.textContent = "About 10 Seconds Left!"
  target.appendChild(newText);
  console.log(newText.textContent);
}

function tenSeconds() {
  // in the element with an id of `time-left` add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  let newText = document.createElement("h2");
  newText.textContent = "About 5 Seconds Left!"
  target.appendChild(newText);
  console.log(newText.textContent);
}

function timeUp() {
  // in the element with an id of `time-left` add an h2 saying Time's Up!
  // console log done
  let newText = document.createElement("h2");
  newText.textContent = "Done!"
  target.appendChild(newText);
  console.log(newText.textContent);
  // The following line will play the audio file above
  audio.play();
}
