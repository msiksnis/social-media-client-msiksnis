import { logout } from "./logout";
import * as storage from "../../storage/index.js";

jest.mock("../../storage/index.js");

describe("logout", () => {
  it('should call remove with "token" and "profile"', () => {
    logout();

    // Remove called with "token" and "profile"
    expect(storage.remove).toHaveBeenCalledWith("token");
    expect(storage.remove).toHaveBeenCalledWith("profile");

    // Verifies that remove was called exactly two times
    expect(storage.remove).toHaveBeenCalledTimes(2);
  });
});
