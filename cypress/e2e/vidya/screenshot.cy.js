describe("Test suite for capaturing screenshot", () => {

    it ("Capaturing screenshot", () => {

        cy.visit("https://demo.opencart.com/")
      /*  cy.screenshot("homepage")
        cy.wait(5000)
        cy.get("#logo").screenshot("logo")*/

        cy.get("a[href='https://demo.opencart.com/en-gb/catalog/cameras']").click()
        cy.get("div[id='content'] h2").should("have.text", "Apple")
    })
})