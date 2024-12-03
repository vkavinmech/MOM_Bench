  describe("css selector",()=>
    {
        it("Css selector using class",()=>
            {
                cy.visit("https://www.google.co.in/");
                cy.title().should("eq","Google");
               cy.get('[alt="Google"]').should("be.visible");
               cy.get(".gNO89b").should("be.enabled");
               cy.get(".gb_W").contains("Gmail");
               cy.get("a.gb_W").contains("Images");
               cy.get("a.MV3Tnb").contains("About");
               cy.get('[name="btnI"]').should("be.enabled");
               cy.get("#APjFqb").type("Qaoncloud");
              
              

        })
        
})