const { describe } = require("mocha");

describe('Assertions demo',()=>
{
    it("verifying the OrangeHRM application",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
})