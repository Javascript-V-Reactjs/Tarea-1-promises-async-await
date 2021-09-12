const urlPeople = 'https://swapi.dev/api/people/1/';

fetch(urlPeople)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
