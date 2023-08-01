import LoginPages from "../pages/LoginPages";
import MenuHeader from "../pages/MenuHeader";

describe("Sign in Test", () => {
  beforeEach(() => {
    cy.visit("/");
    MenuHeader.btnSignin().click();
    LoginPages.inputEmail().should("be.visible");
    LoginPages.btnSubmit().should("be.visible");
    LoginPages.forgetPassword().should("be.visible");
  });

  it("Login Valid", () => {
    LoginPages.Login("bogi.mahendra+testdemo@myrobin.id", "Password*0#");
    MenuHeader.nameLogged().should("be.visible");
  });
});
