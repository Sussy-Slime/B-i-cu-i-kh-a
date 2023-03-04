const myEmail = document.getElementById('inputEmail');
    h3 = document.querySelector("h3");
    h3.innerHTML = localStorage.getItem('myEmail');
    myEmail.addEventListener("keyup", display);

function display() {
    localStorage.setItem('myEmail', myEmail.value);
    localStorage.setItem('value', myEmail.value);
    h3.innerHTML = localStorage.getItem('value');
    h3.innerHTML = localStorage.getItem('myEmail');
}

const pokemonContainer = document.getElementById('pokemon-container');

fetch('https://pokeapi.co/api/v2/pokemon/25')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/6')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/9')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/59')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/65')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const pokemonImage = document.createElement('img');
        pokemonImage.src = data.sprites.front_default;

        const pokemonName = document.createElement('h2');
        pokemonName.textContent = data.name;

        pokemonContainer.appendChild(pokemonImage);
        pokemonContainer.appendChild(pokemonName);
    })
    .catch(error => console.error(error));