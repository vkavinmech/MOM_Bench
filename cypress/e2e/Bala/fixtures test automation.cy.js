describe("contact information", () => {
    it("login and contact validation", () => {
      cy.fixture('testautomation').then((data) => {
        cy.visit("https://practicetestautomation.com/practice-test-login/");
        
        data.forEach((userdata) => {
          
          cy.get("#username").type(userdata.Username);
          cy.get("#password").type(userdata.Password);
          cy.get("#submit").click();
  
          
          if (userdata.Username === "student" && userdata.Password === "Password123") {
            cy.get('.post-title')
              .should('have.text', userdata.expected);
  
            cy.get("a[href='https://practicetestautomation.com/contact/']")
              .should('be.visible').and('exist').click();
            
            cy.get("//h1[normalize-space()='Contact']")
              .should('have.text', userdata.expectedcontact);
  
            cy.get("#wpforms-161-field_0").should('be.visible').type(userdata.firstname);

            cy.get("#wpforms-161-field_0-last").should('be.visible').type(userdata.lastname);

            cy.get("#wpforms-161-field_1").should('be.visible').type(userdata.email);

            cy.get("#wpforms-161-field_2").should('be.visible').type(userdata.comment);
  
            cy.get("#wpforms-submit-161").should('be.enabled').click();
            cy.go('back');
            
            
            cy.xpath("//a[normalize-space()='Log out']").click();
          } 
          else {
            
            if (userdata.Username !== "student") {
              cy.get("#error")
                .should('have.text', userdata.expectedusernameerror);
            } 
            else if (userdata.Password !== "Password123") {
              cy.get("#error")
                .should('have.text', userdata.expectedpassworderror);
            }
          }
        })
      })
    })
  })
  