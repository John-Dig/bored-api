// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css';
import Bored from './js/bored';


//business logic

async function handleOutput() {
  let thingToDo = new Bored;
  const rawOutput = await thingToDo.getActivity();
  const theActivity = rawOutput["activity"];
  
  document.getElementById("output").innerText = theActivity;
  const giphyObject = await thingToDo.getGiphy(theActivity);
  const giphyImageURL = giphyObject.data[0].images.downsized_medium.url;
  const theImageHTML = `<img src =${giphyImageURL}alt='the Giphy'>`;
  document.getElementById("giphy-output").innerHTML = theImageHTML;

}

//UI logic
window.addEventListener("load", function() {
  this.document.getElementById("button").addEventListener("click", handleOutput);
});


