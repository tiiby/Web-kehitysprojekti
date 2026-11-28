from pelaaja import Pelaaja
from huoneet import Huone
import json

# Tallennusfunktio
def tallenna(pelaaja):

    nimi = pelaaja.nimi
    ika = pelaaja.ika
    esineet = []
    huone = pelaaja.nykyinen_huone.nimi
    for item in pelaaja.esineet:
        esineet.append(item)

    pelaajan_data = {
        "pelaajan_nimi": nimi,
        "pelaajan_ika": ika,
        "esineet": esineet,
        "huone": huone
    }

    with open("oikeapeliprojekti/save.json", "w") as tiedosto:
        json.dump(pelaajan_data, tiedosto)

# Aiemman tallennuksen haku
def tallennuksen_haku(huoneet):

    try:
        with open("oikeapeliprojekti/save.json", "r") as tiedosto:
            pelaajan_data = json.load(tiedosto)
            pelaajannimi = pelaajan_data["pelaajan_nimi"]
            pelaajanika = pelaajan_data["pelaajan_ika"]
            pelaajan_esineet = pelaajan_data["esineet"]
            huoneen_nimi = pelaajan_data["huone"]
            nykyinen_huone = huoneet[huoneen_nimi]
            
            pelaaja = Pelaaja(pelaajannimi, pelaajanika, nykyinen_huone, pelaajan_esineet)

            return pelaaja
    except:
        return None


# Antaa tiedon missä huoneessa ollaan ja mitä huoneessa on
def status():
    {
        "status": pelaaja.nykyinen_huone.nimi
    }

def ika_tarkistus(pelaajanika):
    if pelaajanika >= 12:
        return True
    else:
        return False

    
metsan_reuna = Huone("metsänreunassa")
metsa = Huone("metsässä")

huoneet = {
    "metsänreunassa": metsan_reuna,
    "metsässä": metsa,
}