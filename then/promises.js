const url = 'https://ghibliapi.herokuapp.com/people';


const charactersData = () => {
    return new Promise((resolve, reject) => {
        console.log("I'm waiting for data.......");
        setTimeout(()=> {
            fetch(url)
            .then((response) => {
                if(response.ok){
                    resolve(response.json());
                }else{
                    reject( new Error('Something went wrong'+ response.status));
                }
            });
        },3000); 
    });
}

// los encandene para practicar

charactersData()
.then((data) => {
    console.log("Loading names...");
    return data;
})
.then((data)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(data){
                const names = data.map(person => person.name).join("\n");
                console.log(names);
            }else{
                reject("Error in loading names")
            }
        },3000)
    })
})
.catch((error) => {
    console.error(error)
});

// documentacion revisada

// https://ghibliapi.herokuapp.com/#section/Use-Case
// https://flaviocopes.com/fetch-api/
// https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444