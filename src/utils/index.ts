import { google } from 'googleapis';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function subscribeEmailGoogleSheer(data: any) {
  const env_creds = process.env.GOOGLE_API_CREDS;
  if (env_creds) {
    const credentials = Buffer.from(env_creds, 'base64').toString('utf-8');

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1kVGIG9pu6Tfmv9JW0MfCAO0_ypYdFUYCJz-ldhaVGr0';
    const range = 'Sheet1!A1';

    const email = data.email;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email]],
      },
    });
  } else {
    console.log('Credentials not found');
  }
}

export async function likeGoogleSheet() {
  const env_creds = process.env.GOOGLE_API_CREDS;
  if (env_creds) {
    const credentials = Buffer.from(env_creds, 'base64').toString('utf-8');
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1kVGIG9pu6Tfmv9JW0MfCAO0_ypYdFUYCJz-ldhaVGr0';
    const range = 'Sheet2!A:B';

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[1, new Date().toISOString()]],
      },
    });
  } else {
    console.log('Credentials not found');
  }
}
