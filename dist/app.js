"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getCharacters() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:8081/characters");
        const characters = (yield response.json());
        console.log(characters);
        displayCharacters(characters);
    });
}
function displayCharacters(characters) {
    const $characterContainer = document.getElementById("character-container");
    if (!$characterContainer)
        return;
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
