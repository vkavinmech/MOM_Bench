describe('Data-Driven Login Testing', () => {
    beforeEach(function () {
      cy.fixture('logindata').then(function (data) {
        this.data = data; // Load the test data into the context
      });
    });
  
    it('should test login with multiple data sets', function () {
      this.data.forEach((user) => {
        cy.visit('http://the-internet.herokuapp.com/login'); // Visit your actual login page
        cy.get('#username').type(user.username);
        cy.get('#password').type(user.password);
        cy.get('form').submit();
  
        // Assert the expected login message
        cy.get('#flash').should('contain', user.expectedMessage);
      });
    });
  });
  