describe(`Test logging in`, () => {
  beforeEach(() => {
    cy.visit(`/`);
  });

  it(`should log in with valid credentials`, () => {
    cy.wait(1000);
    cy.get(
      "#registerForm > div.modal-footer > button.btn-outline-success"
    ).click();
    cy.wait(1000);
    cy.get(`#loginEmail`).type(Cypress.env("USER_EMAIL"));
    cy.get(`#loginPassword`).type(Cypress.env("USER_PASSWORD"));
    cy.get(`button.btn-success`).contains("Login").click();
    cy.get(`body`).should(`have.class`, `logged-in`);
  });
});
