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
starwarsData()
.then((data)=>{
        const result = data.results;
        const names = result.map(person => person.name).join("\n");
        console.log(names);
    })
.catch((error) => {
    console.log(error);
});

