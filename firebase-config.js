// Gegevens van je Firebase-project (Firebase console -> Projectinstellingen -> Je apps -> Web-app -> Config).
// Deze gegevens zijn niet geheim; de beveiliging zit in de login en de Firestore-regels.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDs6Y1PAKNURA4lde5Xe6Zr5kZq7iZBzYE",
  authDomain: "erkend-energielabel.github.io",  // inloghulp staat op dit domein (repo erkend-energielabel.github.io), zodat Microsoft-inloggen ook werkt als de browser cookies van derden blokkeert
  projectId: "gereedmelding-cv",
  storageBucket: "gereedmelding-cv.firebasestorage.app",
  messagingSenderId: "1025814267228",
  appId: "1:1025814267228:web:ddea0306d6006dd6a96d99"
};

// Het beheerdersaccount. Wie hiermee inlogt (of met een Microsoft-account van het kantoordomein)
// is beheerder in de planning. Alle andere accounts krijgen hun rol via het tabblad Toegang.
window.APP_LOGINS = {
  beheerder: "kantoor@gereedmelding.app"
};

// Microsoft-inloggen voor kantoor. Laat MS_TENANT leeg om de knop te verbergen.
window.APP_MS = {
  tenant: "59e480d9-96d4-4fda-8be4-6138b1c8577c",
  domein: "delaatbouwbegeleiding.nl"
};

// Het adres waar de app draait (alleen voor foutmeldingen bij inloggen).
window.APP_URL = "https://erkend-energielabel.github.io/plannen-met-jaap/";
