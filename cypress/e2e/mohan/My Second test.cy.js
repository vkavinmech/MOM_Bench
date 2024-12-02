describe('perform the test cases', () => {
  it('get the title', () => {
    cy.visit('https://www.google.com');
    cy.title().should('eq','Google');
    
  })
  it('get the title', () => {
    cy.visit('https://www.google.com');
    cy.url().should('eq','https://www.google.com/');
    
  })
  
})