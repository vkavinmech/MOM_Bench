describe("handling before after hooks ",()=>{

    before(function(){
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.get(" #username").type("student")
        cy.get(" #password").type("Password123")
        cy.get(" #submit").should('be.enabled').click()
    })

    after(function(){
        cy.visit("https://practicetestautomation.com/logged-in-successfully/")
        cy.xpath("//a[normalize-space()='Log out']").click()
    })

    it("validating links",()=>
    {
        cy.get("a[href='https://practicetestautomation.com/practice/']").click()
        cy.location('href').should('includes',"practicetestautomation.com/practice/")
        cy.url().should('eq',"https://practicetestautomation.com/practice/")
        cy.get("a[href='https://practicetestautomation.com/practice-test-login/']").click()
        cy.go('back')
        cy.get("a[href='https://practicetestautomation.com/practice-test-exceptions/']").click()
        cy.get("input[value='Pizza")  
        .should('have.value', 'Pizza')  
        .then((value) => {
            const actualvalue = value.val();
            const expvalue = "Pizza";
            expect(actualvalue).to.equal(expvalue);
        });
    
        cy.get("#edit_btn").should('be.enabled').click()
        cy.get("input[value='Pizza']").clear().type("burger").should('have.value',"burger")
        cy.get("#save_btn").should('be.enabled').click()
        cy.get("#add_btn").should('be.enabled').click()
        cy.get("a[href='https://practicetestautomation.com/contact/']").click()
        cy.get("#wpforms-161-field_0").should('be.visible').and('exist').type("bala")
        cy.get(" #wpforms-161-field_0-last").should('be.visible').and('exist').type("aathikesavan")
        cy.get("#wpforms-161-field_1").should('be.visible').and('exist').type("bala02aadhi@gmail.com")
        cy.get("#wpforms-161-field_2").should('be.visible').type("hai welcome")
        cy.get("#modern-store-modified")
        .click()
        

    })
})