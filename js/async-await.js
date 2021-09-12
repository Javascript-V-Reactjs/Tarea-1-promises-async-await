const api = "https://swapi.dev/api/people/4";

async function starWarsAsyncAwait () {
    try {
        const result = await fetch(api)
            .then((response) => response.json())
            .then((data) => data)
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

starWarsAsyncAwait (); 
console.log("I'm a console log");