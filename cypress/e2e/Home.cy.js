import HomePage from "../pages/HomePages";

describe("Go to Website", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Visit URL", () => {
    HomePage.btnShopNewYoga().should("be.visible");
    HomePage.btnMorePants()
      .should("be.visible")
      .and("contain.text", "Shop Pants");
  });
});
