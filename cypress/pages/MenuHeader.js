class MenuHeader {
  // Non Login Header
  btnSignin = () => cy.xpath("(//a[contains(text(),'Sign In')])[1]");
  btnCreateAccount = () =>
    cy.xpath(
      "//div[@class='panel header']//a[normalize-space()='Create an Account']"
    );

  // Logged Header
  nameLogged = () =>
    cy.get("div[class='panel header'] span[class='logged-in']");

  profilDropdownMenu = () =>
    cy.xpath("//span[@class='customer-name active']//button[@type='button']");

  menuMyAccount = () =>
    cy.xpath("//span[@class='customer-name active']//button[@type='button']");

  menuWishList = () =>
    cy.xpath(
      "//div[@aria-hidden='false']//a[normalize-space()='My Wish List']"
    );
  Logout = () =>
    cy.xpath("//div[@aria-hidden='false']//a[normalize-space()='Sign Out']");

  // Menu
  btnWhatsnew = () => cy.get("#ui-id-3");
  btnWomen = () => cy.get("#ui-id-4");
  btnMen = () => cy.get("#ui-id-5");
  btnGear = () => cy.get("#ui-id-6");
  btnTraining = () => cy.get("#ui-id-7");
  btnSale = () => cy.get("#ui-id-8");

  // Object
  StoreLogo = () => cy.get("//a[@aria-label='store logo']//img");
  PageTittleHeading = () => cy.get("#page-title-heading");
  Chart = () => cy.get(".action.showcart");
  Search = () => cy.get("#search");
}

export default new MenuHeader();
