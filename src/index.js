// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Bored from './js/bored';


//business logic


async function handleOutput() {
  const rawOutput = await Bored.getActivity();
  const output = rawOutput["activity"];
  
  console.log(rawOutput.activity);
  document.getElementById("output").innerText = output;
}
// function handleOutput() {
//   Bored.getActivity()
//     .then(function(boredOutput) {
//       console.log(boredOutput)
//       document.getElementById("output").innerText = boredOutput;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
  
  
// }

//UI logic
window.addEventListener("load", function() {
  this.document.getElementById("button").addEventListener("click", handleOutput);
});


