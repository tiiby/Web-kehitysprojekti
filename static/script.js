// Kirjautumisen jälkeen iän tarkistus
async function kirjautuminen(tehty) {
  tehty.preventDefault(); // Selaimen oletustoiminnon estäminen
  const pelaajanIka = parseInt(ika.value); // HTML-koodin palauttaman ikä-tiedon arvo muuttujaan
  
  if (pelaajanIka >= 12) { //Tarkistetaan ikä ja aloitetaan peli, jos yli tai tasan 12
    //Muuttaa kirjautumispalkin tervehdykseksi
    document.querySelector("#kirjautuminen").innerHTML =
    `<p>Hei, ${nimi.value}! Tervetuloa pelaamaan!</p>`;

    //Muuttaa pelinäkymän kuvan
    document.querySelector("#pelinakyma").src =
    "kuvat/metsanreuna.jpg";
    
    //Lisää tekstin ohjeteksti-kohtaan
    document.querySelector("#ohjeteksti").innerHTML =
    "<p>Olet saapunut metsän reunaan. Kerää roskat, mutta varo karhua!</p>";
    
    //Lisää valintanapit toiminnot-kohtaan
    document.querySelector("#toiminnot").innerHTML =
    `<button id="metsa" class="valintanappi">Mene metsään</button>
    <button id="tallenna" class="valintanappi">Tallenna</button>`;
    const metsanappi = document.querySelector("#metsa");
    metsanappi.addEventListener("click", metsa);
    const tallennanappi = document.querySelector("#tallenna");
    tallennanappi.addEventListener("click", tallenna);
  
  } else { //Jos pelaaja on alle 12, lisää tekstin kirjautumispalkkiin ja peli ei etene mihinkään
    document.querySelector("#kirjautuminen").innerHTML = 
    `<p>Olet liian nuori pelaamaan. :(</p>`;
    return;
  }
}

// Statuksen haku
async function tilanne() {
  try {
    const response = await fetch("/status"); //Haetaan Flaskilta status
    if (!response.ok) throw new Error("Virheellinen syöte!"); //Virheenkäsittelyä
    const tila = await response.json(); //Muuttaa vastauksen json-muotoon
    return tila //Palauttaa json-muotoisen statuksen
  } catch (error) { //Virheenkäsittelyn jatkoa
    console.log(error.message);
  }
  }

async function metsa() {

}

async function tallenna() {

}

async function voitto() {
  
}

async function havio() {
  
}

// Nimen ja iän haku HTML-lomakkeesta,, EventListener ja funktion kutsu
let nimi = document.querySelector("#nimi");
let ika = document.querySelector("#ika");
const form = document.querySelector("form");
form.addEventListener("submit", kirjautuminen);