describe('Should login with Retool URL', () => {
    it('Should navigate URL and login', () => {
    // Visit the Retool app
    cy.visit('https://maniqa.retool.com/apps/a97250a4-5878-11ef-a6d7-53b353796ab1/Response%20Data%20for%20CustomerDetails%20'); 
    cy.wait(5000);
    // check the button is visible
    cy.get("button[type='button'] p[class='mYp_BM']").should('be.visible');
    cy.get("button[type='button'] p[class='mYp_BM']").click();
    cy.wait(5000);
    cy.url().should('eq','https://maniqa.retool.com/apps/a97250a4-5878-11ef-a6d7-53b353796ab1/Response%20Data%20for%20CustomerDetails%20');
    });
  });