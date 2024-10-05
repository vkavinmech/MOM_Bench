describe('navigate go forward and backward', () => {
    
    it('Should go back and forward', () => {
    cy.visit('https://www.google.com/');
        cy.title().should('eq','Google')
        cy.get('#APjFqb').type('Cypress')
        cy.get('[data-entityname="cypress"] > .eIPGRd > .pcTkSc').click();
        cy.get("span[class='nPDzT'] div[class='YmvwI']").should('have.text',"All")

    cy.go('back');
    cy.title().should('eq','Google')

    cy.go('forward');
    cy.get("svg[height='30']").should('be.visible')

    cy.go(-1);
    cy.url().should('eq','https://www.google.com/')

    cy.go(1);
    cy.get(".goxjub").should('be.visible')
    
    cy.reload();
    });
}); 