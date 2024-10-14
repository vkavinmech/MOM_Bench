describe("practice test script for asseration", ()=>{
    it("implicit asseration", ()=>{
        cy.visit("https://practice.expandtesting.com/login");

        //positive test script
        cy.url().should("include", "practice")
                .and("eq", "https://practice.expandtesting.com/login")
                .and("contain", "testing")

        //negative test script

                cy.url().should("not.include", "login1")
                .and("not.eq", "login1")
                .and("not.contains", "login1");

        // Verify the title of the page

                cy.title().should("include", "Automation") 
                .and("eq", "Test Login Page for Automation Testing Practice") 
                .and("contains", "Practice"); 

        // Simplifying the above checks into one assertion
        cy.get('.navbar-brand').should("be.visible")
        .and("exist");

        //negative testscript for usename and password field
        cy.get("[name='username']").type("practice1"); 
        cy.get("[name='password']").type("SuperSecretPassword!");
        cy.get("[class='btn btn-bg btn-primary d-block w-100']").click()
        cy.url().should('include','/login');
        cy.contains("Your username is invalid!").should('be.visible');

        // Enter a username and password into the username and password input field

        cy.get("[name='username']").type("practice"); 
        cy.get("[name='password']").type("SuperSecretPassword!");
        cy.get("[class='btn btn-bg btn-primary d-block w-100']").click()
        
    })

    it("Explicit assertion", () => {

        cy.visit("https://practice.expandtesting.com/login");
        cy.get("input[name='username']").type("practice");
        cy.get("[name='password']").type("SuperSecretPassword!");
        cy.get("button[type='submit']").click();
        
        let expText = "Welcome to the Secure Area. When you are done click logout below.";
        
        
        cy.get("[class='subheader']").then((x) => {
            
            let actText = x.text();

        // Check if the actual name equals the expected name
            expect(actText).to.equal(expText);

            // negative test script should fail

           // expect(actText).to.not.equal(expText); 

            //DDD asserations

            assert.equal(actText, expText);

            //negative DDD asserations
            //assert.notEqual(actText, expText);

        })    

    })

})