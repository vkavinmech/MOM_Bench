

describe("check box validation" , function (){

it("check box " , function (){

cy.visit("https://testautomationpractice.blogspot.com/")
cy.get(".form-check-input[type=checkbox]").check().should("be.checked")
cy.get(".form-check-input[type=checkbox]").uncheck().should("not.be.checked")

cy.get(".form-check-input[type=checkbox]").first().check().should("be.checked")
cy.get(".form-check-input[type=checkbox]").last().check().should("be.checked")

cy.get("#wednesday").check().should("be.checked")
cy.get("#friday").check().should("not.be.checked")




})





})