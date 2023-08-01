class MyAccountMenu {
  //My Account Menu
  btnEdit = () => cy.xpath("//span[normalize-space()='Edit']");
  btnChangePassword = () => cy.get(".action.change-password");
  btnManageAdress = () =>
    cy.xpath("//span[normalize-space()='Manage Addresses']");
}

export default new MyAccountMenu();
