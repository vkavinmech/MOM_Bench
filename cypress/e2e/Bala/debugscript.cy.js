///<reference types="cypress"/>

describe("checking the UI elements", () => {

    it("checking the radio button", () => {

        cy.visit("https://testautomationpractice.blogspot.com/")
        
        
        cy.url().should('eq', "https://testautomationpractice.blogspot.com/")
        cy.log("Verified the URL successfully.") 

        
        cy.get("input#male").should('be.visible').debug() 
        cy.log("Male radio button is visible.") 
        cy.get("input#female").should('be.visible').debug() 
        cy.log("Female radio button is visible.") 

        
        cy.get("input#male").check().should('be.checked').debug() 
        cy.log("Male radio button is checked.") 
        cy.get("input#female").should('not.be.checked').debug() 
        cy.log("Female radio button is not checked.") 

        
        cy.get("input#female").check().should('be.checked').debug() 
        cy.log("Female radio button is checked.") 
        cy.get("input#male").should('not.be.checked').debug() 
        cy.log("Male radio button is not checked.") 
    })

    it("checking the checkbox", () => {
        
        cy.visit("https://testautomationpractice.blogspot.com/")
        
    
        cy.get("input#monday").should('be.visible').debug()
        cy.log("Monday checkbox is visible.") 

    
        cy.get("input#monday").check().should('be.checked').debug()
        cy.log("Monday checkbox is checked.") 
        cy.get("input#monday").uncheck().should('not.be.checked').debug()
        cy.log("Monday checkbox is unchecked.") 

        
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked').debug() 
        cy.log("All checkboxes are checked.") 
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked').debug() 
        cy.log("All checkboxes are unchecked.") 

        
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked').debug() 
        cy.log("First checkbox is checked.") 

        
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked').debug() 
        cy.log("Last checkbox is checked.") 

        
        cy.pause()  
        cy.log("test paused") 
    })
})
