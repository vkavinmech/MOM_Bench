describe("File upload test", () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false; 
        })
    })

    it("File uploaded to the webpage", () => {
        
        cy.visit("https://practice.expandtesting.com/upload")

        
        const imagefile = "cmd.png"

        
        cy.get('input[name="file"]').attachFile(imagefile)

      
        cy.get('button[data-testid="file-submit"]')
          .should('be.visible') 
          .click()

        
        cy.contains("File Uploaded!").should("be.visible")
    })
})
