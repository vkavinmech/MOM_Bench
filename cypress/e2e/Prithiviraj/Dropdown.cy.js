

describe("handling drop down", function () {

    it("Dropdown select", function () {

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#country").select('India').should('have.value', 'india')

    })

 


})