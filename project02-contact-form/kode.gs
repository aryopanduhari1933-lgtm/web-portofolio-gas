const SHEET_ID = '1NSbcRxRdyK0jn16tOm6S6KQTW-lB_4TPPgVLIY9Q7G8';


function doGet() {
return HtmlService.createTemplateFromFile('index')
.evaluate()
.setTitle('Contact Form');
}


function include(filename) {
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


function submitForm(data) {
const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
sheet.appendRow([
new Date(),
data.name,
data.email,
data.message
]);
return 'success';
}
