describe('Validate Implicit Assertion', () => {
    it('Should Verify the Assertion', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.wait(2000);
    cy.url().should('include','orangehrmlive.com')
    // we can use and keyword instead of should keyword
    .and('contain','orangehrm')
    .and('not.contain','Google')
    cy.title().should('include','Orange')
    .and('eq','OrangeHRM')
    cy.get('.orangehrm-login-branding > img').should('be.visible')
   
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
    .should('have.value','Admin')

});
});