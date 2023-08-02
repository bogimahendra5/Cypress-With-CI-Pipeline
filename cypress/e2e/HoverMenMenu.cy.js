import LoginPages from "../pages/LoginPages";
import Header from "../pages/Header";
import Menu from "../pages/Menu/Menu";

describe("Test Hover Button Login", () => {
  beforeEach(() => {
    cy.visit("/");
    Header.btnSignin().click();
    LoginPages.Login("bogi.mahendra+testdemo@myrobin.id", "Password*0#");
    Header.nameLogged().should("be.visible");
  });

  it("Hover Men Menu", () => {
    Menu.btnMen().trigger("mouseover");
    Menu.menTops().should("be.visible");
    Menu.menBottom().should("be.visible");
    Menu.btnMen().trigger("mouseout");
    Menu.menTops().should("not.be.visible");
    Menu.menBottom().should("not.be.visible");
  });

  it("Hover Tops Men Menu", () => {
    Menu.btnMen().trigger("mouseover");
    Menu.menTops().trigger("mouseover");
    Menu.menTopsJacket().should("be.visible");
    Menu.menTopsHoodiesSweatershirts().should("be.visible");
    Menu.menTopsTees().should("be.visible");
    Menu.menTopsTank().should("be.visible");
  });

  it("Hover Bottoms Men Menu", () => {
    Menu.btnMen().trigger("mouseover");
    Menu.menBottom().trigger("mouseover");
    Menu.menBottomsPants().should("be.visible");
    Menu.menBottomsShorts().should("be.visible");
  });
});

describe("Test Hover Button Non Login", () => {
  beforeEach(() => {
    cy.visit("/");
    Header.btnSignin().click();
    Header.btnSignin().should("be.visible");
    //LoginPages.Login("bogi.mahendra+testdemo@myrobin.id", "Password*0#");
    //Header.nameLogged().should("be.visible");
  });

  it("Hover Men Menu", () => {
    Menu.btnMen().trigger("mouseover");
    Menu.menTops().should("be.visible");
    Menu.menBottom().should("be.visible");
    Menu.btnMen().trigger("mouseout");
    Menu.menTops().should("not.be.visible");
    Menu.menBottom().should("not.be.visible");
  });

  it("Hover Tops Men Menu", () => {
    Menu.btnMen().trigger("mouseover");
    Menu.menTops().trigger("mouseover");
    Menu.menTopsJacket().should("be.visible");
    Menu.menTopsHoodiesSweatershirts().should("be.visible");
    Menu.menTopsTees().should("be.visible");
    Menu.menTopsTank().should("be.visible");
  });

  it("Hover Bottoms Men Menu", () => {
    Menu.btnMen().trigger("mouseover");
    Menu.menBottom().trigger("mouseover");
    Menu.menBottomsPants().should("be.visible");
    Menu.menBottomsShorts().should("be.visible");
  });
});
