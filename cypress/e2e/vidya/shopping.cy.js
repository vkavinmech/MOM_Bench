describe('AJIO Signup, Login, Search, and Cart Test', () => {

    before ( () =>{

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignore Firebase configuration error specifically
            if (err.message.includes('installations/missing-app-config-values')) {
                return false; // Prevent Cypress from failing the test
            }
        })
    })

    // Define reusable credentials and search term
    const email = 'testuser@example.com';
    const password = 'Test@1234';
    const productName = 'Jeans'; // Example product for search

    beforeEach(() => {
        // Visit Shoppy homepage before each test
        cy.visit('https://www.shopsy.in/');
    
    });

    /*it.only('Signup Test', () => {
        // Navigate to Signup/Account page
        cy.get('#loginAjio').click(); 
        
        // Switch to Signup tab or enter signup details
        cy.get('.signup-tab').click(); // Adjust selector to switch to signup tab if applicable
        
        // Fill in signup details
        cy.get('#username').type(email); // Replace with actual selector for email field
        cy.get('#password').type(password); // Replace with actual selector for password field
        cy.get('#mobile').type('9876543210'); // Replace with actual selector for phone field

        // Submit the form
        cy.get('.signup-button').click(); // Adjust selector for Signup button

        // Verification - check for a welcome message or account name
        cy.contains('Welcome').should('be.visible');
    });*/

    it('Login Test', () => {
        // Navigate to Login page
        cy.get('.sc-c711f4f6-1').click(); 
        cy.pause()  
        
               // Verification - ensure user is logged in
        cy.url().should("eq", "https://www.shopsy.in/")
    });

    it('Search Product Test', () => {
        // Enter product name in search field and submit
        cy.get('.sc-5591d660-3').type(`${productName}{enter}`);

        // Verification - Check that search results contain the product name
        cy.contains(productName).should('be.visible');
    });

    it.only('Add Product to Cart and Verify Cart', () => {
        // Search for a product
        cy.get('.sc-5591d660-3').type(`${productName}{enter}`);
        cy.wait(5000)

        
        cy.get(':nth-child(2) > .r-13awgt0.r-eqz5dr > :nth-child(1) > :nth-child(3) > .css-175oi2r.r-13hce6t > :nth-child(1) > .r-1u7ml5x > .r-1awozwy.r-knv0ih > .r-1yav64w > .css-175oi2r > img').first().click(); // Adjust selector for product item

        // Add the product to the cart
        cy.contains("Add to cart").should('be.visible').click()

        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > .r-150rngu > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-xifl00 > [tabindex="0"] > .css-175oi2r > .css-146c3p1').click()

        cy.get('.r-18u37iz.r-13hce6t > [tabindex="0"] > .css-175oi2r').click()

        // Go to cart to verify the item
        cy.get('.sc-3a37045b-3 > :nth-child(2)').click(); 

        // Verification - Ensure the correct product is in the cart
        cy.contains(productName).should('be.visible');

        // Additional verification for price calculations
        cy.get('.r-1h0z5md > :nth-child(3) > .css-175oi2r > .css-146c3p1')
        .invoke('text')
        .then((priceText) => {
            const itemPrice = parseFloat(priceText.replace('₹', '').trim());
  
            // Retrieve and verify the total price
            cy.get('.r-ur6pnr > .r-18u37iz > .css-175oi2r > .css-146c3p1')
              .invoke('text')
              .then((totalText) => {
                  const totalPrice = parseFloat(totalText.replace('₹', '').trim());
                  expect(totalPrice).to.equal(itemPrice);
              });
        })
        .then(() => {
            // Place Order step
            cy.contains("Enter Delivery Pincode").click();
            cy.get('.css-11aywtz').type("574111");
            cy.get('.r-nsbfu8 > .r-13qz1uu > [tabindex="0"] > .css-175oi2r > .css-146c3p1').click()
            cy.contains("Place Order").click()
        })
    });
});
