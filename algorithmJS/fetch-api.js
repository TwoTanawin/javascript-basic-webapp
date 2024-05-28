
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error))

async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error);
    }
}

fetchData();