import LoginPage from '../pages/LoginPage'

describe("Page Object Model", function()  {
    
    it("Valid test data", function() {

        const lp = new LoginPage()
        lp.visit()
        lp.fillEmail("Admin")
        lp.fillPwd("admin123")
        lp.submit()
        cy.title().should("be.equal", "OrangeHRM")

    })

})