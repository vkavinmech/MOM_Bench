describe('Capture screenshot', () => {
    it('Should perform screenshot', () => {
        cy.visit('https://www.google.com/');
        cy.screenshot('page');
        cy.wait(3000);
        cy.get('.lnXdpd').screenshot('element');
    });
}); 