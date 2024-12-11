describe("My Test Suite", () => {
    it("Data Driven Test", () => {
      cy.fixture('orangehrmmultiple').then((data) => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        data.forEach((userdata) => {
          
          cy.get("input[placeholder='Username']").type(userdata.username);
          cy.get("input[placeholder='Password']").type(userdata.password);
          cy.get("button[type='submit']").click();
  
         
          if (userdata.username === "Admin" && userdata.password === "admin123") {
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
              .should('have.text', userdata.expected);
            
            
            cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
            cy.xpath("//a[normalize-space()='Logout']").click();
          } 
          
          else {
            cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
              .should('have.text', userdata.expected);  
          }
        });
      });
    });
  
    describe("Fixtures", () => {
      let userdata;
      let leavedata;
  
      before(() => {
       
        cy.fixture('orangehrm').then((data) => {
          userdata = data;
        });
        
        
        cy.fixture('orangehrmleave').then((data) => {
          leavedata = data;
        });
      });
  
      it("Fixture Demo", () => {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();
  
      
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
          .should('have.text', userdata.expected);
  
       
        cy.get("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Leave']")
          .should('be.visible').click();
  
       
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
          .should('have.text', leavedata.expected);
  
       
        cy.get("div[class='oxd-table-filter'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) input:nth-child(1)")
          .click().type(leavedata.fromdate);
  
       
        cy.xpath("//div[@class='oxd-form-row']//div[2]//div[1]//div[2]//div[1]//div[1]//input[1]")
          .click().type(leavedata.todate);
  
       
        cy.get("input[placeholder='Type for hints...']")
          .should('be.visible').click().type(leavedata.employeename);
      });
    });
  });
  