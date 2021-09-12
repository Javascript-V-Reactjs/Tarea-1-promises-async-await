// API de Studio Ghibli
// https://ghibliapi.herokuapp.com

// Revisamos la consola cuando llamamos algo específico del API
// const promise = fetch ("https://ghibliapi.herokuapp.com/people");
// console.log (promise);

// llamamos los nombres de los personajes de las películas de Studio Ghibli
const promise = fetch (" https://ghibliapi.herokuapp.com/people "); 
promise.then (response => { 
    return response.json();
}).then(character =>{
    // Map retorna un nuevo array con los valores que el callback retorna.
    const name = character.map(people => people.name).join('\n')
    console.log (name);
})