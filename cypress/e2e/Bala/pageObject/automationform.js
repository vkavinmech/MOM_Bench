class FormName{
    visit()
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
    }
    setFirstname(firstname)
    {
        cy.get("#name").type(firstname)
    }
    setEmail(email)
    {
        cy.get("#email").type(email)
    }
    setPhone(phone)
    {
        cy.get("#phone").type(phone)
    }
    setAdress(adress)
    {
        cy.get("#textarea").type(adress)
    }
    genderMale()
    {
        cy.get("#male").click().should('be.checked')

        cy.get("#female").should("not.be.checked")
    }
    genderFemale()
    {
        cy.get("#female").click().should('be.checked')

        cy.get("#male").should("not.be.checked")


    }

    checkbox()
    {
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    }

    uncheckcheckbox()
    {
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
    }
    selectCountry()
    {
        cy.get("#country").select("Japan");
    }
    selectColours()
    {
        cy.get("option[value='white']").scrollIntoView().click()
    }
    selectSortedList()
    {
        cy.get("#animals").scrollIntoView().select("Zebra")
    }
    

    
}
export default FormName ;