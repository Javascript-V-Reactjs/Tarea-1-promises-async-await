const dataOfCharacters = () =>{
  return new Promise((resolve, reject) => {
    console.log('accesing the data...')
    setTimeout(() => {
      fetch('https://swapi.dev/api/people/',{
        method: 'GET'
      })
      .then((response) =>{
        if(!response.ok){
          reject( new Error ("Network response was not ok " + response.status));
        }else{
          resolve(response.json());
        }
      })
    }, 2000);
  });
}

const translate = (starwarsCharacters) =>{
  return new Promise((resolve, reject) => {
    console.log('translating...')
    setTimeout(() => {
      const data = starwarsCharacters.results;
      resolve(data.map((person) => `${person.name}`).join("\n"));
    },2000)
  })
}

async function starWarsData() {
  try{
    const starwarsCharacters = await dataOfCharacters();
    console.log(starwarsCharacters);
    const translating  = await translate(starwarsCharacters);
    console.log(translating);
  }
  catch (error) {
    console.log(error);
  }
}

starWarsData();