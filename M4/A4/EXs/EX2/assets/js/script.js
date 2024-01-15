async function getData(){
    let result = await fetch("https://rickandmortyapi.com/api/character/1")
    .then(res => res.json())
    .then(data => {
        return data
    })

    console.log(result);
}

getData()