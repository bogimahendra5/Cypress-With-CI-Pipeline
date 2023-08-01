class HomePages {
  HotSellersProduct() {
    return cy.get(".product-items.widget-product-grid");
  }
  TittleContent() {
    return cy.get("h2[class='title']");
  }
  btnShopNewYoga() {
    return cy.get(".action.more.button");
  }
  btnMorePants() {
    return cy.get(
      "a[class='block-promo home-pants'] span[class='action more icon']"
    );
  }
}

export default new HomePages();
