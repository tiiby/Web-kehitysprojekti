// Kirjautumisen jälkeen iän tarkistus
async function kirjautuminen(tehty) {
    tehty.preventDefault(); // Selaimen oletustoiminnon estäminen
    const pelaajanIka = parseInt(ika.value); // HTML-koodin palauttaman ikä-tiedon arvo muuttujaan
    if (pelaajanIka >= 12) { //Tarkistetaan ikä ja aloitetaan peli, jos yli tai tasan 12
      //Muuttaa kirjautumispalkin tervehdykseksi
      document.querySelector("#kirjautuminen").innerHTML =
      `<p>Hei, ${nimi.value}! Tervetuloa pelaamaan!</p>`;
      //Lisää tekstin ohjeteksti-kohtaan
      document.querySelector("#ohjeteksti").innerHTML =
      "<p>Olet saapunut metsän reunaan. Kerää roskat, mutta varo karhua!</p>";
      //Lisää valintanapit toiminnot-kohtaan
      document.querySelector("#toiminnot").innerHTML =
      `<button id="metsa" class="valintanappi">Mene metsään</button>
      <button id="tallenna" class="valintanappi">Tallenna</button>`;
    } else { //Jos pelaaja on alle 12, lisää tekstin kirjautumispalkkiin ja peli ei etene mihinkään
        document.querySelector("#kirjautuminen").innerHTML = 
        `<p>Olet liian nuori pelaamaan. :(</p>`;
        return;
    }
}

// Statuksen haku
  async function status() {
    try {
      const response = await fetch("/status"); //Haetaan Flaskilta status
      if (!response.ok) throw new Error("Virheellinen syöte!"); //Virheenkäsittelyä
      const status = await response.json(); //Muuttaa vastauksen json-muotoon
      return status //Palauttaa json-muotoisen statuksen
    } catch (error) { //Virheenkäsittelyn jatkoa
      console.log(error.message);
    }
  }

// Nimen ja iän haku HTML-lomakkeesta,, EventListener ja funktion kutsu
let nimi = document.querySelector("#nimi");
let ika = document.querySelector("#ika");
const button = document.querySelector("button");
button.addEventListener("click", kirjautuminen);





