describe("Assertions", () => {
    
    // Define the first test case for implicit assertions
    it("Implicit assertions", () => {
        
        // Visit the login page of the OrangeHRM demo site
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Implicit assertions on the current URL
        // Assert that the URL includes "orangehrmlive"
        cy.url().should("include", "orangehrmlive");
        
        // Assert that the URL equals the specified full URL
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        // Assert that the URL contains the string "orangehrm"
        cy.url().should("contains", "orangehrm");

        // Simplifying the previous three assertions into a single chain
        cy.url().should("include", "orangehrmlive")
                .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                .should("contains", "orangehrm");

        // Another way to simplify using the 'and' keyword for chaining assertions
        cy.url().should("include", "orangehrmlive")
                .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
                .and("contains", "orangehrm");

        // Negative assertions to verify that the URL does not contain "123"
        cy.url().should("not.include", "123")
                .and("not.eq", "123")
                .and("not.contains", "123");

        // Verify the title of the page
        cy.title().should("include", "Orange") // Assert title includes "Orange"
                .and("eq", "OrangeHRM") // Assert title equals "OrangeHRM"
                .and("contains", "HRM"); // Assert title contains "HRM"

        // Check if the logo is visible on the page
        cy.get('.orangehrm-login-branding > img').should("be.visible"); // Assert logo is visible
        cy.get('.orangehrm-login-branding > img').should("exist"); // Assert logo exists in the DOM

        // Simplifying the above checks into one assertion
        cy.get('.orangehrm-login-branding > img').should("be.visible")
                .and("exist");

        

        // Enter a username into the username input field
        cy.get("[name='username']").type("Admin"); // Provide value into input box
        
        // Assert that the username input field has the correct value
        cy.get("[name='username']").should("have.value", "Admin"); // Verify the value
    });

    it("Explicit assertion", () => {

        // Step 1: Visit the login page of the OrangeHRM application
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Step 2: Input the username "Admin" in the username field
        cy.get("input[placeholder='Username']").type("Admin");

        // Step 3: Input the password "admin123" in the password field
        cy.get("input[placeholder='Password']").type("admin123");

        // Step 4: Click the submit button to log in
        cy.get("button[type='submit']").click();

        // Expected name after login
        cy.get(".oxd-userdropdown-name").then((x) => {
        let expName = x.text();
        
        // Step 5: Get the user's name from the dropdown
        cy.get(".oxd-userdropdown-name").then((x) => {
            // Get the actual name displayed in the dropdown
            let actName = x.text();

            // BBD (Behavior-Driven Development) assertions
            // Check if the actual name equals the expected name
            expect(actName).to.equal(expName);

            // Check if the actual name does not equal the expected name (should fail)
           // expect(actName).to.not.equal(expName);

            // TDD (Test-Driven Development) assertions
            // Assert that the actual name equals the expected name
            assert.equal(actName, expName);

            // Assert that the actual name does not equal the expected name (should fail)
           // assert.notEqual(actName, expName);
        });
    });
    });
});