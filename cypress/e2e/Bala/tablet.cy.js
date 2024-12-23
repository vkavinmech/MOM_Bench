describe("Tablets Mode", () => {
    // Validate iPad viewport
    it("Validate the viewport on iPad", () => {
      // iPad Portrait Mode
      cy.viewport(768, 1024);
      cy.visit("https://www.amazon.com/");
      cy.get(".hm-icon.nav-sprite", { timeout: 10000 })
        .click();
      cy.get(".hmenu-visible", { timeout: 10000 }) // Ensure menu is expanded
        .should("be.visible");
      cy.xpath("(//div[normalize-space()='Amazon Music'])[1]", { timeout: 10000 })
        .click();
  
      // iPad Landscape Mode
      cy.viewport(768, 1024, "landscape");
      cy.visit("https://www.amazon.com/");
      cy.get(".hm-icon.nav-sprite", { timeout: 10000 })
        .should("be.visible")
        .click();
      cy.get(".hmenu-visible", { timeout: 10000 })
        .should("be.visible");
      cy.xpath("(//div[normalize-space()='Amazon Music'])[1]", { timeout: 10000 })

        .click();
    });
  
    // Validate iPad Pro viewport
    it("Validate the viewport on iPad Pro", () => {
      // iPad Pro Portrait Mode
      cy.viewport(1024, 1366);
      cy.visit("https://www.amazon.com/");
      cy.xpath("//i[@class='hm-icon nav-sprite']", { timeout: 10000 })
        .should("be.visible")
        .click({ force: true })
      
      cy.xpath("(//div[normalize-space()='Amazon Music'])[1]", { timeout: 10000 })
        .click();
  
      // iPad Pro Landscape Mode
      cy.viewport(1024, 1366, "landscape");
      cy.visit("https://www.amazon.com/");
      cy.xpath("//i[@class='hm-icon nav-sprite']", { timeout: 10000 })

        .click({ force: true })
      
      cy.xpath("(//div[normalize-space()='Amazon Music'])[1]", { timeout: 10000 })
        .click({ force: true })
    });
  });
  