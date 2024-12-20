describe("login with json data", () => {
    it("data driven", () => {  
        cy.visit("https://demo.guru99.com/test/newtours/index.php");
        
        cy.fixture('loginvalue.json').then((data) => {
            cy.get("input[name='userName']").type(data.userName);
            cy.get("input[name='password']").type(data.password);
            cy.get("input[value='Submit']").click();
            cy.get("tbody tr td h3").should('have.text', data.message);
        });
    });
});
