import * as core from "@actions/core";

export type Credentials = {
  client_email: string;
  private_key: string;
};

export type Inputs = {
  fileId: string;
  fileName: string;
  credentials: Credentials;
};

export const getInputs = (): Inputs => {
  const fileId = core.getInput("fileId", {
    trimWhitespace: true,
    required: true,
  });

  const fileName = core.getInput("fileName", {
    required: true,
  });

  const credentials = JSON.parse(
    core.getInput("credentials", {
      required: true,
    }),
  ) as Credentials;

  return {
    fileId,
    fileName,
    credentials,
  };
};
