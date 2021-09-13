const url = 'https://swapi.dev/api/people/';

const starwarsData = () => {
    return new Promise((resolve, reject) => {
            fetch(url)
            .then((response) => {
                if(response.ok){
                    resolve(response.json());
                }else{
                    reject( new Error('Something went wrong'+ response.status));
                }
            }); 
    });
}

const starWarsNames = (data) =>{
    return new Promise((resolve, reject) => {
            const result = data.results;
            resolve(result.map(person => person.name).join("\n"));
    });
}


async function starwarsAsycn(){
    try{
        const result = await starwarsData();
        const names = await starWarsNames(result);
        console.log(names);
    }catch(error){
        console.log(error);
    }
}

starwarsAsycn();

