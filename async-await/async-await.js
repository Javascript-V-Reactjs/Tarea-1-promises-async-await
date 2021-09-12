// James Solis Async-Await Excercise

const url = 'https://pokeapi.co/api/v2/pokemon';

const pokemonList = () => {
    return new Promise((resolve, reject) => {
        console.log("I'm waiting for Pokemon Characters...😫");
        
        setTimeout(() => {
        fetch('https://pokeapi.co/api/v2/pokemon',{
            method:'GET'
        })
        .then((response)=>{
            const error = false;
            if (error) 
                reject("Ups... something just went wrong");
            else 
                resolve(response.json());    
            }, 3000);
        })
    });
};

const resultToUppercase = (pokemons) => {
    return new Promise((resolve, reject) => {
        console.log("Uppercasing your favorite Pokemons' names... 🤯💥");

        setTimeout(() => {
            resolve(pokemons.results.map((characters) => `${characters.name}`).join(' ,').toUpperCase());
        }, 4000);
    });
};

async function pokemonsCharactersUpperCase() {
    try {
        const pokemons = await pokemonList();
        console.log(pokemons);

        const resultInUppercase = await resultToUppercase(pokemons);
        console.log(resultInUppercase);
    } catch (error) {
        console.log(error);
    }
}


pokemonsCharactersUpperCase();