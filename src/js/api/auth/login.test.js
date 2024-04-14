import localStorageMock from "./localStorage.mock.js";
import { apiPath } from "../constants.js";
import { login } from "./login.js";

global.localStorage = localStorageMock;

global.fetch = jest.fn();

describe("login", () => {
  it("verifies that the login function correctly stores the access token in local storage when given valid user credentials", async () => {
    const email = "some.user@stud.noroff.no";
    const password = "12345678!";
    const token = "bcydsb76c8sdbcs8d7";

    fetch.mockResolvedValue({
      ok: true,
      json: async () => [
        {
          accessToken: token,
          user: { id: 1, name: "Someone", email: email },
        },
      ],
    });

    const profile = await login(email, password);
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    localStorage.setItem("token", profile[0].accessToken);
    expect(localStorage.setItem).toHaveBeenCalledWith("token", token);
    expect(localStorage.getItem("token")).toEqual(profile[0].accessToken);
  });
});
