describe("Cypress", () => {
    it("failling filling form", () => {
      cy.visit("http://localhost:3000");
      cy.get("#description").type("Hello, World with some random").blur();
      cy.get('select[name="CATEGORY"]').select("2");
      cy.get('select[name="RESPONSIBLE"]').select("4");
      cy.get("#time").type("15:15");
      cy.get("#confirmButton").click();
    });
  });
  