class Menu {
  // Main Menu
  btnWhatsnew = () => cy.get("#ui-id-3");
  btnWomen = () => cy.get("#ui-id-4");
  btnMen = () => cy.get("#ui-id-5");
  btnGear = () => cy.get("#ui-id-6");
  btnTraining = () => cy.get("#ui-id-7");
  btnSale = () => cy.get("#ui-id-8");

  // Men Menu
  menTops = () => cy.get("#ui-id-17");
  menBottom = () => cy.get("#ui-id-18");

  // Men Tops Menu
  menTopsJacket = () => cy.get("#ui-id-19");
  menTopsHoodiesSweatershirts = () => cy.get("#ui-id-20");
  menTopsTees = () => cy.get("#ui-id-21");
  menTopsTank = () => cy.get("#ui-id-22");

  // Men Bottoms Menu
  menBottomsPants = () => cy.get("#ui-id-23");
  menBottomsShorts = () => cy.get("#ui-id-24");

  gotoJacketMenu = () => {
    this.btnMen().trigger("mouseover");
    this.menTops().trigger("mouseover");
    this.menTopsJacket().click();
  };
}

export default new Menu();
