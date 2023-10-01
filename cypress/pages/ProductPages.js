class ProductPages {
  // Size Product
  SelectedSize = () =>
    cy.xpath("(//span[@class='swatch-attribute-selected-option'])[1]");
  sizeXS = () => cy.get("#option-label-size-143-item-166");
  sizeS = () => cy.get("#option-label-size-143-item-167");
  sizeM = () => cy.get("#option-label-size-143-item-168");
  sizeL = () => cy.get("#option-label-size-143-item-169");
  sizeXL = () => cy.get("#option-label-size-143-item-170");

  //Colour Product
  SelectedColour = () =>
    cy.xpath("(//span[@class='swatch-attribute-selected-option'])[2]");
  blue = () => cy.get("#option-label-color-93-item-50");
  orange = () => cy.get("#option-label-color-93-item-56");
  purple = () => cy.get("#option-label-color-93-item-57");
  white = () => cy.get("#option-label-color-93-item-49");

  //Quantity
  inputQty = () => cy.get("#qty");

  //Action Button
  AddtoCart = () => cy.get("#product-addtocart-button");
  AddtoWishlist = () => cy.get(".action.towishlist");
  AddtoCompare = () => cy.get(".action.tocompare");

  //View Product
  NameProduct = (name) => cy.contains(".product-item-link", name);

  //AddproducttoCart
  AddtoCartFlow = (qty) => {
    this.sizeM().click();
    this.blue().click();
    this.inputQty().clear().type(qty);
    this.AddtoCart().click();
  };
}

export default new ProductPages();
