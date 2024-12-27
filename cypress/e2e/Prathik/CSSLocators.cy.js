describe('CSSLocators',()=>{
    it("csslocators",()=>{
        cy.visit("https://www.flipkart.com/")
        cy.get(".Pke_EE").type("T-shirt")
        cy.get("._2iLD__").click()
        cy.get(".BUOuZu").contains("T-shirt")
    })
})