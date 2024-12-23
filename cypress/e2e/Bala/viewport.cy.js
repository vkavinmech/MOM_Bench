
describe("Web Responsiveness", () => {
    it("Check the viewport in mobile devices", () => {
      
      cy.viewport("iphone-8");
      cy.visit("https://www.amazon.com/");
      cy.get(".hm-icon.nav-sprite").click();
  
      
      cy.xpath("(//div[normalize-space()='Amazon Music'])[1]", { timeout: 10000 })
        
        .click();
  
      
      cy.viewport("iphone-x");
      cy.visit("https://www.amazon.com/");
      cy.get('[href="/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice"]', { timeout: 10000 })
      .should("be.visible")
      .click({ force: true });
    
  
      
      cy.url().should(
        'include',
        "/help/customer/"
      );
  
      
      const expectedText = "Customer Service";
      cy.get("div[class='cs-title'] a")
        .should('exist')
        .then((img) => {
          const actualText = img.text(); 
          expect(actualText).to.equal(expectedText);
        });
        cy.viewport("iphone-x","landscape");
      cy.visit("https://www.amazon.com/");
      
      
    });
  });
  