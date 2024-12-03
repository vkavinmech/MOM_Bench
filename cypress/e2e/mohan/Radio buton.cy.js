describe("Radio",()=>{
    it("Radio button",()=>{
        cy.visit("https://practice.expandtesting.com/radio-buttons#google_vignette");
        cy.get("#red").should("be.visible");
        cy.get(".form-check-label").should("be.visible");
        cy.get("#black").check().and("be.checked");
        cy.get("#blue").check().should("be.checked");
        cy.get("#basketball").should("not.be.checked");
    
    })
})