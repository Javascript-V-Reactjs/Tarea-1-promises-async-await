//
// async await - 🎈 Fabián Barquero Zúñiga 🎈
//

/*
API link = https://swapi.dev/api/people
*/

const ulContainer = document.getElementById('starWarsContainer');

async function fetchData (promise) {
    try {
        const data = await promise;
        return [data, null];
    }catch (error) {
        return [null, error];
    }
}

const fetchStarWars = async () => {
    const charactersList = [];
    for (let i = 1; i <= 82; i++) {
        const url = `https://swapi.dev/api/people/${i}`;
        const [starWarsRequestResult, error] = await fetchData(fetch(url));
        const starWarsResult = await starWarsRequestResult.json()
        charactersList.push(starWarsResult)
    }
    const starWarsToRender = charactersList.map((starWars) => ({
        name: starWars.name
    }))
    display(starWarsToRender);
};

const display = (character) => {
    const HTMLString = character
        .map(
            (starWars) => `
        <li class="card">
            <h2 class="card-title">${starWars.name}</h2>
        </li>
    `).join('');
    ulContainer.innerHTML = HTMLString;
};

fetchStarWars();