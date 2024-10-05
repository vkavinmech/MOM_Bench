describe('Navigate between two URLs', () => {
    it('Should navigate to both URLs in sequence', () => {
      // Navigate to the first URL
      cy.origin('https://foratravel.typeform.com', () => {
        cy.visit('https://foratravel.typeform.com/to/uTw5bh2q');
        // set assertion
        cy.contains('GET STARTED').should('be.visible');
      });
  
      // Navigate to the second URL
      cy.origin('https://fora.retool.com', () => {
        cy.visit('/apps/2f6daa5e-4380-11ef-89da-d3b6f0100cc2/QA/Leads%20Program%20Staging');
        // set assertion
        cy.title().should('eq', 'Login | Retool');
      });
    });
  });
  
