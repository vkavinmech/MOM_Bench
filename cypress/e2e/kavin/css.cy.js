describe('Navigate to the url', () => {
    it('Should Enter the text', () => {
    cy.visit('https://www.google.com/');
    cy.wait(3000);
    cy.get('#APjFqb').type("Automation");
        });
     }); 
