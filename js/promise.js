const api = "https://swapi.dev/api/starships/13/";

const getData = (apiURL) => {
    return fetch(apiURL)
        .then(response => response.json())
        .then(json => {
            console.log("Hi, welcome to the rebellion! 🚀✨",json )
        })
        .catch(error => {console.error("Error: ", error)})
}
getData(api);