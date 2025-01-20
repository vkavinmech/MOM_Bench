describe("Automate the site",()=>{
    it.skip("Dummy ticket for positive scenarios",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.url().should("contain","dummy-ticket-for-visa-application")
        cy.get('.navbar-logo-img-normal').should("be.visible");
        cy.get('#menu-item-13 > .nav-item-child').should("be.visible").contains("Home")
        cy.get('#menu-item-574 > .nav-item-child').should("be.visible").contains("Buy Ticket");
        cy.get('#menu-item-1556 > .nav-item-child').should("be.visible").contains("Contact");
        //let expectedtext="Dummy ticket bookingPlease complete the below form and follow instructions in order to make your Dummy ticket'"
        cy.get('.ffb-id-35h220u5').then((inst)=>{
            let actualtext=inst.text();
            cy.log(actualtext)
            //assert.equal(expectedtext,actualtext)
        })
        cy.get('#product_549').click();
       
        cy.get('.woocommerce-billing-fields > :nth-child(1)').should('be.visible');
        cy.get('#travname').clear().type("Mohan").should("have.value","mohan")
        cy.get('#travlastname').clear().type("Raj").should("have.value","raj")
        cy.get('#dob').click();
        cy.get('.ui-datepicker-month').select("Mar")
        cy.get('.ui-datepicker-year').select("1980")
        cy.get(':nth-child(2) > :nth-child(3) > .ui-state-default').click()
        cy.get('#sex_1').check().should("be.checked");
        cy.get('#traveltype_1').click()
        cy.get('#fromcity').type("Coimbatore").should("have.value","Coimbatore");
        cy.get('#tocity').type("Singapore").should("have.value","Singapore")
        cy.xpath("(//input[@id='departon'])[1]").click();
        cy.get('.ui-datepicker-month').select("Jan")
        cy.get('.ui-datepicker-year').select("2025")
        cy.get(':nth-child(4) > :nth-child(4) > .ui-state-default').click()
        cy.get('#notes').type("For visa application")
        cy.xpath("(//span[@id='select2-reasondummy-container'])[1]").click();
        cy.xpath("(//input[@role='combobox'])[1]").type("Office work place").type('{enter}');
        cy.xpath("(//input[@id='deliverymethod_2'])[1]").click();
        cy.xpath("(//h2[normalize-space()='Billing Details'])[1]").should("be.visible");
        cy.xpath("(//input[@id='billname'])[1]").clear().type("Desicrew");
        cy.xpath("(//input[@id='billing_phone'])[1]").clear().type("8072250341");
        cy.xpath("(//input[@id='billing_email'])[1]").clear().type("skmohanraj7471@gmail.com");
        cy.xpath("(//span[@id='select2-billing_country-container'])[1]").click();
        cy.xpath("(//input[@role='combobox'])[1]").type("India").type('{enter}');
        cy.xpath("(//input[@id='billing_address_1'])[1]").type("12/varathanallur");
        cy.xpath("(//input[@id='billing_address_2'])[1]").type("sangara gounden palayam");
        cy.xpath("(//input[@id='billing_city'])[1]").type("Bhavani").should("have.value","Bhavani");
        cy.xpath("(//span[@id='select2-billing_state-container'])[1]").click();
        cy.xpath("(//input[@role='combobox'])[1]").type("Tami").type("{enter}");
        cy.get('#billing_postcode').type("638311").should("have.value","638311");
        cy.get('strong > .woocommerce-Price-amount').invoke('text').then((total)=>{
            cy.log(total);
            expect(total).to.equal('₹1,200');
        })
        cy.get('.payment_box > p').should('be.visible');
        cy.get('#place_order').should("be.visible").contains("Place order").and("not.be.disabled").click()
        cy.wait(10000);
        cy.origin('https://api.payu.in', () => {
            cy.pause();
            cy.get("span[data-testid='all-options-cta'] svg").click();
            cy.pause()
            cy.get("#payment-options >div >ul>li:nth-child(2)").click(); 
           cy.get("#cardNumber").clear().type("1234 5678 7865");
           cy.get("#cardExpiry").clear().type('02 26');
           cy.get("#cardCvv").clear().type('781');
           cy.get("#cardOwnerName").type("Raj");
           cy.get("button[type='submit'] div").click()
           cy.get(".error-msg").invoke("text").should("includes","Card number is invalid!")
          });
          
         })
         
         it("Dummy cart",()=>{
            cy.visit("https://demo-opencart.com/")
            cy.xpath("(//img[@title='Your Store'])[1]").should("be.visible");
            cy.get(':nth-child(1) > form > .product-thumb > .image > a > .img-fluid').click()
            cy.get('#button-cart').click()
            cy.get('.dropdown > .btn-lg').click()
            cy.get('.check_out1 > strong').click()
           cy.xpath("(//td[@class='text-end'][normalize-space()='$24.00'])[5]").invoke("text").then((price)=>{
            cy.log(price)

           })
           cy.get(':nth-child(7) > .text-end > .btn').click()
           cy.get('#input-firstname').type("mohan").should("have.value","mohan")
           cy.get('#input-lastname').type("raj");
           cy.get('#input-email').type("skmohanraj7471@gmail.com");
           cy.get('#input-shipping-company').type("desicrew");
           cy.get('#input-shipping-address-1').type("T.N Palayam");
           cy.get('#input-shipping-address-2').type("Near sathy");
           cy.get('#input-shipping-postcode').type("638311");
           cy.get('#input-shipping-city').type("sathy");
           cy.xpath("(//select[@id='input-shipping-country'])[1]").select("India")
           cy.get('#input-shipping-zone').select("Tamil Nadu").type("{enter}")
           cy.xpath("(//input[@id='input-password'])[1]").type("mohanraj7471");
           cy.xpath("(//input[@id='input-newsletter'])[1]").click()
           cy.xpath("(//input[@id='input-register-agree'])[1]").click();
           cy.xpath("(//button[normalize-space()='Continue'])[1]").click()
          cy.xpath("(//td[@class='text-end'][normalize-space()='$24.00'])[4]").then((price)=>{
            cy.log(price.text())
          })

         })
         it("Buy the dummy tickets",()=>{
            cy.visit("https://dummy-tickets.com/")
            cy.get('.logo_default').should("be.visible");
            cy.get('.title_big').invoke('text').then((msg)=>{
                cy.log(msg)
            })
            cy.get('#mobile-hide > .title_all_box > .title_sections > :nth-child(2)').invoke('text').then((msg)=>{
                cy.log(msg)
            })
            cy.get('.theme_btn_all > .theme-btn').should('be.visible').and("not.be.disabled").click()
            
            cy.get('#twotabtabone > .tab_content > :nth-child(1) > .col-xl-12 > .content_bx > .radio-group > :nth-child(1) > input').click();
            cy.get('#flight_oneway > .route_1 > :nth-child(1) > .suggestion-input').type("Coimbatore").type("{enter}")
            cy.get('#flight_oneway > .route_1 > :nth-child(2) > .suggestion-input').type("Singapore").type('{enter}')
           cy.xpath("(//input[@type='text'])[1]").click()
           cy.get(':nth-child(4) > :nth-child(5) > .ui-state-default').click()
           cy.get('#flight_oneway_btn').click()
          cy.xpath("(//input[@placeholder='Contact Number'])[1]").type("8072250341")
           
           cy.get('.mt-2.col-sm-12 > .form-control').type('skmohanraj7471@gmail.com')
           cy.get('.col-sm-2 > .form-control').select("Mr")
           cy.xpath("(//input[@placeholder='First Name'])[1]").type("mohan");
           cy.xpath("(//input[@placeholder='Last Name'])[1]").type("raj")
           cy.get(':nth-child(6) > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click();
           cy.xpath("(//input[@aria-label='Search'])[1]").type("India").type("{enter}")
           
           cy.xpath("(//span[@role='presentation'])[1]").click()
           cy.xpath("(//input[@aria-label='Search'])[1]").type("India - 91").type("{enter}")
           cy.xpath("(//input[@type='text'])[5]").click()
           cy.xpath("//select[@aria-label='Select year']").select("1996");
           cy.xpath("(//a[normalize-space()='5'])[1]").click()

           cy.xpath("(//input[@value='Next'])[1]").click()
           cy.get('.m > :nth-child(1) > .row > :nth-child(1) > input').click();
          cy.xpath("(//span[@id='select2-purpose-container'])[1]").click();
          cy.xpath("(//input[@aria-label='Search'])[1]").type("passport").type("{enter}")
          cy.xpath("(//textarea[@placeholder='Message (Optional)'])[1]").type("For visa");
          cy.xpath("(//input[@value='Next'])[2]").click()
           
          cy.xpath("(//select[@name='state'])[1]").select("Delhi")
          cy.xpath("(//button[@name='submit'][normalize-space()='Make Payment'])[1]").click()
           //cy.xpath("//p[text()='Debit Card']").click()
           //cy.get("#debit_name_on_card").type("mohan")
          


        })
    })