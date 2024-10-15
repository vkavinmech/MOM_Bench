describe('custom commands', () => {
    // click on link using label
    it('Should handle the links', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.loginapp("Admin","admin123");
    cy.clickLink("Recruitment");
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text','Candidates')
   });
   // reusable custom command
   it('Login command', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.loginapp("Admin","admin123");
    cy.clickLink("Recruitment");
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text','Candidates')
   });
 }); 