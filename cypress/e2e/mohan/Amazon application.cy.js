describe("Automate the Amazon application", () => {
    let ExpPrice1;
    it("Sign up the account", () => {
        cy.visit("https://www.amazon.in/");
        cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click();
        cy.get("#createAccountSubmit").click();
        cy.xpath("//h1[normalize-space()='Create Account']").should("be.visible").and("contain.text", "Create Account");
        cy.get("#ap_customer_name").type("mohan");
        cy.get("#ap_phone_number").type("8072250341");
        cy.get("#ap_password").type("mohanraj7471");
        cy.get('#continue').should("be.visible").and("be.enabled").then((txt) => {
            const buttonText = txt.text();
            cy.log(buttonText);
        });
    })
    

    it("Login the app", () => {
        cy.visit("https://www.amazon.in/");
        cy.url().should("include", "amazon");
        cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click();
        cy.get("h1.a-spacing-small").should("be.visible").and("contain.text", "Sign in");
        cy.get('#ap_email').type("8072250341");
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type("mohanraj7471");
        cy.get("#signInSubmit").click();
    })
    it("Update the location",()=>{
        cy.visit("https://www.amazon.in/");
        cy.get("#glow-ingress-line2").click();
        cy.wait(5000)
        cy.xpath("(//input[@id='GLUXZipUpdateInput'])[1]").clear({ force: true }).type("638501", { force: true })
  .should("have.value", "638501");
         cy.wait(2000)
        cy.get("input[aria-labelledby='GLUXZipUpdate-announce']").click();
    });

    it("Search the Mobile products and buy the product in App", () => {
        
        cy.visit("https://www.amazon.in/");
       cy.get('#twotabsearchtextbox').type("realme mobiles");
        cy.wait(4000)
        cy.get('#nav-search-submit-button').should("be.enabled").click();
        //cy.pause();
        cy.get("img[alt^='realme NARZO']").should("be.visible");
        cy.get('#a-autoid-1-announce').click();
        cy.get("div.a-row.puis-atcb-remove-group a.a-size-mini").should("be.visible");
        cy.get('#nav-cart-count').should("be.visible").click();
        cy.get('.a-link-normal > .sc-product-image').should("be.visible");
        cy.get('.a-section > .a-size-medium').invoke('text').then((price) => {
            ExpPrice1 =  `Price1: ${price}`;
            cy.log(ExpPrice1)
  });
       

      
        cy.get('.a-section > .a-size-medium').invoke("text").then((price2) => {
            let actualPrice =  `Price1: ${price2}`;
            cy.log(actualPrice);
            //expect(actualPrice).to.equal("₹10,499.00")
        assert.equal(ExpPrice1, actualPrice);
        });
        cy.get("input[value='Proceed to checkout']").should("be.visible").and("be.enabled").click()
        cy.get('#ap_email').type("8072250341");
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type("mohanraj7471");
        cy.get("#signInSubmit").click();
        cy.get('.a-span8').should("be.visible");
        cy.get('.a-spacing-extra-large > [data-action="trigger-modal-dialog"] > [data-testid]').click()
        cy.get('#address-ui-widgets-enterAddressFullName').type("Mohan raj")
        cy.get('#address-ui-widgets-enterAddressPhoneNumber').type("8072250341")
        cy.get('#address-ui-widgets-enterAddressPostalCode').clear().type("638501");
        cy.get('#address-ui-widgets-enterAddressLine1').clear().type("Bargur main road,check post")
        cy.get('#address-ui-widgets-enterAddressLine2').type("Ennamangalam village");
        cy.get('#address-ui-widgets-landmark').type("Check post")
        //cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input').click()
        
    });
    it("Search the Electronics product",()=>{
        cy.visit("https://www.amazon.in/");
        cy.get('#twotabsearchtextbox').type("Redmi tv")
         cy.wait(4000)
        cy.get('#nav-search-submit-button').should("be.enabled").click();
         cy.scrollTo("bottom")
         cy.wait(2000)
         cy.scrollTo("top")
         cy.get('.sg-col-14-of-20 > .sg-col-inner').should("be.visible");
         cy.get("h2[aria-label='Redmi Xiaomi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32MA-FVIN (Black)'] span").should("be.visible");
         cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_3'] span[class='a-price-whole']").should("be.visible");
         cy.get('#a-autoid-3-announce').click();
         cy.get('#nav-cart-count').click();
         cy.get('.a-section > .a-size-medium').invoke("text").then((price)=>{
            let expprice=(`Price:${price}`);
            cy.log(expprice)
         })
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').should("be.enabled").click()
    cy.get('#ap_email').type("8072250341");
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type("mohanraj7471");
        cy.get("#signInSubmit").click();
        cy.get('.a-span8').should("be.visible");
        cy.get('.a-spacing-extra-large > [data-action="trigger-modal-dialog"] > [data-testid]').click()
        cy.get('#address-ui-widgets-enterAddressFullName').type("Mohan raj")
        cy.get('#address-ui-widgets-enterAddressPhoneNumber').type("8072250341")
        cy.get('#address-ui-widgets-enterAddressPostalCode').clear().type("638311");
        cy.get('#address-ui-widgets-enterAddressLine1').clear().type("Bhavani bus stand")
        cy.get('#address-ui-widgets-enterAddressLine2').type("Near canara bank");
        cy.get('#address-ui-widgets-landmark').type("New bus stand")

        })
        it("Amazon prime",()=>{
            cy.visit("https://www.amazon.in/");
            cy.get('#nav-link-amazonprime > :nth-child(1)').click()
            cy.get('.primeDetailPage-content-hero-right > .a-spacing-top-medium').invoke("text").then((value)=>{
                cy.log(`Text is:${value}`)
                
            })
            cy.get('#a-autoid-0-announce').click()
            cy.get('#ap_email').type("8072250341");
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type("mohanraj7471");
        cy.get("#signInSubmit").click();
        cy.get('.desktop-clp-tier > .a-section > .a-spacing-none').should("be.visible")

        })
        it("Amazon pay",()=>{
            cy.visit("https://www.amazon.in/");
            cy.get('[href="/gp/sva/dashboard?ref_=nav_cs_apay"]').should("be.visible").contains("Amazon Pay").click()
            cy.get('#apay-sticker > .a-link-normal > img').should("be.visible");
            cy.get('.a-span4').should("be.visible").then((txt)=>{
                const amount=txt.text()
                cy.log(amount)
                cy.log(txt.text())
                //expect(amount).to.equal("₹0.00")
            })
            
    })
    it("Customer Service",()=>{
        cy.visit("https://www.amazon.in/");
        cy.get('[href="/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help"]').should("be.visible").click()
        cy.get('.a-section.ss-landing-container > h1').invoke("text").then((value)=>{
            cy.log(`Message:${value}`)
        })
        cy.get(':nth-child(1) > :nth-child(1) > .a-color-base > .a-box > .a-box-inner > .a-row > .a-span9 > .a-spacing-none').click()
        cy.get('#ap_email').type("8072250341");
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type("mohanraj7471");
        cy.get("#signInSubmit").click();
        cy.get('.js-time-filter-form > .a-form-label').then((order)=>{
            const details=order.text();
            cy.log(details);
            
        })
        cy.get('.a-spacing-extra-large > .a-section').then((res)=>{
            cy.log(res.text())
        })

})
it("Search and Buy the Air cooler",()=>{
    cy.visit("https://www.amazon.in/");
    cy.get('#twotabsearchtextbox').type("air cooler")
    cy.wait(4000);
    cy.xpath("//div[text()='air cooler']").contains("air cooler for room").click()
    cy.get('.a-spacing-double-large').should("be.visible");
   cy.xpath("(//i[@class='a-icon a-icon-checkbox'])[1]").click()
   cy.xpath("(//i[@class='a-icon a-icon-checkbox'])[2]").click();
   cy.get('#a-autoid-1-announce').should("be.enabled").click();
    cy.get('#nav-cart-count').click();
   cy.get('#sc-subtotal-amount-buybox > .a-size-medium').invoke("text").then((price)=>{
    cy.log(`Price:${price}`)
   })


})
})