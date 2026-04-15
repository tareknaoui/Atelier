# Connexion Google Sheets – Huge Stationery

Suivez ces étapes **une seule fois** pour recevoir les inscriptions dans Google Sheets.

---

## Étape 1 – Créer le Google Sheet

1. Allez sur [sheets.google.com](https://sheets.google.com)
2. Créez un nouveau classeur et nommez-le `Inscriptions Atelier Dessin`

---

## Étape 2 – Créer le Google Apps Script

1. Dans le classeur, cliquez sur **Extensions → Apps Script**
2. Supprimez tout le code existant dans l'éditeur
3. Copiez-collez **tout le contenu** du fichier `google_apps_script.js`
4. Cliquez sur l'icône **Enregistrer** (ou Ctrl+S)
5. Donnez un nom au projet : `Huge Stationery Inscriptions`

---

## Étape 3 – Déployer en Web App

1. Cliquez sur **Déployer → Nouveau déploiement**
2. Cliquez sur l'engrenage ⚙️ → **Application Web**
3. Remplissez les champs :
   - **Description** : `Landing page inscriptions`
   - **Exécuter en tant que** : `Moi (votre email)`
   - **Qui a accès** : **`N'importe qui`** ← important !
4. Cliquez sur **Déployer**
5. Autorisez l'application si une fenêtre s'ouvre
6. **Copiez l'URL** qui ressemble à :
   `https://script.google.com/macros/s/AKfycbxxxxxxxx/exec`

---

## Étape 4 – Coller l'URL dans la landing page

1. Ouvrez le fichier `index.html` dans un éditeur de texte
2. Trouvez la ligne :
   ```js
   const GOOGLE_SCRIPT_URL = "VOTRE_URL_ICI";
   ```
3. Remplacez `VOTRE_URL_ICI` par l'URL copiée :
   ```js
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxxxxxxx/exec";
   ```
4. Sauvegardez le fichier

---

## Résultat

Chaque fois qu'un parent remplit le formulaire, une nouvelle ligne apparaît automatiquement dans votre Google Sheet avec :

| Date | Prénom parent | Nom parent | Email | Téléphone | Prénom enfant | Âge | Niveau | Créneau | Message |
|------|--------------|------------|-------|-----------|--------------|-----|--------|---------|---------|

---

## (Optionnel) Recevoir un email à chaque inscription

Dans le fichier `google_apps_script.js`, décommentez le bloc `MailApp.sendEmail(...)` et remplacez `votre@email.com` par votre adresse.
