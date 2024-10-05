describe('Validate Implicit Assertion', () => {
    it('Should Verify the Assertion', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.wait(2000);
    cy.url().should('include','orangehrmlive.com')
    // we can use and keyword instead of should keyword
    .and('contain','orangehrm')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('not.contain','Google')
    cy.title().should('include','Orange')
    .and('eq','OrangeHRM')
    cy.get('.orangehrm-login-branding > img').should('be.visible')
   
    cy.get("input[placeholder='Username']").type("Admin")
    .should('have.value','Admin')

});
});