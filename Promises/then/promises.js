const api = "https://pokeapi.co/api/v2/pokemon";
const apiPoke = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const error  = false;
             error ? reject ('Something occurred') : resolve (fetch(api)) 
        }, 2000)
    })
}
apiPoke().then((response) => response.json())
         .then((data) => console.log(data.results))
         .catch(error => console.log(error))

