const api = 'https://swapi.dev/api/people/16';

async function apiStarWars(){
    try{
        const result = await fetch(api)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
        return result
    }catch(error){
        console.log(error)
    }
}

console.log('loading ....')
apiStarWars()