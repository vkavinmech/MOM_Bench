describe("sauce demo application", () => {
  it("sign up to an account", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });
  it.only("adding a product to the cart", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get(
      '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    ).should("be.visible");
    const exptext = "Sauce Labs Backpack";
    cy.get(
      '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    ).then((value) => {
      const acttext = value.text();
      expect(exptext).to.equal(acttext);
    });

    cy.get(
      '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    ).click();
    cy.url().should("eq", "https://www.saucedemo.com/inventory-item.html?id=4");
    cy.get(".inventory_details_img").should("be.visible");
    const expprice = "$29.99";
    cy.get(".inventory_details_price").then((price) => {
      const actprice = price.text();
      expect(expprice).to.equal(actprice);
    });
    cy.get("#remove").click();
    cy.get("#add-to-cart").should("be.visible");
    const actvalue = "Add to cart";
    cy.get("#add-to-cart").then((value) => {
      const expvalue = value.text();
      expect(actvalue).to.equal(expvalue);
    });
    cy.get("#back-to-products").should("be.visible").click();
    cy.location("href").should(
      "include",
      "https://www.saucedemo.com/inventory.html"
    );
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    const expcountvalue = "3";
    cy.get('[data-test="shopping-cart-badge"]').then((count) => {
      const actcountvalue = count.text();
      expect(expcountvalue).to.equal(actcountvalue);
    });
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("eq", "https://www.saucedemo.com/cart.html");
    cy.get("#checkout").click();
    cy.location("href").should(
      "include",
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    cy.get("#first-name")
      .should("be.visible")
      .and("have.attr", "placeholder", "First Name")
      .type("Bala");
    cy.get("#last-name")
      .should("be.visible")
      .and("have.attr", "placeholder", "Last Name")
      .type("aadhikesavan");
    cy.get("#postal-code")
      .should("be.visible")
      .and("have.attr", "placeholder", "Zip/Postal Code")
      .type("603204");
    cy.get("#continue").click();
    cy.url().should("eq", "https://www.saucedemo.com/checkout-step-two.html");
    cy.get(
      '[data-test="item-0-title-link"] > [data-test="inventory-item-name"]'
    )
      .should("be.visible")
      .and("have.text", "Sauce Labs Bike Light");
    const price = "$9.99";
    cy.get(
      ':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]'
    ).then((value) => {
      const actprices = value.text();
      expect(price).to.equal(actprices);
    });
    cy.get(
      '[data-test="item-1-title-link"] > [data-test="inventory-item-name"]'
    )
      .should("be.visible")
      .and("have.text", "Sauce Labs Bolt T-Shirt");
    const secondprice = "$15.99";
    cy.get(
      ':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]'
    ).then((value) => {
      const actsecondprice = value.text();
      expect(secondprice).to.equal(actsecondprice);
    });
    cy.get(
      '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    )
      .should("be.visible")
      .and("have.text", "Sauce Labs Backpack");
    const thirdprice = "$29.99";
    cy.get(
      ':nth-child(5) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]'
    ).then((value) => {
      const actthirdprice = value.text();
      expect(thirdprice).to.equal(actthirdprice);
    });
    cy.get('[data-test="payment-info-label"]')
      .should("be.visible")
      .and("have.text", "Payment Information:");
    cy.get("div[data-test='payment-info-value']").should("be.visible");
    cy.get("div[data-test='shipping-info-label']")
      .should("be.visible")
      .and("have.text", "Shipping Information:");
    cy.get("div[data-test='total-info-label']")
      .should("be.visible")
      .and("have.text", "Price Total");
    cy.get(".summary_subtotal_label").should("be.visible");
    const itemtotal = "Item total: $55.97";
    cy.get('[data-test="subtotal-label"]').then((amount) => {
      const actitemtotal = amount.text();
      expect(itemtotal).to.equal(actitemtotal);
    });
    cy.get('[data-test="tax-label"]').should("be.visible");
    const taxtotal = "Tax: $4.48";
    cy.get('[data-test="tax-label"]').then((tax) => {
      const acttaxprice = tax.text();
      expect(taxtotal).to.equal(acttaxprice);
    });
    cy.get('[data-test="total-label"]').should("be.visible");
    const totalprice = "Total: $60.45";
    cy.get('[data-test="total-label"]').then((price) => {
      const exptotalprice = price.text();
      expect(totalprice).to.equal(exptotalprice);
    });
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="complete-header"]')
      .should("be.visible")
      .and("have.text", "Thank you for your order!");
      cy.get('[data-test="back-to-products"]').click()
      cy.url().should('eq',"https://www.saucedemo.com/inventory.html")
      cy.get('.product_sort_container').select('Price (low to high)'); 


  });
});
