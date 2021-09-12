const url = 'https://ghibliapi.herokuapp.com/people';

// utilice  setTimeOut para prácticar

const charactersData = () => {
    return new Promise((resolve, reject) => {
        console.log("I'm waiting for data.......");
        setTimeout(()=>{
            fetch(url)
            .then((response) => {
                if(response.ok){
                    resolve(response.json());
                }else{
                    reject( new Error('Something went wrong'+ response.status));
                }
            });
        }, 3000);  
    });
}

const charactersNames = (data) =>{
    return new Promise((resolve, reject) => {
        console.log("Loading Names.....");
        setTimeout(()=>{
            if(data)resolve(data.map(person => person.name).join("\n"));  
            else reject("Somenthing went wrong in data");
        },3000);
    });
}

// los encadene solo por cuestiones de práctica 

async function charactersPrint(){
    try{
        const result = await charactersData();
        const names = await charactersNames(result);
        console.log(names);
    }catch(error){
        console.error(error);
    }
}

charactersPrint();

// documentacion leida

// https://dmitripavlutin.com/javascript-fetch-async-await/
// https://developers.google.com/web/fundamentals/primers/async-functions?hl=es
