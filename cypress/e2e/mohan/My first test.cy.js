


describe("First test case",()=>
{
it("url",()=>{
    cy.visit("https://www.youtube.com");
    cy.title();
})
it("url1",()=>
{
    cy.visit("https://www.google.com");
    cy.title().should("eq","Google")
})
it("url3",()=>
{
    cy.visit("https://www.qaoncloud.com/");
    cy.title().should("eq","QAonCloud");
})
})
