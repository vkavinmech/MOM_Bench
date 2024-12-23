describe("viewport",()=>
{
    it("viewport with laptop 13 inch",()=>
    {
        cy.viewport( 1280 ,800)
        cy.visit("https://www.amazon.com/");
        cy.visit("https://www.amazon.com/");
      cy.xpath("//i[@class='hm-icon nav-sprite']", { timeout: 10000 })
        .should("be.visible")
        .click({ force: true })
      
      cy.xpath("(//div[normalize-space()='Amazon Music'])[1]", { timeout: 10000 })
        .click();
    })
    it("viewport with laptop 15 inch",()=>
    {
        cy.viewport( 1440,900)
        cy.visit("https://www.amazon.com/");
        cy.visit("https://www.amazon.com/");
      cy.xpath("//i[@class='hm-icon nav-sprite']", { timeout: 10000 })
        .should("be.visible")
        .click({ force: true })
      
      cy.xpath("(//div[normalize-space()='Amazon Music'])[1]", { timeout: 10000 })
        .click();
    })
    })
