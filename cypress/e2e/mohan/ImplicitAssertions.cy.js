describe("Assertion",()=>{
    it("Assert",()=>
    {
        cy.visit("https://www.google.com/");
        cy.url().should("eq","https://www.google.com/").should("contain","google").should("include","com");
        cy.url().and("eq","https://www.google.com/").and("contain","google").and("include","com");
        cy.title().and("not.eq","gmail");
        cy.title().should("contain","Google");
         cy.xpath("//div");
      


    })
})