import { google } from "googleapis";
import { Credentials } from "./getInputs";

export const renameFile = async (
  fileId: string,
  fileName: string,
  { client_email, private_key }: Credentials,
): Promise<void> => {
  const scopes = ["https://www.googleapis.com/auth/drive"];

  const auth = new google.auth.JWT(
    client_email,
    undefined,
    private_key,
    scopes,
  );

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
