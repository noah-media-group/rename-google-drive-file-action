import { google } from "googleapis";

export type Auth = {
  clientEmail: string;
  privateKey: string;
};

export const renameFile = async (
  fileId: string,
  fileName: string,
  { clientEmail, privateKey }: Auth,
): Promise<void> => {
  const scopes = ["https://www.googleapis.com/auth/drive"];
  const auth = new google.auth.JWT(clientEmail, undefined, privateKey, scopes);
  const drive = google.drive({ version: "v3", auth });

  const response = await drive.files.update({
    fileId,
    supportsAllDrives: true,
    requestBody: {
      name: fileName,
    },
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
};
