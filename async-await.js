const urlPlanet = 'https://swapi.dev/api/planets/7';

async function callPlanet(infoPlanet) {
    try {
        const responseApi = await fetch(infoPlanet);
        const info = await responseApi.json();
        console.log(`Name this planet: ${info.name}\nInfomation this terrain: ${info.terrain}`);
    } catch (error) {
        alert(error);
    }
}

callPlanet(urlPlanet);