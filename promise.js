const linkApi = 'https://swapi.dev/api/people/16';

const starWars = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const error = false
            if (error) reject ('something occured bad');
            else resolve (fetch(linkApi))
        }, 2000)
    })
}

console.log("loading ...");

starWars().then((response) => response.json())
            .then((data) => {console.log(data)})
            .catch(error => console.log(error))
