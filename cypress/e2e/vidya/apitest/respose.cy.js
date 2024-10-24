context("Page Resposive Test", () =>{
 it("Twitter Login", () =>{
    cy.visit("https://x.com/")
    cy.get('[href="/login"]').click({ force: true })
    cy.get('input[name ="text"]').should("be.visible")
 })

 it("Twitter Login page using iphone-x", () =>{

    cy.viewport('iphone-6')   
    cy.visit("https://x.com/")
    cy.get('[href="/login"]').click({ force: true })
    cy.get('input[name ="text"]').should("be.visible")


 })

 it("Twitter Login page using iphone-3", () =>{

    cy.viewport('iphone-3')   
    cy.visit("https://x.com/")
    cy.get('[href="/login"]').click({ force: true })
    cy.get('input[name ="text"]').should("be.visible")


 })

 it("Twitter Login page using Macbook 13", () =>{

    cy.viewport('macbook-13')   
    cy.visit("https://x.com/")
    cy.get('[href="/login"]').click({ force: true })
    cy.get('input[name ="text"]').should("be.visible")


 })

})