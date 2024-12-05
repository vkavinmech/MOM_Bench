describe("implicit assertion",()=>
{
    it("using implicit assertion",()=>
    {
        //launching the url
        cy.visit("https://testautomationpractice.blogspot.com/")

        //verifying the url
        cy.url().should('contain',"testautomationpractice.blogspot").and('eq',"https://testautomationpractice.blogspot.com/")

        //verifying the title of the page 
        cy.title().should('eq',"Automation Testing Practice").and('include',"Testing Practice")

        //validating name text field is present or not
        cy.get("input#name").should('be.visible').and('exist')

        //validating name text filed have the placeholder or not 
        cy.get("input#name").should('have.attr', 'placeholder', 'Enter Name')

        //validating when clicking the name text field the cursor is active or not (autofocus)
        cy.get("input#name").click().should('have.focus')

        //enter the value on the name text field
        cy.get("input#name").clear().type("my username")

        //validate the username have entered correctly on that field 
        cy.get("input#name").should('have.value',"my username")

        //validating the email text field is present or not 
        cy.get("input#email").should('be.visible').and('exist')

        //validating email text field have the placeholder or not
        cy.get("input#email").should('have.attr','placeholder',"Enter EMail")

        //validating when clicking the email text field the cursor is active or not (autofocus)
        cy.get("input#email").click().should("have.focus")

        //enter the email on the email text field 
        cy.get("input#email").type("bala@gmail.com")

        //verifying the email is correctly entered or not 
        cy.get("input#email").should('have.value',"bala@gmail.com")

        //validating phone number text field is present or not 
        cy.get("input#phone").should('be.visible').and('exist')

        //verifying phone number text field have  a placeholder or not 
        cy.get("input#phone").should('have.attr','placeholder',"Enter Phone")

        //verify phone number text field have a autofocus cursor or not
        cy.get("input#phone").click().should('have.focus')

        //enter the phone number on the phone number text field 
        cy.get("input#phone").type("9150794431")

        //verify the number is entered or not 
        cy.get("input#phone").should('have.value',"9150794431")

        //validating male radio button visibility 
        cy.get("input#male").should('be.visible')

        //validating female radio button visibilitty
        cy.get("input#female").should('be.visible')

        //validate female radio button is enabled or not
        cy.get('input#female').should('be.enabled')

        //validate male radio button is enabled or not
        cy.get("input#male").should('be.enabled')

        //validate female radio button is clickable or not 
        cy.get('input#female').check().should('be.checked')

        //validate after clicking the female radio button the colour is changing or not
        cy.get('input#female').check().should('be.checked') .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
    

        //validate if i click female radio button male should be unchecked
        cy.get("input#male").should('not.be.checked')

        //validate male radio button can be clickable
        cy.get("input#male").check().should('be.checked')

         //validate after clicking the male radio button the colour is changing or not
         cy.get('input#male').check().should('be.checked') .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

        //validate after clicking male radio button female radio button should be unchecked
        cy.get('input#female').should('not.be.checked')

        //validating the checkboxes visibility
        cy.get("input#monday").should('be.visible').and('be.enabled')
        cy.get("input#sunday").should('be.visible').and('be.enabled')
        cy.get("input#tuesday").should('be.visible').and('be.enabled')
        cy.get("input#wednesday").should('be.visible').and('be.enabled')
        cy.get("input#thursday").should('be.visible').and('be.enabled')
        cy.get("input#friday").should('be.visible').and('be.enabled')
        cy.get("input#saturday").should('be.visible').and('be.enabled')

        //validate by clicking all the checkboxes at a time 
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //validate after clicking all the check boxes it has to change the colour
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')

        //validate by unchecking all the checkboxes at a time
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //validating the dropdown
        cy.get("select#country").should('be.visible').and('exist')

        //click the dropdown
        cy.get("select#country").select("japan")

        //validate the value is selected correctly or not
        cy.get("select#country").select("japan").should('have.value',"japan")

        //select another option on the dropdown
        cy.get("select#country").select("United States")

        //validate the value is selected correctly or not
        cy.get("select#country").select("United States").should('have.value',"usa")

        //handling the scroll down option
        cy.get("select#colors").scrollIntoView().select("white")

        


    })

})