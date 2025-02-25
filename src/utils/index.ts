import { google } from 'googleapis';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function subscribeEmailGoogleSheer(data: any) {
  const serviceAccountBase64 = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;if (!serviceAccountBase64) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_JSON environment variable");
  }
  try {
    const serviceAccountJson = Buffer.from(serviceAccountBase64, 'base64')
        .toString('utf-8')
        .trim();
    console.log("Decoded JSON:", serviceAccountJson);
    const credentials = JSON.parse(serviceAccountJson);
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
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
  } catch (error) {
    console.error("Error parsing service account JSON:", error);
    throw new Error("Invalid service account JSON");
  }
}

export async function likeGoogleSheet() {
  const serviceAccountJson = Buffer.from(
      process.env.GOOGLE_SERVICE_ACCOUNT_JSON as string,
      'base64'
  ).toString('utf-8');
  const credentials = JSON.parse(serviceAccountJson);
  const auth = new google.auth.GoogleAuth({
    credentials: credentials,
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
}
