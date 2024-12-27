

describe("radio buttons", function(){


it("male and female", function(){


cy.visit("https://testautomationpractice.blogspot.com/")

cy.get("#male").check().should("be.visible")
cy.get("#female").should("be.visible")

cy.get("#male").check().should("be.checked")
cy.get("#female").should("not.be.checked")

cy.get("#female").check().should("be.checked")
cy.get("#male").should("not.be.checked")

})



})