describe("Test to not log in", () => {
  beforeEach(() => {
    cy.visit(`/`);
  });

  it("should not log in with invalid credentials", () => {
    cy.wait(1000);
    cy.get(
      "#registerForm > div.modal-footer > button.btn-outline-success"
    ).click();
    cy.wait(1000);

    // Invalid email and password
    cy.get(`#loginEmail`).type(`invalid@noroff.no`);
    cy.get(`#loginPassword`).type(`wrongpassword`);

    cy.get(`button.btn-success`).contains("Login").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.contain(
        "Either your username was not found or your password is incorrect"
      );
    });
  });
});
