/// <reference types="cypress" />

describe('Button Click Tests', () => {
    beforeEach(() => {

        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            if (err.message.includes('Unexpected token') || err.message.includes('Modal is transitioning')) {
              return false;
            }
          })

      cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html');
    });
  
    it('should trigger a modal when "CLICK ME!" button is clicked', () => {
      
      cy.contains('CLICK ME!').click();
      
     
      cy.get('#myModalClick').should('be.visible');
      
      cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-header > .modal-title').should("have.text", "Congratulations!")

      cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn').click()
      
      cy.get('#myModalClick > .modal-dialog > .modal-content > .modal-footer > .btn').should('not.be.visible');
    });
  
    it('Java script click', () => {
      
      cy.get('#button2').click();
      
     
      cy.get('#button2').should('be.visible');

      cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-header > .modal-title').should("have.text", "It’s that Easy!!  Well I think it is.....")
      
      
      cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();
  
     
      cy.get('#myModalJSClick > .modal-dialog > .modal-content > .modal-footer > .btn').should('not.be.visible');
    });
  
    it('Action Move and click', () => {
      
      cy.get('#button3').click();
      
     
      cy.get('#button3').should('be.visible');

      cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-header > .modal-title').should("have.text", "Well done! the Action Move & Click can become very useful!")
      
      
      cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').click();
  
      
      cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').should('not.be.visible');
    });
  });
  