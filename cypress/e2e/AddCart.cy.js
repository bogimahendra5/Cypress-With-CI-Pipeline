import Header from "../pages/Header";
import LoginPages from "../pages/LoginPages";
import Menu from "../pages/Menu/Menu";
import ProductPages from "../pages/ProductPages";

describe("Add to Cart Men", () => {
  beforeEach(() => {
    cy.visit("/");
    Header.btnSignin().click();
    LoginPages.Login("bogi.mahendra+testdemo@myrobin.id", "Password*0#");
  });

  it("From Menu to View Detail", () => {
    Menu.gotoJacketMenu();
    ProductPages.NameProduct("Proteus Fitness Jackshirt").click();
    ProductPages.AddtoCartFlow(2);
    cy.wait(2000);
    cy.get(".message-success.success.message").should("be.visible");
  });
});
