/// <Reference types='cypress'

describe("write a script using custom commands", () => {

    it("Login to webpage", () => {

       cy.login("tomsmith", "SuperSecretPassword!")
       cy.title().should("be.equal", "The Internet")

        cy.login("tomsmith1", "SuperSecretPassword!") // invalid username
        cy.title().should("be.equal", "The Internet")

        cy.login("tomsmith", "1SuperSecretPassword!") // invalid password
        cy.title().should("be.equal", "The Internet")

    })

    it("Add customer", () =>{

        cy.login("tomsmith", "SuperSecretPassword!")

        // script for adding new customer

        cy.log("Adding customer......")

    })

    it("Edit customer", () =>{

        cy.login("tomsmith", "SuperSecretPassword!")

        // script for adding new customer

        cy.log("Editing customer......")

    })
})