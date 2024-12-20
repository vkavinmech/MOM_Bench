////<reference type ="cypress"/>




describe("handling hooks",()=>
{
    
    beforeEach(function(){
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get(" #username").type("student")
        cy.get(" #password").type("Password123")
        cy.get(" #submit").should('be.enabled').click()

    })
    afterEach(function(){
        cy.visit("https://practicetestautomation.com/logged-in-successfully/")
        cy.xpath("//a[normalize-space()='Log out']").click()
    })
    it("validating the contact link",()=>
    {
        cy.get(" a[href='https://practicetestautomation.com/contact/']").should('be.visible').click()
        cy.location('href').should('include', 'practicetestautomation.com/contact/')
        cy.url().should('eq',"https://practicetestautomation.com/contact/")
        cy.get("#wpforms-161-field_0").should('be.visible').and('exist').type("bala")
        cy.get(" #wpforms-161-field_0-last").should('be.visible').and('exist').type("aathikesavan")
        cy.get("#wpforms-161-field_1").should('be.visible').and('exist').type("bala02aadhi@gmail.com")
        cy.get("#wpforms-161-field_2").should('be.visible').type("hai welcome")
    })
    it("validating the home link",()=>
    {
        cy.get("li[id='menu-item-43'] a").should('be.visible').click()
        cy.location('href').should('include',"practicetestautomation.com/")
        cy.url().should('eq',"https://practicetestautomation.com/")
    })
    it("validating the practice link",()=>
    {
        cy.get("a[href='https://practicetestautomation.com/practice/']").should('be.visible').click()
        cy.location('href').should('include',"practicetestautomation.com/practice/")
        cy.url().should('eq',"https://practicetestautomation.com/practice/")
    } )
    it("validating the courses link",()=>
    {
        cy.get(" a[href='https://practicetestautomation.com/courses/']").should('be.visible').click()
        cy.location('href').should('include',"practicetestautomation.com/courses/")
        cy.url().should('eq',"https://practicetestautomation.com/courses/")
    })
})