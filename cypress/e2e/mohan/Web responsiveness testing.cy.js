describe("web",()=>{
    it('Tests on iphone', () => {
    cy.viewport('iphone-6'); 
    cy.visit('https://www.qaoncloud.com/contact-us');
    cy.get("img[alt='QAonCloud logo']").should("be.visible");
    cy.viewport('iphone-7'); 
    cy.reload();
    cy.get("img[alt='QAonCloud logo']").should("be.visible");
  });
  

it('Tests on samsung', () => {
    cy.viewport('samsung-s10'); 
    cy.visit('https://www.qaoncloud.com/contact-us');
    cy.get("img[alt='QAonCloud logo']").should("be.visible");
  
    cy.viewport('samsung-note9'); 
    cy.reload();
    cy.get("img[alt='QAonCloud logo']").should("be.visible");
  });
  it('Tests on mac', () => {
    cy.viewport('macbook-13'); 
    cy.visit('https://www.qaoncloud.com/contact-us');
    cy.get("img[alt='QAonCloud logo']").should("be.visible");
  
    cy.viewport('macbook-16'); 
    cy.reload();
    cy.get("img[alt='QAonCloud logo']").should("be.visible");
  });
  it('Checks layout ', () => {
    cy.viewport(360, 800); 
    cy.visit('https://www.qaoncloud.com/contact-us');
    cy.get("img[alt='QAonCloud logo']").should("be.visible");
    cy.viewport(1920, 1080);
    cy.reload();
    cy.get("img[alt='QAonCloud logo']").should("be.visible");
  
    })
    it("check in desicrew website",()=>{
      cy.viewport("ipad-mini");
      cy.visit("https://www.desicrew.in/");
      cy.xpath("(//img[@alt='DesiCrew Logo'])[1]").should("be.visible");
      cy.get("body").should("not.have.css","overflow-x","hidden");
      cy.viewport("iphone-se2");
      cy.reload();
      cy.xpath("(//img[@alt='DesiCrew Logo'])[1]").should("be.visible");
      cy.viewport(375,667);
      cy.reload();
      cy.xpath("(//img[@alt='DesiCrew Logo'])[1]").should("be.visible");
      cy.viewport(667,375);
      cy.reload();
      cy.xpath("(//img[@alt='DesiCrew Logo'])[1]").should("be.visible");
      cy.get(".nav-link[aria-current='page']").should("have.css","text-align","left");
      })
      it.only("test the webpage in cypress page",()=>{
        cy.viewport("iphone-4");
        cy.visit("https://www.cypress.io/");
        cy.get("h1[class='text-[32px] font-bold leading-[44px] md:text-[48px] md:leading-[64px]']").and("be.visible");
        cy.reload();
        cy.viewport("macbook-15");
        cy.get("h1[class='text-[32px] font-bold leading-[44px] md:text-[48px] md:leading-[64px]']").and("be.visible");
        cy.reload();
        cy.viewport("samsung-note9");
        cy.get("h1[class='text-[32px] font-bold leading-[44px] md:text-[48px] md:leading-[64px]']").and("be.visible");
        cy.reload();
        cy.viewport(250,600);
        cy.get("h1[class='text-[32px] font-bold leading-[44px] md:text-[48px] md:leading-[64px]']").and("be.visible");
      })
  
})