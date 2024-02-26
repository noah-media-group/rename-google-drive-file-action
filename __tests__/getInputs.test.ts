import * as core from "@actions/core";
import { Inputs, getInputs } from "../src/getInputs";

let getInputMock: jest.SpiedFunction<typeof core.getInput>;

describe("getInputs", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    getInputMock = jest.spyOn(core, "getInput").mockImplementation();
  });

  it("should return inputs", async () => {
    // Arrange
    getInputMock.mockImplementation((name) => {
      switch (name) {
        case "fileId":
          return "file_12345_id";
        case "fileName":
          return "new file name";
        case "credentials":
          return `{ "private_key": "private_12345_key", "client_email": "client@example.com" }`;

        default:
          return "";
      }
    });

    // Act
    const inputs = getInputs();

    // Assert
    const expectedInputs: Inputs = {
      fileId: "file_12345_id",
      fileName: "new file name",
      credentials: {
        client_email: "client@example.com",
        private_key: "private_12345_key",
      },
    };

    expect(inputs).toMatchObject(expectedInputs);
  });
});
