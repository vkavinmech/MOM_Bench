import 'cypress-iframe'
describe('Should Handle iframe', () => {
    it('Should handle with Approach 1', () => {
    cy.visit("https://demo.automationtesting.in/Frames.html");

   const iframe=cy.get("#singleframe")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.find("input[type='text']").type("welcome").should('have.value','welcome')
    })

    it('Should handle with Approach 2', () => {
        cy.visit("https://demo.automationtesting.in/Frames.html");
        
        cy.getIframe("#singleframe").find("input[type='text']").type("welcome").should('have.value','welcome')
    });
    it('Should handle with Approach 3', () => {
        cy.visit("https://demo.automationtesting.in/Frames.html");
        cy.frameLoaded('#singleframe')
        cy.iframe('#singleframe').find("input[type='text']").type("welcome")
        .should('have.value','welcome')
    
    });
});