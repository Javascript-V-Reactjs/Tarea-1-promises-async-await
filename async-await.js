const URL = 'https://swapi.dev/api/people/';

async function people(peopleList) {
  try {
      const responseApi = await fetch(peopleList);
      const responseInfo = await responseApi.json();
      console.log(responseInfo.results);
  } catch (error) {
      alert(error);
  }
}

people(URL);