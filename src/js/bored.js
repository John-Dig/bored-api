export default class Bored {
  getActivity() {
    return fetch('https://boredapi.com/api/activity')
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `response status: ${response.status}, response text: ${response.statusText}`;
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
  getGiphy(query) {
    return fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=5&api_key=${process.env.API_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
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

