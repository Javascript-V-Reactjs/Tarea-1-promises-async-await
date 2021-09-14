(async () => {
    const responses = await fetch('https://rickandmortyapi.com/api/character');
    const data = await responses.json();
    console.log(data.results)
})();

