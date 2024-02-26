import * as core from "@actions/core";
import { getInputs } from "./getInputs";
import { renameFile } from "./renameFile";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export const run = async (): Promise<void> => {
  try {
    const { fileId, fileName, credentials } = getInputs();

    await renameFile(fileId, fileName, credentials);
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
};
