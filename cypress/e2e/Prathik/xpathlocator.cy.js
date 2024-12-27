
import 'cypress-xpath'
describe('XPathLocators',()=>{
    it('find no of products',()=>{
        cy.visit("https://www.flipkart.com/")
        cy.xpath("//div[class='tLbyDf']/div").should('jave.length',7)
    }
    )
})
