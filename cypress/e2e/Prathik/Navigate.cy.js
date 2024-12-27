describe("Navigate back and forward",()=>{
    it("Go backward",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq',"Your Store")
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text',"Cameras");
        cy.go('back')
        cy.title().should('eq',"Your Store");

        cy.go('forward');
        cy.get("div[id='content'] h2").should('have.text',"Cameras");

        cy.go(-1);
        cy.title().should('eq',"Your Store")
        cy.wait(500)
        cy.go(1);
        cy.get("div[id='content'] h2").should('have.text',"Cameras");

        cy.reload();
        })
})