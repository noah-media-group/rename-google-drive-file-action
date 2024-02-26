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
        case "clientEmail":
          return "client@example.com";
        case "privateKey":
          return "private_12345_key";

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
      clientEmail: "client@example.com",
      privateKey: "private_12345_key",
    };

    expect(inputs).toMatchObject(expectedInputs);
  });
});
