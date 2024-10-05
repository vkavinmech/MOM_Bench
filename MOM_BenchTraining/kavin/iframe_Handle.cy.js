import 'cypress-iframe'
describe('Should Handle with iframe', () => {
    it('Should handle with iframe', () => {
    cy.visit("https://practice-automation.com/iframes/");

   const iframe=cy.get("#iframe-1")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.find('.getStarted_Sjon').click();
        cy.iframe("#iframe-1").find("span[itemprop='name']").should('have.text','Installation')
    })
    it('Should handle with custom command', () => {
        cy.visit("https://practice-automation.com/iframes/");
        
        cy.getIframe("#iframe-1").find(".getStarted_Sjon").click();
        cy.getIframe('#iframe-1').find("span[itemprop='name']").should('have.text','Installation')  
    });
    it('Should handle with plugin', () => {
        cy.visit("https://practice-automation.com/iframes/");
        cy.frameLoaded('#iframe-1') 
        cy.iframe('#iframe-1').find(".getStarted_Sjon").click();
        cy.iframe('#iframe-1').find("span[itemprop='name']").should('have.text','Installation')
    });
    it('Should handle with iframe', () => {
        cy.visit("https://practice-automation.com/iframes/");
    
       const iframe=cy.get("#iframe-2")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
    
            iframe.find(".mt-2 > a").click({ force: true });
            iframe.find(".d-1").should('have.text','About Selenium')
        })
        it('Should handle with custom command', () => {
            cy.visit("https://practice-automation.com/iframes/");
            
            cy.getIframe("#iframe-2").find(".mt-2 > a").click({ force: true });
            cy.getIframe('#iframe-2').find(".d-1").should('have.text','About Selenium')
        });
        it('Should handle with plugin', () => {
            cy.visit("https://practice-automation.com/iframes/");
            cy.frameLoaded('#iframe-2') 
            cy.iframe('#iframe-2').find(".mt-2 > a").click({ force: true });
            cy.iframe('#iframe-2').find(".d-1").should('have.text','About Selenium')
        });
});