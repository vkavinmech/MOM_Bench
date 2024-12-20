describe("Navigation",()=>
{
    it("Navigation",()=>
    {
        cy.visit("https://www.qaoncloud.com/");
        cy.get(".elementor-button-text").click();
        cy.go("back");
        cy.url().should("eq","https://www.qaoncloud.com/");
        cy.go("forward");
        cy.url().should("eq","https://www.qaoncloud.com/contact-us");
        cy.xpath("//h6[normalize-space()='Address']").then ( (txt)=>{
            const value=txt.text();
            cy.log(value);
            
        })
    })
})