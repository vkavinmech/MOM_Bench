describe("implicit assertion",()=>
{
    it("using implicit assertion",()=>
    {
        //launching the url
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.url().should('contain',"testautomationpractice.blogspot").and('eq',"https://testautomationpractice.blogspot.com/")

        cy.title().should('eq',"Automation Testing Practice").and('include',"Testing Practice")

        cy.get("input#name").should('be.visible').and('exist').click().should('have.focus') .and('have.attr', 'placeholder', 'Enter Name').clear().type("my username").and('have.value',"my username")

        cy.get("input#email").should('be.visible').and('exist').and('have.attr','placeholder',"Enter EMail").click().and("have.focus").type("bala@gmail.com").and('have.value',"bala@gmail.com")

        cy.get("input#phone").should('be.visible').and('exist').and('have.attr','placeholder',"Enter Phone").click().and('have.focus').type("9150794431").should('have.value',"9150794431")

        cy.get("input#male").should('be.visible').and('be.enabled').check().should('be.checked').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

        cy.get("input#female").should('not.be.checked')

        cy.get('input#female').should('be.visible').and('be.enabled').check().should('be.checked').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

        cy.get("input#male").should('not.be.checked')

        cy.get("input#monday").should('be.visible').and('be.enabled')

        cy.get("input#sunday").should('be.visible').and('be.enabled')

        cy.get("input#tuesday").should('be.visible').and('be.enabled')

        cy.get("input#wednesday").should('be.visible').and('be.enabled')

        cy.get("input#thursday").should('be.visible').and('be.enabled')

        cy.get("input#friday").should('be.visible').and('be.enabled')

        cy.get("input#saturday").should('be.visible').and('be.enabled')

        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked').and('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

        .uncheck().should('not.be.checked')

        cy.get("select#country").should('be.visible').and('exist').select("japan").should('have.value',"japan").select("United States").should('have.value',"usa")
        
        cy.get("select#colors").scrollIntoView().select("white")

        


    })

})