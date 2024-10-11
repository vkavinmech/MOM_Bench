describe('Navigate_URL 1', () => {
    it('Verify the URL title', () => {
      cy.visit('https://www.google.com')
      cy.wait(2000);
      cy.title().should('eq','Google')
    })
  })