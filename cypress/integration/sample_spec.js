describe("App", () => {
  it("check if app is rendering a welcome message", () => {
    cy.visit("http://localhost:3000");
    cy.get(".App-header")
      .contains("Learn React, please learsdafdsf dsfsdn")
      .should("have.attr", "href", "https://reactjs.org");
  });
});
