const api = 'https://swapi.dev/api/people/4/';

async function characterName(info){
    try{
        const response = await fetch (info);
        const infoApi = await response.json();
        console.log(`Character Name: ${infoApi.name}`);
    }catch (error){
        console.log("Error: ", error)
    }
}
characterName(api);