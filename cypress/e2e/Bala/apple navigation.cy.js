describe("Navigation",()=>
{
    it("Navigation",()=>
    {
        cy.visit("https://www.apple.com/")
        
          

        cy.url().should('include',"apple.com")

        cy.title().should('eq',"Apple")

        cy.get(".globalnav-link-text-container").eq(4).click()

        cy.location('href').should('include',"apple.com/watch/")

        cy.go('back')

        cy.wait(3000)

        cy.url().should('eq',"https://www.apple.com/")

        cy.go('forward')

        cy.url().should('eq',"https://www.apple.com/watch/")




    })
})