it("Third test",function()
{
    cy.visit("https://www.desicrew.com/");
    cy.title();
})
it("Fourth test",()=>
{
    cy.visit("https://www.qaoncloud.com/");
    cy.title();
})
it("Fifth test",()=>{
    cy.visit("https://www.google.com");
    cy.title();
})