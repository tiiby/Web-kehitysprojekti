async function kirjautuminen(tehty) {
    tehty.preventDefault();
    const kirjauduttu = document.querySelector("#kirjautuminen").innerHTML = `<p>Hei, ${nimi.value}!</p>`;
    return kirjauduttu
}

let nimi = document.querySelector("#nimi");
let ika = document.querySelector("#ika");
const button = document.querySelector("button");
    button.addEventListener("click", kirjautuminen);



