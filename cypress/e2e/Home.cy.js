import HomePage from "../pages/HomePages";
describe("Go to Website", () => {
  it("Visit URL", () => {
    cy.visit("/");
    HomePage.btnShopNewYoga().should("be.visible");
    HomePage.btnMorePants()
      .should("be.visible")
      .and("contain.text", "Shop Pants");
  });
});
