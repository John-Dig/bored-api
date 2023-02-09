export default class Bored {
  static getActivity() {
    return fetch('https://boredapi.com/api/activity')
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `response status: ${response.status}, response text: ${response.statusText}`;
          throw new Error(errorMessage);
        }
        else {
          console.log(response);
          return response.json();
        }
      })
      .catch(function(error){
        return error;
      });
  }
}

