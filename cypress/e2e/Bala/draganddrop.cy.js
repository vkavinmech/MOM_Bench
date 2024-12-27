describe("drag and drop", () => {
    it("drag and drop test", () => {
      cy.visit("https://testautomationpractice.blogspot.com/");
      cy.get("#draggable p").drag("#droppable p", { force: true });
    });
  
    it("drag and drop 2", () => {
      cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
  
      
      cy.get("#box3").should('be.visible');
      cy.get("#box106").should('be.visible');
  
      
      cy.get("#box3").drag("#box106", { force: true });
  
    
      cy.get("#box5").should('be.visible');
      cy.get("#box101").should('be.visible');

      cy.get("#box5").drag("#box101", { force: true });
  
      cy.get("#box7").should('be.visible');
      cy.get("#box105").should('be.visible');
  
      cy.get("#box7").drag("#box105", { force: true });
  
      cy.get("#box2").should('be.visible');
      cy.get("#box103").should('be.visible');
  
      cy.get("#box2").drag("#box103", { force: true });

      cy.get("#box6").should('be.visible');
      cy.get("#box107").should('be.visible');

      cy.get("#box6").drag("#box107", { force: true });
    });
  });
  