// API de Studio Ghibli

// const link = 'https://ghibliapi.herokuapp.com'

async function ghibliFetch(){
    try{
        const response = await fetch ('https://ghibliapi.herokuapp.com/people');
        const characters = await response.json();
        console.log(characters);
    }catch(error){
        console.log(error);
    }
}

ghibliFetch().then(character =>{
    // error en la consola: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'map')
    // at asyncAwait.js:19
    // ¿por qué no lee el map?
    const names = character.map(people => people.name).join('\n')
    console.log (names);
});
