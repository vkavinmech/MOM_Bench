describe("Intercept API requests in Cypress", () => {

    before(() => {
        // Prevent Cypress from failing the test on uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; 
        });
    });

    it("Intercept and validate a GET request", () => {
        
        cy.intercept('GET', 'https://www.orangehrm.com/en/solutions/people-management/hr-administration').as('getPosts');

        
        cy.visit('https://www.orangehrm.com/');

        
        cy.get("a[href='/en/solutions/people-management/hr-administration']").first().should('exist').click({ force: true });

        
        cy.wait('@getPosts', { timeout: 120000 }).then((interception) => {
            
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.body).to.have.length.greaterThan(0);
            cy.log("Intercepted Response: " + JSON.stringify(interception.response.body));
        });
    });
});
