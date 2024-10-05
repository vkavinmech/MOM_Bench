describe('Dummy Ticket Negative Scenarios', () => {
    let data;
    before(()=>{
        cy.fixture('dummy').then( (userdata)=>{
            data=userdata; 
        })
    });
    beforeEach('Navigate to the url',() => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
    });
  
    it('should show validation message for empty coupon code field submission', () => {
      cy.get('.showcoupon').click();
      cy.get('#coupon_code').type('').type('{enter}');
      cy.get("button[value='Apply coupon']").click();
      cy.get("ul[role='alert'] li").should('contain', "Please enter a coupon code");
    });
    it('should place order without entering fields', () => {
        cy.get('#place_order').click();
        cy.wait(2000)
        cy.get('[data-id="billing_phone"]').should('contain', data.exp);
        cy.get('[data-id="billing_email"]').should('contain', data.exp);
        cy.get('[data-id="billing_address_1"]').should('contain', data.exp);
        cy.get('[data-id="billing_city"]').should('contain', data.exp);
        cy.get('[data-id="billing_state"]').should('contain', data.exp);
        cy.get('[data-id="billing_postcode"]').should('contain', data.exp);
        cy.get('[data-id="travname"]').should('contain', data.exp);
        cy.get('[data-id="travlastname"]').should('contain', data.exp);
        cy.get('[data-id="dob"]').should('contain', data.exp);
        cy.get('[data-id="sex"]').should('contain', data.exp);
        cy.get('[data-id="fromcity"]').should('contain', data.exp);
        cy.get('[data-id="tocity"]').should('contain', data.exp);
        cy.get('[data-id="departon"]').should('contain', data.exp);
      });
    it('should show validation message for invalid email format', () => {
      cy.get('#billing_email').type(data.emailInvalid);
      cy.get('#place_order').click();
      cy.get("ul[role='alert']").should('be.visible');
    });
  
    it('should show validation message for invalid phone format', () => {
        cy.get("#travname").type(data.firstname);
        cy.get("#travlastname").type(data.lastname);
        cy.get("#dob").click();
        cy.get("select[aria-label='Select month']").select('Jul');
        cy.get("select[aria-label='Select year']").select('1996');
        cy.get("tbody tr:nth-child(3) td:nth-child(3) a:nth-child(1)").click();
        cy.get("#sex_1").check();
        cy.get("#fromcity").type(data.fromcity);
        cy.get("#tocity").type(data.tocity);
        cy.get('#departon').click();
        cy.get("select[aria-label='Select month']").select('Sep');
        cy.get("select[aria-label='Select year']").select('2024');
        cy.get("tbody tr td:nth-child(3) a:nth-child(1)").click();
        cy.get("#deliverymethod_3").check();
        cy.get("#billname").type(data.billingName);
        cy.get("#billing_phone").type(data.Invalidphone);
        cy.get("#billing_email").type(data.emailValid);
        cy.get("#select2-billing_country-container").click();
        cy.get("input[role='combobox']").type('India').type('{enter}')
        cy.get("#billing_address_1").type(data.houseNo);
        cy.get("#billing_address_2").type(data.village);
        cy.get("#billing_city").type(data.city);
        cy.get("#select2-billing_state-container").click();
        cy.get("input[role='combobox']").type('Tamil Nadu').type('{enter}')
        cy.get("#billing_postcode").type(data.pincode);
        cy.get('#place_order').click();
        //assert
        cy.get("li[data-id='billing_phone']").should('contain', "is not a valid phone number.");
    });
  
    it('should show validation message for entering invalid card details ', () => {
        cy.get("#travname").type(data.firstname);
        cy.get("#travlastname").type(data.lastname);
        cy.get("#dob").click();
        cy.get("select[aria-label='Select month']").select('Jul');
        cy.get("select[aria-label='Select year']").select('1996');
        cy.get("tbody tr:nth-child(3) td:nth-child(3) a:nth-child(1)").click();
        cy.get("#sex_1").check();
        cy.get("#fromcity").type(data.fromcity);
        cy.get("#tocity").type(data.tocity);
        cy.get('#departon').click();
        cy.get("select[aria-label='Select month']").select('Sep');
        cy.get("select[aria-label='Select year']").select('2024');
        cy.get("tbody tr td:nth-child(3) a:nth-child(1)").click();
        cy.get("#deliverymethod_3").check();
        cy.get("#billname").type(data.billingName);
        cy.get("#billing_phone").type(data.phone);
        cy.get("#billing_email").type(data.emailValid);
        cy.get("#select2-billing_country-container").click();
        cy.get("input[role='combobox']").type('India').type('{enter}')
        cy.get("#billing_address_1").type(data.houseNo);
        cy.get("#billing_address_2").type(data.village);
        cy.get("#billing_city").type(data.city);
        cy.get("#select2-billing_state-container").click();
        cy.get("input[role='combobox']").type('Tamil Nadu').type('{enter}')
        cy.get("#billing_postcode").type(data.pincode);
        cy.get('#place_order').click();
        cy.get("#amount-impression").should('contain', '990');
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > ul:nth-child(1) > section:nth-child(1) > li:nth-child(1) > span:nth-child(2)").click();
        cy.get("#cardNumber").type('4242424242424242')
        cy.get("#cardNumberError").should('contain', 'International cards are not allowed on this merchant');
    });
  
    it('should show error for lazypay payment options', () => {
        cy.get("#travname").type(data.firstname);
        cy.get("#travlastname").type(data.lastname);
        cy.get("#dob").click();
        cy.get("select[aria-label='Select month']").select('Jul');
        cy.get("select[aria-label='Select year']").select('1996');
        cy.get("tbody tr:nth-child(3) td:nth-child(3) a:nth-child(1)").click();
        cy.get("#sex_1").check();
        cy.get("#fromcity").type(data.fromcity);
        cy.get("#tocity").type(data.tocity);
        cy.get('#departon').click();
        cy.get("select[aria-label='Select month']").select('Sep');
        cy.get("select[aria-label='Select year']").select('2024');
        cy.get("tbody tr td:nth-child(3) a:nth-child(1)").click();
        cy.get("#deliverymethod_3").check();
        cy.get("#billname").type(data.billingName);
        cy.get("#billing_phone").type(data.phone);
        cy.get("#billing_email").type(data.emailValid);
        cy.get("#select2-billing_country-container").click();
        cy.get("input[role='combobox']").type('India').type('{enter}')
        cy.get("#billing_address_1").type(data.houseNo);
        cy.get("#billing_address_2").type(data.village);
        cy.get("#billing_city").type(data.city);
        cy.get("#select2-billing_state-container").click();
        cy.get("input[role='combobox']").type('Tamil Nadu').type('{enter}')
        cy.get("#billing_postcode").type(data.pincode);
        cy.get('#place_order').click();
        cy.get("#amount-impression").should('contain', '990');
        cy.get('.card-offer').click();
        cy.get('.eligible-options__mobile-number > button').click();
        cy.get('#mobileNumber').clear().type('1234567890');
        cy.get('#mobileNumberError').should('contain','Mobile Number is invalid');
    });
  });
  