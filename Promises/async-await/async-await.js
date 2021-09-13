const api = "https://pokeapi.co/api/v2/pokemon/ditto";
async function fetchPoke() {
    const response = await fetch(api);
    const poke = await response.json();
    console.log(poke);
  }
  
  fetchPoke().then(poke => {
    poke;
  });