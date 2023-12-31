import LoginPages from "../pages/LoginPages";
import Header from "../pages/Header";
import MyAccountMenu from "../pages/CustomerPages/MyAccountMenu";
import HomePages from "../pages/HomePages";

describe("Sign In Test", () => {
  beforeEach(() => {
    cy.visit("/");
    Header.btnSignin().click();
    LoginPages.inputEmail().should("be.visible");
    LoginPages.btnSubmit().should("be.visible");
    LoginPages.forgetPassword().should("be.visible");
  });

  it("Login Succes", () => {
    LoginPages.Login("bogi.mahendra+testdemo@myrobin.id", "Password*0#");
    HomePages.TittleContent().should("be.visible");
    HomePages.btnShopNewYoga().should("be.visible");
  });
});

describe.only("Sign Out Test", () => {
  beforeEach(() => {
    cy.visit("/");
    Header.btnSignin().click();
    LoginPages.inputEmail().should("be.visible");
    LoginPages.btnSubmit().should("be.visible");
    LoginPages.forgetPassword().should("be.visible");
  });

  it("Logout Succes", () => {
    LoginPages.Login("bogi.mahendra+testdemo@myrobin.id", "Password*0#");
    cy.wait(2000);
    Header.profilDropdownMenu().click();
    Header.btnLogout().click();
    Header.btnSignin().should("be.visible");
  });
});
