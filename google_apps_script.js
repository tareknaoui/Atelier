/**
 * =====================================================================
 *  HUGE STATIONERY – Google Apps Script
 *  Copiez ce code dans script.google.com et déployez-le en Web App
 *  pour recevoir les inscriptions directement dans Google Sheets.
 * =====================================================================
 */

// Colonnes du tableau (dans l'ordre)
const COLONNES = [
  "Date d'inscription",
  "Prénom parent",
  "Nom parent",
  "Email",
  "Téléphone",
  "Prénom enfant",
  "Âge enfant",
  "Niveau",
  "Créneau",
  "Message",
];

/**
 * Reçoit les données POST depuis la landing page
 * et les écrit dans le Google Sheet actif.
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Créer l'en-tête si la feuille est vide
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLONNES);
      // Mise en forme de l'en-tête
      const headerRange = sheet.getRange(1, 1, 1, COLONNES.length);
      headerRange.setBackground("#ff7b2c");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Lire les données JSON
    const data = JSON.parse(e.postData.contents);

    // Ajouter la ligne
    sheet.appendRow([
      data.date_inscription || "",
      data.parent_prenom    || "",
      data.parent_nom       || "",
      data.email            || "",
      data.telephone        || "",
      data.enfant_prenom    || "",
      data.enfant_age       || "",
      data.niveau           || "",
      data.creneau          || "",
      data.message          || "",
    ]);

    // (Optionnel) Envoyer un email de notification
    // MailApp.sendEmail("votre@email.com", "Nouvelle inscription Atelier Dessin",
    //   `Nouvelle inscription reçue !\n\n` +
    //   `Parent : ${data.parent_prenom} ${data.parent_nom}\n` +
    //   `Email  : ${data.email}\n` +
    //   `Enfant : ${data.enfant_prenom}, ${data.enfant_age} ans\n` +
    //   `Créneau: ${data.creneau}`
    // );

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * GET simple pour tester que le script est bien déployé
 */
function doGet() {
  return ContentService
    .createTextOutput("✅ Huge Stationery – Script opérationnel !")
    .setMimeType(ContentService.MimeType.TEXT);
}
