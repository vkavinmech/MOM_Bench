describe('Sauce Demo Login and Product Page Tests', () => {
  
    
    beforeEach(() => {
        
  cy.visit('https://www.saucedemo.com')


    });
  
    it('Should login successfully with valid credentials', () => {
     
      cy.get('#user-name').type('standard_user'); 
      cy.get('#password').type('secret_sauce'); 
  
      
      cy.get('#login-button').click();
  
      
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('contain', 'Products');
    });
  
    it('Should display error for invalid login', () => {
      // Enter invalid credentials
      cy.get('#user-name').type('invalid_user');
      cy.get('#password').type('wrong_password');
  
      // Submit login form
      cy.get('#login-button').click();
  
      // Check for error message
      cy.get('[data-test="error"]').should('be.visible')
        .and('contain', 'Username and password do not match any user in this service');
    });
  
    it('Should add a product to the cart', () => {
      // Login first
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Add a product to the cart
      cy.get("[data-test='add-to-cart-sauce-labs-backpack']").click()
      
      cy.get('.shopping_cart_badge').should('contain', '1');

      cy.get("[data-test='shopping-cart-link']").click()
      cy.get('.title').should('contain', 'Your Cart')

      cy.get("[data-test='checkout']").click()
      cy.get("[data-test='firstName']").type("Test1")
      cy.get('[data-test="lastName"]').type("automation")
      cy.get('[data-test="postalCode"]').type("1234567")
      cy.get('[data-test="continue"]').click()

      cy.get('.title').should('contain', 'Checkout: Overview')

      cy.get('[data-test="finish"]').click()
      cy.get('[data-test="complete-header"]').should("have.text", "Thank you for your order!")

      cy.get('[data-test="back-to-products"]').click()
    });
  
    it('Should log out successfully', () => {
      // Login first
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Open the menu and click logout
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
  
      // Verify that the user is redirected to the login page
      cy.url().should('include', '/');
      cy.get('#login-button').should('be.visible');
    });
  
  });
  