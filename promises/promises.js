//
// Promises - 🎈 Fabián Barquero Zúñiga 🎈
//

/*
API link = https://swapi.dev/api/people
*/

// fetch
const starWarsfetch = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            fetch ('https://swapi.dev/api/people', {
                method: 'GET'
            })
            .then ((Response) => {
                const err = false;
                if (err) {
                    reject("Something is wrong here!! 😔");
                } else  {
                    resolve(Response.json());
                }
            }, 3000);
        });
    });
};

// Callback
starWarsfetch()

.then((message) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log(`${message.results.map((character) => `${character.name}`).join(' ')} from the Star Wars movies`);
        });
    });
});