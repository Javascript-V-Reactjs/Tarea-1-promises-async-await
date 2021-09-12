const url = 'https://swapi.dev/api/planets/1';
const div = document.getElementById('show_info_fetch');

function printInfo(data){
    const info = document.createElement('div');
    const content = `
        <h2>${data.name}</h2>
        <p>${data.population}</p>`;
    info.innerHTML = content;
    div.appendChild(info)
    }
    

function callApiFetch(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        printInfo(data);
        console.log(data.name, data.population);
    })
    .catch((data) =>{
        alert(data);
    });
}




callApiFetch(url);