const { assert } = require("chai")


describe("assretions demo", function () {
    it("implicit assertions", function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('include', 'opensource')
            .should('contain', 'live')


        cy.title().should('eq', 'OrangeHRM')
            .should('not.eq', 'greens')

        cy.get('.orangehrm-login-logo > img')
            .should('be.visible')
            .and('exist')

    })


    it("explicit assertions", function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get(" input[placeholder='Password']").type("admin123")

        cy.get("button[type='submit']").click()


        let expname = "fbibif"
        cy.get(".oxd-userdropdown-name").then((x) => {

            let actname = x.text()
            expect(actname).to.not.equal(expname)


            assert.notEqual(expname,actname)
        })




    })















})