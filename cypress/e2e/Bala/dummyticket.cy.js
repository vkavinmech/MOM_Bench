describe("automate dummyticket website", () => {
  it("dummy ticket for visa application", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.location("href").should(
      "eq",
      "https://www.dummyticket.com/dummy-ticket-for-visa-application/"
    );
    cy.get(".navbar-logo-img.navbar-logo-img-normal").should("be.visible");
    cy.get(
      "li[id='menu-item-13'] a[class=' nav-item-child ffb-ark-first-level-menu ']"
    )
      .should("be.visible")
      .and("have.text", "Home");
    cy.get(
      "li[id='menu-item-574'] a[class=' nav-item-child ffb-ark-first-level-menu ']"
    )
      .should("be.visible")
      .and("have.text", "Buy Ticket");
    cy.get("a[href='https://www.dummyticket.com/contact/']")
      .should("be.visible")
      .and("have.text", "Contact");
    cy.get("div[id='opc-product-selection'] li:nth-child(1)").should(
      "be.visible"
    );
    cy.get("#product_549").click();
    const expresult =
      '"Dummy ticket for Visa Application" added to your order. Complete your order below.';
    cy.get("div[role='alert']").then((data) => {
      const actresult = data.text().replace(/\s+/g, " ").trim();
      expect(actresult).to.equal(expresult);
    });
    cy.xpath("//h3[normalize-space()='Passenger details:']")
      .should("be.visible")
      .and("have.text", "Passenger details:");
    cy.get("#travname_field > label")
      .should("be.visible")
      .should("include.text", "*");
    cy.get("#travlastname_field > label")
      .should("be.visible")
      .should("include.text", "*");
    cy.get("#travname")
      .should("be.visible")
      .and("have.attr", "placeholder", "first and middle name as on passport")
      .type("Zade");
    cy.get("#travlastname")
      .should("be.visible")
      .and("have.attr", "placeholder", "last name as on passport")
      .type("maedows");
    cy.get("#dob_field > label")
      .should("be.visible")
      .should("include.text", "*");
    cy.get("#dob").click();
    cy.get("select[aria-label='Select month']").select("Aug");
    cy.get(".ui-datepicker-year").select("2002");

    cy.get("tbody tr:nth-child(4) td:nth-child(2) a:nth-child(1)").click();

    cy.get('#sex_field > [for="1"]')
      .should("be.visible")
      .should("include.text", "*");
    cy.get('[for="sex_1"]').should("be.visible").and("exist");
    cy.get("#sex_1").click().should("be.checked");
    cy.get('[for="sex_2"]').should("be.visible").and("exist");
    cy.get("#sex_2").should("not.be.checked");
    cy.get("#sex_2").click().should("be.checked");
    cy.get("#sex_1").should("not.be.checked");
    cy.get("#fromcity").type("chennai").should("have.value", "chennai");
    cy.get("#tocity").type("New York").should("have.value", "New York");
    cy.get("#departon").click();
    cy.get("tbody tr:nth-child(4) td:nth-child(5) a:nth-child(1)").click();
    cy.get("#notes").type("flight should be on time ");
    cy.get("#select2-reasondummy-container").click();
    cy.get("input[role='combobox']").type("Visa application{enter}");
    cy.get("#appoinmentdate").click();
    cy.get("tbody tr:nth-child(4) td:nth-child(5) a:nth-child(1)").click();
    cy.get("#deliverymethod_3").click().should("be.checked");
    cy.get("#billname").type("zade").should("have.value", "zade");
    cy.get("#billing_phone")
      .type("9876545623")
      .should("have.value", "9876545623");
    cy.get("#billing_email")
      .type("zademadeows@gmail.com")
      .should("have.value", "zademadeows@gmail.com");
    cy.get("#select2-billing_country-container").click();
    cy.get("input[role='combobox']").type("India{enter}");
    cy.get("#select2-billing_country-container").should("have.text", "India");
    cy.get("#billing_address_1").type("no.123,ghandhi street");
    cy.get("#billing_address_2").type("AS apartment B block 3rd floor");
    cy.get("#billing_city").type("chennai");
    cy.get("#select2-billing_state-container").click();
    cy.get("input[role='combobox']").type("Tamil Nadu{enter}");
    cy.get("#select2-billing_state-container").should(
      "have.text",
      "Tamil Nadu"
    );
    cy.get("#billing_postcode").type("603404");
    cy.get("#order_review_heading").should("be.visible");
    cy.get("tr[class='cart-subtotal'] th").should("be.visible");
    const exptext = "Cart Subtotal";
    cy.get("tr[class='cart-subtotal'] th").then((data) => {
      const acttext = data.text();
      expect(acttext).to.equal(exptext);
    });

    cy.get("#place_order").click();
    cy.get(":nth-child(2) > .l1Item > .l1Item__content > p").click();
    cy.get('[data-testid="cardNumber"]').type("4242 4242 4242 4242");
    cy.get('[data-testid="cardExpiry"]').type("05/26");
    cy.get('[data-testid="cardCvv"]').type("123");
    cy.get('[data-testid="cardOwnerName"]').type("zademeadows");
    cy.go("back");
    cy.go("back");
    cy.get(
      "li[id='menu-item-13'] a[class=' nav-item-child ffb-ark-first-level-menu ']"
    ).click();
    cy.location("href").should("eq", "https://www.dummyticket.com/");
    cy.get(
      "li[id='menu-item-574'] a[class=' nav-item-child ffb-ark-first-level-menu ']"
    ).click();
    cy.get("a[href='https://www.dummyticket.com/contact/']").click();
    cy.location("href").should("eq", "https://www.dummyticket.com/contact/");
    cy.go("back");
  });
  it("dummy ticket for visa application - Negative Scenarios", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.location("href").should(
      "eq",
      "https://www.dummyticket.com/dummy-ticket-for-visa-application/"
    );
    cy.get(".navbar-logo-img.navbar-logo-img-normal").should("be.visible");
    cy.get(
      "li[id='menu-item-13'] a[class=' nav-item-child ffb-ark-first-level-menu ']"
    )
      .should("be.visible")
      .and("have.text", "Home");
    cy.get(
      "li[id='menu-item-574'] a[class=' nav-item-child ffb-ark-first-level-menu ']"
    )
      .should("be.visible")
      .and("have.text", "Buy Ticket");

    cy.get("#billing_phone").clear();
    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("include.text", "Billing Phone is a required field.");

    cy.get("#billing_email").clear();
    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("include.text", "Billing Email address is a required field.");

    cy.get("#billing_address_1").clear();
    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("include.text", "Billing Street address is a required field.");

    cy.get("#billing_city").clear();
    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("include.text", "Billing Town / City is a required field.");

    cy.get("#billing_postcode").clear();
    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and(
        "include.text",
        "Billing Postcode / ZIP / PIN code is a required field."
      );

    cy.get("#travname").clear();
    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("include.text", "First / Given name is a required field.");

    cy.get("#travlastname").clear();
    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("include.text", "Last / Surname is a required field.");

    cy.get("#sex_1").should("not.be.checked");
    cy.get("#sex_2").should("not.be.checked");

    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("include.text", "Sex is a required field.");

    cy.get("#billing_email").type("zademade.com");
    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("include.text", "Invalid billing email address");
    cy.get("#billing_email").clear().type("zademade@gmail.com");

    cy.get("#billing_phone").type("bhnthjjdjd");
    cy.get("#place_order").click();
    cy.get(".woocommerce-error")
      .should("be.visible")
      .and("include.text", "Billing Phone is not a valid phone number.");

    cy.get("#billing_phone").clear().type("78965432");
    cy.get("#place_order").click();
  });
});
