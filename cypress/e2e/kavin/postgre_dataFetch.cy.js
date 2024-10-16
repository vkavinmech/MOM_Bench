describe('Database Test', () => {
  it('Fetches data from PostgreSQL', () => {
    cy.task('queryDatabase', 'SELECT * FROM "login"').then((result) => {
        cy.log(result);
      });
  });
  it("should perform the data fetch from database", () => {
    //Fetch the data from the database
    cy.task('queryDatabase', 'SELECT * FROM "login"')
      .then((result) => { 
        expect(result).to.have.length.of.at.least(1);
        const row = result[0];
        //Extract data's from the fetched row
        const username = row.username; 
        const pass = row.pass;         
        const expected = row.expected; 
        cy.log(`Username: ${username}`);
        cy.log(`Password: ${pass}`);
        cy.log(`Expected Text: ${expected}`);
        //Use the fetched data for login
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type(username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
          .type(pass);
        cy.get('.oxd-button').click();
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
          .should('have.text', expected);
      });
  });
 
});