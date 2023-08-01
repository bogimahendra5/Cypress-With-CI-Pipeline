class LoginPages {
  // Form Signin
  inputEmail = () => cy.get("#email");
  inputPassword = () => cy.get("#pass");
  btnSubmit = () => cy.get("#send2");
  forgetPassword = () =>
    cy.xpath(
      "//a[@class='action remind']//span[contains(text(),'Forgot Your Password?')]"
    );
  btnCreateAccount = () => cy.get(".action.create.primary");

  // Error Message
  passRequired = () => cy.get("#pass-error");
  emailRequired = () => cy.get("#email-error");

  // Signin Flow
  Login = (email, pass) => {
    this.inputEmail().type(email);
    this.inputPassword().type(pass);
    this.btnSubmit().click();
  };
}

export default new LoginPages();
