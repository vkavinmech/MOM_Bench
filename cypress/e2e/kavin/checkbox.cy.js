describe('Select the Radio Button', () => {
    it('Should Verify the Radio Button selection', () => {
    cy.visit("https://artoftesting.com/samplesiteforselenium");
    cy.wait(6000);
    // visibility of checkbox
   cy.get("input[value='Automation']").should('be.visible')
   
    //selecting the single checkbox
    cy.get("input[value='Automation']").check().should('be.checked')
   
    //unselect
    cy.get("input[value='Automation']").uncheck().should('not.be.checked')
   
    //select all checkbox
    cy.get("input[type='checkbox']").check().should('be.checked')
    cy.get("input[type='checkbox']").uncheck().should('not.be.checked')
    
    //selecty first and last checkbox
    cy.get("input[type='checkbox']").first().check()
    cy.get("input[type='checkbox']").last().check()
});
});