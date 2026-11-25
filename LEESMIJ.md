# Plannen met Jaap — op GitHub Pages met Firebase

Dezelfde techniek als de Gereedmelding-app: de app is één HTML-bestand op GitHub Pages,
inloggen gaat via Firebase Authentication en de planning staat in Firestore. Iedereen
die inlogt ziet dezelfde planning, op telefoon, tablet en computer.

## Bestanden

| Bestand | Wat het doet |
|---|---|
| `index.html` | De hele app |
| `firebase-config.js` | Je Firebase-gegevens en het beheerdersaccount |
| `firestore.rules` | Wie wat mag lezen en schrijven |
| `manifest.webmanifest` | Zodat je de app op je beginscherm kunt zetten |
| `icon-512.png` | Het pictogram |

## 1. Repository maken

1. Ga naar GitHub, account **Erkend-energielabel**, en maak een nieuwe repository: **plannen-met-jaap**.
   GitHub staat geen spaties toe in een naam, dus gebruik streepjes.
   Zet hem op **Public** (bij een gratis account werkt GitHub Pages alleen op public).
2. Kies **uploading an existing file** en sleep alle bestanden uit deze map erin. Commit.
3. Ga naar **Settings → Pages**. Bij *Source* kies **Deploy from a branch**,
   branch **main**, map **/ (root)**. Opslaan.
4. Na een paar minuten staat de app op:
   `https://erkend-energielabel.github.io/plannen-met-jaap/`

Zet je hem op een ander adres? Pas dan `APP_URL` in `firebase-config.js` aan.

## 2. Firebase instellen

De config staat nu op het bestaande project **gereedmelding-cv**. Dan hoef je niets
nieuws aan te maken en kun je dezelfde accounts gebruiken. Wil je een apart project,
maak er dan een aan in de Firebase console en zet de nieuwe gegevens in
`firebase-config.js`.

Wat je in de Firebase console moet doen:

1. **Authentication → Settings → Authorized domains**: voeg
   `erkend-energielabel.github.io` toe. Zonder dit mislukt het inloggen.
2. **Firestore Database → Rules**: plak de inhoud van `firestore.rules` en publiceer.
   In dat bestand staan ook de regels van de gereedmelding-app, zodat die blijft werken.
3. **Authentication → Users**: maak per persoon een account aan met zijn e-mailadres
   en een wachtwoord. Het beheerdersaccount is `kantoor@gereedmelding.app`.

## 3. Mensen toegang geven

1. Maak in Firebase een gebruiker aan met het e-mailadres van die persoon.
2. Log in de app in als beheerder en ga naar het tabblad **Toegang**.
3. Typ hetzelfde e-mailadres in het zoekveld en tik op **+ Toevoegen**.
4. Kies zijn rol en vink zijn projecten en vakgebieden aan.

Wie wel kan inloggen maar nog niet is toegevoegd, krijgt het scherm **Geen toegang**
met zijn eigen e-mailadres erbij, zodat hij dat kan doorgeven.

## Microsoft-inloggen

De inlog loopt via je eigen domein, niet via `gereedmelding-cv.firebaseapp.com`.
Daarvoor staan in de repository **erkend-energielabel.github.io** twee kleine pagina's
(`__/auth/handler` en `__/auth/iframe`). Die mogen niet weg.

In de Microsoft-app-registratie *Gereedmelding kantoor* (Azure) staat daarom ook de
omleidings-URI `https://erkend-energielabel.github.io/__/auth/handler`.

## Rollen

* **Beheerder** — maakt projecten aan, geeft toegang, mag alles.
  Dit is `kantoor@gereedmelding.app` of een Microsoft-account op
  `@delaatbouwbegeleiding.nl`.
* **Projectleider** — plant en wijzigt alles in zijn eigen projecten.
* **Uitvoerder** — vinkt dagen af en vult uren, bouwdeel en stickers in.

## Let op

* De rollen zijn een afspraak in de app, niet in de database. De regels staan toe dat
  iedereen die is ingelogd de planning kan bijwerken, want ook een uitvoerder slaat
  zijn afvinken op. Geef dus alleen een inlog aan mensen die je vertrouwt.
* De hele planning is één document (`planner/v1`). Werken twee mensen tegelijk aan
  dezelfde activiteit, dan wint de laatste die opslaat.
* Offline kun je gewoon doorwerken; zodra je weer verbinding hebt, wordt het opgeslagen.
  Inloggen lukt alleen online.
* Op een gratis GitHub-account is de repository openbaar. De app zelf is dan zichtbaar,
  maar de planning niet: die zit achter de login.
