const url2 = 'https://pokeapi.co/api/v2/pokemon/2/';

fetch(url2)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const getNameFromOutsite = () => {
            return data.name
        }

        async function getName () {
            try {
            
                const result = await getNameFromOutsite()
                console.log(result)
                
            } catch(error){
            
                console.log(error)
                
            }
        }
        
        getName()
    })