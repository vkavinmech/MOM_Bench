describe('Hooks Execution', function () {

   beforeEach('navigate to website', function () {

        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get('#username').type("student")
        cy.get('#password').type("Password123")
        cy.get('#submit').click()
        cy.url().should('eq', 'https://practicetestautomation.com/logged-in-successfully/')

        let expname = "Congratulations student. You successfully logged in!"
        cy.get('strong').then((x) => {
            let actname = x.text()
            expect(actname).to.equal(expname)
        })
    })


    afterEach('back to the login page', function () {

        cy.visit("https://practicetestautomation.com/logged-in-successfully/")
        cy.get('.wp-block-button__link').click()
    })

    it("Home Link", function () {

        cy.get('#menu-item-43 > a').should('be.visible').click()
        cy.url().should('eq', "https://practicetestautomation.com/")
    })

    it("Practice Link", function () {
        cy.get('#menu-item-20 > a').should('be.visible').click()
        cy.url().should('eq', "https://practicetestautomation.com/practice/")
    })

    it("Courses Link", function () {
        cy.get('#menu-item-21 > a').should('be.visible').click()
        cy.url().should('eq', "https://practicetestautomation.com/courses/")
    })

   
    it("Blog Link", function () {
        cy.get('#menu-item-19 > a').should('be.visible').click()
        cy.url().should('eq', "https://practicetestautomation.com/blog/")
    })


    it("Contact Link", function () {

        cy.get('#menu-item-18 > a').should('be.visible').click()
        cy.url().should('eq', "https://practicetestautomation.com/contact/")
        cy.get("#wpforms-161-field_0").should('be.visible').and('exist').type("prithivi")
        cy.get(" #wpforms-161-field_0-last").should('be.visible').and('exist').type("v")
        cy.get("#wpforms-161-field_1").should('be.visible').and('exist').type("prthv306@gmail.com")
        cy.get("#wpforms-161-field_2").should('be.visible').type("hai welcome")

    })
})