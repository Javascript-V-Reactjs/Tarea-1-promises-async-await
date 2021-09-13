const URL = 'https://swapi.dev/api/starships/';

const starships = () => {
  fetch(`${URL}`, {
    method: "GET"
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      const starts = data.results
      starts.forEach((startsList) => {
        console.log(startsList)
      })
    })
    .catch((error) => {
      console.log("error", error);
    })
}

starships();