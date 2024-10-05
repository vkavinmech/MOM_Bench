describe('Select the Radio Button', () => {
    it('Should Verify the Radio Button selection', () => {
    cy.visit("https://artoftesting.com/samplesiteforselenium");
    cy.wait(3000);
    //visibility of button
   cy.get("#male").should('be.visible')
   cy.get("#female").should('be.visible')
    //selecting the male button
    cy.get("#male").check().should('be.checked')
    cy.get("#female").should('not.be.checked')
     //selecting the female button
    cy.get("#female").check().should('be.checked')
    cy.get("#male").should('not.be.checked')
    });
});