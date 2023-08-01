import LoginPages from "../pages/LoginPages";
import MenuHeader from "../pages/MenuHeader";
import MyAccountMenu from "../pages/CustomerPages/MyAccountMenu";

describe("Sign in Test", () => {
  beforeEach(() => {
    cy.visit("/customer/account/login");
    LoginPages.inputEmail().should("be.visible");
    LoginPages.btnSubmit().should("be.visible");
    LoginPages.forgetPassword().should("be.visible");
  });

  it("Login Valid", () => {
    LoginPages.Login("bogi.mahendra+testdemo@myrobin.id", "Password*0#");
    MyAccountMenu.btnEdit().should("be.visible");
    MyAccountMenu.btnChangePassword().should("be.visible");
    MenuHeader.nameLogged().should("be.visible");
    cy.xpath("//li[@class='nav item']//a[normalize-space()='Advanced Search']")
      .scrollIntoView({ duration: 2000 })
      .should("be.visible");
  });
});
