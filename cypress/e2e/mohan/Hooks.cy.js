describe("Hooks",()=>{
    after("Sign out",()=>{
        cy.visit("https://practicetestautomation.com/logged-in-successfully/");
        cy.get(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click();
        cy.url().should("eq","https://practicetestautomation.com/practice-test-login/");
    })
        it("Page",()=>{
            cy.visit("https://practicetestautomation.com/practice-test-login/");
            cy.get("#username").type("student");
             cy.get("#password").type("Password123");
             cy.xpath("//button[@id='submit']").click();
             cy.get("a[href='https://practicetestautomation.com/blog/']").click();
             cy.get("a[href='https://practicetestautomation.com/blog/']").should("be.visible");
             cy.go("back");
             cy.get("a[href='https://practicetestautomation.com/practice/']").click();
             cy.get("a[href='https://practicetestautomation.com/practice-test-exceptions/']").click();
             cy.xpath("(//input[@value='Pizza'])[1]").should("be.disabled");
           //  cy.get("#add_btn").click();
            // cy.get("#confirmation").should("be.visible");//confirmation


        })
    
    })
    