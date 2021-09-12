const urlAsync = 'https://swapi.dev/api/planets/2';
const divAsync = document.getElementById('show_info_async');

function printInfoAsync(data){
    const infoAsync = document.createElement('div');
    const contentAsync = `
        <h2>${data.name}</h2>
        <p>${data.population}</p>`;
    infoAsync.innerHTML = contentAsync;
    divAsync.appendChild(infoAsync)
    }
    

async function callApiAsync(urlAsync) {
    try{
        const resApi = await fetch(urlAsync);
        const resinfo = await resApi.json();
        printInfoAsync(resinfo);
        console.log(resinfo.name, resinfo.population);

    }catch(err){
        alert(err);
    }
}




callApiAsync(urlAsync);