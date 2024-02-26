import * as core from "@actions/core";

export type Inputs = {
  fileId: string;
  fileName: string;
  clientEmail: string;
  privateKey: string;
};

export const getInputs = (): Inputs => {
  const fileId = core.getInput("fileId", {
    trimWhitespace: true,
    required: true,
  });

  const clientEmail: string = core.getInput("clientEmail", {
    required: true,
  });

  const privateKey: string = core.getInput("privateKey", {
    required: true,
  });

  const fileName: string = core.getInput("fileName", {
    required: true,
  });

  return {
    fileId,
    fileName,
    clientEmail,
    privateKey,
  };
};
