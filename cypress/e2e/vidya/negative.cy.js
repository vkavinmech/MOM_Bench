describe('Negative Test - Dummy Ticket for Visa Application', () => {

    beforeEach(() => {
        // Visit the dummy ticket page
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
    });

    it('Should show error for missing required fields', () => {
        // Click on the Submit button without filling in any fields
        cy.get('#place_order').click(); 

        // Verify required field errors appear
        cy.contains('Billing Phone is a required field.').should('be.visible');
        cy.contains('Billing Email address is a required field.').should('be.visible');
        cy.contains('Billing Street address is a required field.').should('be.visible');
        cy.contains('Billing Town / City is a required field.').should('be.visible');
        cy.contains('Billing State / District / Province is a required field.').should('be.visible');
        cy.contains('Billing Postcode / ZIP / PIN code is a required field.').should('be.visible');
        cy.contains('First / Given name is a required field.').should('be.visible');
        cy.contains('Last / Surname is a required field.').should('be.visible');
        cy.contains('Date of birth is a required field.').should('be.visible');
        cy.contains('Sex is a required field.').should('be.visible');
        cy.contains('From city / Origin is a required field.').should('be.visible');
        cy.contains('To city. /Dest. is a required field.').should('be.visible');
        cy.contains('Departure date is a required field.').should('be.visible');
    });

    it('Should show error for invalid email format', () => {
        // Enter an invalid email format
        cy.get('#travname').type('John');
        cy.get('#travlastname').type('Doe')
        cy.get('#dob').click()
        cy.get(':nth-child(3) > :nth-child(4) > .ui-state-default').click()
        cy.get('#sex_1').check().should("be.checked")
        cy.get('#billing_email').type('test'); 
        cy.get('#place_order').click();

        // Verify error message for invalid email
        cy.contains('Invalid billing email address').should('be.visible');
    });

    it.only('Should show error for invalid phone number', () => {
        // Enter a past date in the travel date field
        cy.get('#travname').type('John');
        cy.get('#travlastname').type('Doe')
        cy.get('#dob').click()
        cy.get('.ui-datepicker-prev > .ui-icon').click()
        cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click()
        cy.get('#sex_1').check().should("be.checked")
        cy.get('#fromcity').type("Bangalore")
        cy.get("#tocity").type("Mangalore")
        cy.get('#departon').click()
        cy.get(':nth-child(3) > :nth-child(5) > .ui-state-default').click()
        cy.get('#billing_phone').type("abc")
        cy.get('#billing_email').type('test@testauto.com'); 
        cy.get('#billing_address_1').type("testaddress")
        cy.get('#billing_city').type("testcity")
        cy.get('#billing_state_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click()
        cy.contains('.select2-results__option', 'Assam').click()
        cy.get('#billing_postcode').type('1111111')
        cy.get('#place_order').click();

        // Verify error message for invalid phone number
        cy.contains('Billing Phone is not a valid phone number').should('be.visible');
    });

    
});
