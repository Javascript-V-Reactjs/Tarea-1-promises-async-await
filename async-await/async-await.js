// API de Studio Ghibli

// const link = 'https://ghibliapi.herokuapp.com'

async function ghibliFetch(){
    const response = await fetch ('https://ghibliapi.herokuapp.com/people');
    const characters = await response.json();
    console.log(characters);
}

ghibliFetch().then(character =>{
    // error en la consola: Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'map')
    // at asyncAwait.js:14
    // ¿por qué no lee el map?
    const names = character.map(people => people.name).join('\n')
    console.log (names);
});
