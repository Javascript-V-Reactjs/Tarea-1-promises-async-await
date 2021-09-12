const Names = document.querySelector('.characters');
const Finished = document.querySelector('.hacked');


Names.innerHTML = "<p>Hacking the star wars DataBase, please wait...</p>";
Names.style.fontSize = '20px';

const starWarsData = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://swapi.dev/api/people/',{
        method: 'GET'
      })
      .then((response) =>{
        if(!response.ok){
          reject( new Error ("Network response was not ok " + response.status));
        }else{
          resolve(response.json());
        }
      })
    }, 2000);
  });
}

starWarsData()
.then((character)=>{
  const data = character.results;
  const starWars = data.map((person) => `<li>${person.name},   ${person.height},   ${person.gender}</li>`).join("\n");
  Names.innerHTML = `<ul>${starWars}</ul>`;
  Finished.innerHTML = 'You are in the system enjoy :)';
})
.catch((error) =>{
  console.log("What's failing is", error);
});



