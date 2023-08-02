class Header {
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

  btnMyAccount = () =>
    cy.xpath("//span[@class='customer-name active']//button[@type='button']");

  btnWishList = () =>
    cy.xpath(
      "//div[@aria-hidden='false']//a[normalize-space()='My Wish List']"
    );
  btnLogout = () =>
    cy.xpath("//div[@aria-hidden='false']//a[normalize-space()='Sign Out']");

  // Object
  StoreLogo = () => cy.get("//a[@aria-label='store logo']//img");
  PageTittleHeading = () => cy.get("#page-title-heading");
  Chart = () => cy.get(".action.showcart");
  Search = () => cy.get("#search");
}

export default new Header();
