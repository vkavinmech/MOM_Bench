describe('Responsive Testing', () => {

    it('Should perform click action', () => {
        cy.visit('https://www.google.com/');
        cy.wait(3000);
        cy.get(':nth-child(1) > .gb_X').click();
        cy.url().should('eq',"https://www.google.com/intl/en-US/gmail/about/");
    });
    it('Should perform viewport', () => {
        cy.viewport("iphone-x")
        cy.visit('https://www.google.com/');
        cy.wait(3000);
        cy.get(':nth-child(1) > .gb_X').click();
        cy.url().should('eq',"https://www.google.com/intl/en-US/gmail/about/");
        });
    it('Should perform viewport', () => {
        cy.viewport("samsung-note9")
        cy.visit('https://www.google.com/');
        cy.wait(3000);
        cy.get(':nth-child(1) > .gb_X').click();
        cy.url().should('eq',"https://www.google.com/intl/en-US/gmail/about/");
        });
    it('Should perform viewport', () => {
        cy.viewport("iphone-se2")
        cy.visit('https://www.google.com/');
        cy.wait(3000);
        cy.get(':nth-child(1) > .gb_X').click();
        cy.url().should('eq',"https://www.google.com/intl/en-US/gmail/about/");
        });
}); 
