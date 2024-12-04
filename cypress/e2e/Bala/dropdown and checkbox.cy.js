
///<reference types="cypress"/>



describe("checking the UI elements",()=>
{


    it("checking the radio button",()=>
    {
        //launching the url
       cy.visit("https://testautomationpractice.blogspot.com/") 

       //validating the url
       cy.url().should('eq',"https://testautomationpractice.blogspot.com/")

       //visibility of radio buttons
       cy.get("input#male").should('be.visible')
       cy.get("input#female").should('be.visible')

       //selecting the male radio button
       cy.get("input#male").check().should('be.checked')
       cy.get("input#female").should('not.be.checked')

       //selecting the female radio button
       cy.get("input#female").check().should('be.checked')
       cy.get("input#male").should('not.be.checked')
         
    })
    it("checking the checkbox ",()=>
        {
            //launching the url
           cy.visit("https://testautomationpractice.blogspot.com/") 
    
           //visibility of checkbox
           cy.get("input#monday").should('be.visible')
         
           //selecting single checkbox
           cy.get("input#monday").check().should('be.checked')
    
           //unselecting the check box
           cy.get("input#monday").uncheck().should('not.be.checked')

           //selecting all the checkboxes at a time 
           cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

           //unselecting all the checkboxes at a time
           cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

           //selecting the first checkbox
           cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

           //selecting the last checkbox
           cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')


             
        })





})