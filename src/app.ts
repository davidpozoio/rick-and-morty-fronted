interface Character {
  name: string;
  image: string;
  species: string;
}

async function getCharacters() {
  const response = await fetch("http://localhost:8081/characters");
  const characters = (await response.json()) as Character[];
  console.log(characters);
  displayCharacters(characters);
}

function displayCharacters(characters: Character[]) {
  const $characterContainer = document.getElementById("character-container");

  if (!$characterContainer) return;
  console.log(characters);
  characters.forEach((character) => {
    $characterContainer.innerHTML += `
    <div class="character-card">
        <span>${character.name}</span>
        <img src="${character.image}"/>
        <p>${character.species}</p>
    </div>
    `;
  });
}

getCharacters();
