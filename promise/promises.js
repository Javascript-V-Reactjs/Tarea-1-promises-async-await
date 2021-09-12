// James Solis Promise Excercise

const url = 'https://pokeapi.co/api/v2/pokemon';

const fetchPokemon = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        fetch(url,{
            method:'GET'
        })
        .then((response)=>{
            const error = false;
            if (error) 
                reject("Something went wrong, check your Telecable Network 😥");
            else 
                resolve(response.json());    
            }, 4000);
        })
    });
};
console.log("I need my Pokemon now!! 🙄");

fetchPokemon()
.then((msj) => {
    // console.log(msj);
    return msj;
})
.then((msj) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`${msj.results.map((character) => `${character.name}`).join(' ,👾 ')} in uppercase`.toUpperCase());
    }, 4000);
    });
})
.catch((error) => console.log(error));

console.log("I'm waiting for this PokeList! 🤬");
