describe('CSS locator', () => {
    it('Verify CSS locator ', () => {

    cy.visit("https://www.flipkart.com/")

    cy.get("[name='q']").type("tops")//attributeb= value css locator 


    cy.get('[xmlns="http://www.w3.org/2000/svg"]').click() //attribute = value css locator
 })

   
      
      
  })