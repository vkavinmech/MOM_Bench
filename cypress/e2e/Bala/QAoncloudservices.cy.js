////<reference type = "cypress"/>

describe("validating the QAoncloud page",()=>
{
    it("validating the url",()=>
    {
        cy.visit("https://www.qaoncloud.com/")
        cy.url().should('eq',"https://www.qaoncloud.com/").and('include',"qaoncloud.com/")
        cy.get("img[title='QAonCloud Logo']").should('be.visible').and('exist')
        cy.serviceslink().should('be.visible').and('exist').and('have.text',"Services")
        cy.get("a[href='/functional-testing-services']").click().should('be.visible').and('exist')
        cy.location('href').should('include',"functional-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/functional-testing-services")
        const expvalue = "Functional Testing"
        cy.get("a[href='/functional-testing-services']").then((value)=>
        {
            const actvalue=value.text()
            expect(actvalue).to.eq(expvalue)
        })
    })
})