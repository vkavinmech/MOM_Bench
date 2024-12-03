describe('Contact Us Form Tests', () => {
    beforeEach(() => {
      // Visit the Contact Us page before each test
      cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
    });
  
    it('should submit the form successfully with valid data', () => {
      // Fill out the form with valid data
      cy.get('input[name="first_name"]').type('John');
      cy.get('input[name="last_name"]').type('Doe');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('textarea[name="message"]').type('This is a test message.');
  
      // Submit the form
      cy.get('input[type="submit"]').click();
  
      // Verify the success message
      cy.get('h1').should('contain.text', 'Thank You for your Message!');
    });
  
    it('should display an error when submitting with missing required fields', () => {
      // Leave out the "Last Name" field
      cy.get('input[name="first_name"]').type('Asha');
      cy.get('input[name="email"]').type('asalatha@example.com');
      cy.get('textarea[name="message"]').type('This is a test message.');
  
      // Submit the form
      cy.get('input[type="submit"]').click();
  
      // Verify the error message
      cy.get('body').should('contain.text', 'Error: all fields are required');
    });
  
    it('should display an error when submitting with an invalid email', () => {
      // Fill out the form with an invalid email
      cy.get('input[name="first_name"]').type('Asha');
      cy.get('input[name="last_name"]').type('Latha');
      cy.get('input[name="email"]').type('ashalatha@123');
      cy.get('textarea[name="message"]').type('This is a test message.');
  
      // Submit the form
      cy.get('input[type="submit"]').click();
  
      // Verify the error message
      cy.get('body').should('contain.text', 'Error: Invalid email address');
    });
  
    it('should reset the form fields when clicking "Reset"', () => {
      // Fill out the form with some data
      cy.get('input[name="first_name"]').type('Asha');
      cy.get('input[name="last_name"]').type('Latha');
      cy.get('input[name="email"]').type('ashalatha@example.com');
      cy.get('textarea[name="message"]').type('This is a test message.');
  
      // Click the reset button
      cy.get('input[type="reset"]').click();
  
      // Verify that all fields are cleared
      cy.get('input[name="first_name"]').should('have.value', '');
      cy.get('input[name="last_name"]').should('have.value', '');
      cy.get('input[name="email"]').should('have.value', '');
      cy.get('textarea[name="message"]').should('have.value', '');
    });
  });
  