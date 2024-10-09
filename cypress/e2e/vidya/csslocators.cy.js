describe('CSSLocators', ()=>{

it("CSSLocator", () =>{


  cy.visit("www.meesho.com")

  cy.get(".sc-iqPaeV > .sc-eDvSVe").type("T-shirts for kids")
  cy.get(".search-results > .sc-ftTHYK > :nth-child(1) > .sc-eDvSVe").click()
  
})


})