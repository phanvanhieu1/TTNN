const {google} = require('googleapis')



// const getIndex = (req, res) => {
//     res.render('index');
// }

const postIndex = async (req, res) => {
    const auth = new google.auth.GoogleAuth({
      keyFile: 'credential.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });
  
    //create client instance of auth
  const client = await auth.getClient();
  
  //instance of gg sheets API
  const googleSheets = google.sheets({version: 'v4', auth: client});
  
  const spreadsheetID = '1VFjxbpzcgLAx-aLFnp6HUA0zwBF35Ki7LTLJE3_52Mc';
  
  //get metadata of the sheet
  const metadata = await googleSheets.spreadsheets.get({
    auth: auth,
    spreadsheetId: spreadsheetID,
  });
  
  //read row from the sheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: spreadsheetID,
    range: 'sheet1!A2:L',
  })
  //write row to the sheet
  await googleSheets.spreadsheets.values.append({
    auth: auth,
    spreadsheetId: spreadsheetID,
    range: 'sheet1!A2:L',
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [
        ['Hieu', 'Dtrai', 'HieuDtrai', 'HieuDtrai'],
      ]
    }
  })
  
  
  res.send(getRows.data);
  
  }

module.exports = {
    // getIndex,
    postIndex
}