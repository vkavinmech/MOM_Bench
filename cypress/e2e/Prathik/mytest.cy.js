describe('My First Test', () => 
  {
    it('verify title positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq','OrangeHRM')
    })
    it('verfy title negative', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM123')
  })
  }
  )