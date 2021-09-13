const url = 'https://pokeapi.co/api/v2/pokemon/5/';

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const getName = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const error = false
                    if (error) reject ("Someting went wrong")
                    else resolve (data.name)
                }, 3000)
            })
        }
        
        getName().then(sucess => console.log(sucess))
                    .catch(error => console.log(error))
    })