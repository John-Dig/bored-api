export default class Bored {
  static getActivity() {
    console.log("here");
    return fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json')
      .then(function(response) {
        console.log("here1");
        if (!response.ok) {
          const errorMessage = `response status: ${response.status}, response text: ${response.text}`;
          throw new Error(errorMessage);
        }
        else {
          return response.json();
        }
      })
      .catch(function(error){
        return error;
      });
  }
}

