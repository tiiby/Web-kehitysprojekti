# Pelaaja-olio
class Pelaaja:
    # Alustetaan pelaaja ja annetaan tarvittavat tiedot
    def __init__(self, nimi, ika, aloitushuone):
        self.nimi = nimi
        self.ika = ika
        self.nykyinen_huone = aloitushuone

    # Liikkuu huoneesta toiseen
    def liiku(self, nykyinen_huone):
        self.nykyinen_huone = nykyinen_huone