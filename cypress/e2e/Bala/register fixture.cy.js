describe("fixture",()=>
{
    it("regsitering an account",()=>
    {
        cy.fixture(register).then((registeraccount)=>
        {
            cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/register")
            cy.get("#input-firstname").should('be.visible').and('exist').click()
            .type(registeraccount.firstname)
            cy.get("#input-lastname").should('be.visible').and('exist').click()
            .type(registeraccount.lastname)
            cy.get("#input-email").should('be.visible').and('exist').click()
            .type(registeraccount.email)
            cy.get("#input-telephone").should('be.visible').and('exist').click()
            .type(registeraccount.telephone)
            cy.get("#input-password").should('be.visible').and('exist').click()
            .type(registeraccount.password)
            cy.get("#input-confirm").should('be.visible').and('exist').click()
            .type(registeraccount.confirmpassword)
            cy.get("label[for='input-agree']").should('be.visible').and('be.enabled').click()
            cy.get("input[value='Continue']").click()
            cy.get(".page-title.my-3").should('have.text',registeraccount.expectedresult)

        })
    })
    it("editing an account information",()=>
    {
        cy.fixture(login).then((accountchange)=>{

        
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
        cy.get("//a[normalize-space()='Edit your account information']").should('be.visible')
        .click()
        cy.get(".page-title.h3.mb-3").should('have.text',accountchange.expected)
        cy.get("#input-firstname").click().clear().type(accountchange.firstname)
        cy.get("#input-lastname").click().clear().type(accountchange.lastname)
        cy.get("#input-email").click().clear().type(accountchange.email)
        cy.get("#input-telephone").click().clear().type(accountchange.telephone)
        cy.get("input[value='Continue']").should('be.enabled').click()
        cy.get(".alert.alert-success.alert-dismissible").should('have.text',accountchange.expectedalert)
        cy.get("//a[normalize-space()='Change your password']").should('be.visible')
        .click()
        cy.get(".page-title.h3.mb-3").should('have.text',accountchange.passwordresult)
        cy.get("#input-password").click().type(accountchange.newpassword)
        cy.get("#input-confirm").click().type(accountchange.newconfirmpassword)
        cy.get("input[value='Continue']").should('be.enabled').click()
        cy.get(".alert.alert-success.alert-dismissible").should("have.text",accountchange.passwordalert)

    })
    })
    it("changing the adress book",()=>
    {
        cy.fixture(modification).then((adressbook)=>
        {
            cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
            cy.xpath("//a[normalize-space()='Modify your address book entries']").click()
            cy.get("//a[normalize-space()='Modify your address book entries']").should('have.text',adressbook.bookresult)
            cy.get("a[class='btn btn-primary']").click()
            cy.get("#input-firstname").should('be.visible').and('exist').click()
            .type(registeraccount.adressbook.firstname)
            cy.get("#input-lastname").should('be.visible').and('exist').click()
            .type(registeraccount.adressbook.lastname)
            cy.get("#input-company").should('be.visible').and('exist').click()
            .type(registeraccount.adressbook.company)
            cy.get("#input-address-1").should('be.visible').and('exist').click()
            .type(registeraccount.adressbook.adress1)
            cy.get("#input-address-2").should('be.visible').and('exist').click()
            .type(registeraccount.adressbook.adress2)
            cy.get("#input-city").should('be.visible').and('exist').click()
            .type(registeraccount.adressbook.city)
            cy.get("#input-postcode").should('be.visible').and('exist').click()
            .type(registeraccount.adressbook.postcode)
            cy.get("#input-country").click()

        })
    })
})