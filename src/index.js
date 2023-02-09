// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Bored from './js/bored';


//business logic


async function handleOutput() {
  const output = await Bored.getActivity();
  document.getElementById("output").innerText = output;
}

//UI logic
window.addEventListener("load", function() {
  this.document.getElementById("button").addEventListener("click", handleOutput);
});


