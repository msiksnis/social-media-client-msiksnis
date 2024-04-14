describe("Test to log out", () => {
  beforeEach(() => {
    cy.visit(`/`);
  });

  it("should log in, then log out", () => {
    cy.wait(1000);
    cy.get(
      "#registerForm > div.modal-footer > button.btn-outline-success"
    ).click();
    cy.wait(1000);
    cy.get(`#loginEmail`).type(Cypress.env("USER_EMAIL"));
    cy.get(`#loginPassword`).type(Cypress.env("USER_PASSWORD"));
    cy.get(`button.btn-success`).contains("Login").click();

    cy.get("button.btn-outline-warning").contains("Logout").click();
    cy.get("#registerForm > div.modal-footer > button.btn-outline-success")
      .contains("Login")
      .should("exist");
  });
});
