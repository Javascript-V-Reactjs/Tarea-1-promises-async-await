const api = "https://swapi.dev/api/people/4";
const apiStarWars = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const error = false
            if (error) reject ('something occured bad');
            else resolve (fetch(api))
            
        }, 5000)
    })
}
apiStarWars().then((response) => response.json())
            .then((data) => {console.log(data)})
            .catch(error => console.log(error))

console.log("I'm a console log");