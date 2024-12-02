


describe("Final test",function () 
{
    it("Google",()=>
    {
        cy.visit("https://www.google.co.in/");
         cy.get('[id="APjFqb"]').type("desicrew");
         cy.text().should("eq","Desicrew");
         })
    it("Youtube",()=>
    {
        cy.visit("https://www.youtube.com/");
        cy.get('[name="search_query"]').type("cypres tutorial");
        cy.get('[id="search-icon-legacy"]').click();
    })
    it("QAoncloud",()=>{
        cy.visit("https://www.qaoncloud.com/");
        cy.get('[class="elementor-button-text"]').click();
        
    })
    
})