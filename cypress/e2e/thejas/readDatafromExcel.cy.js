import FirstPage from "../PageObjects/demoguru"

describe('convert data to json ',()=>{

it('read data from excel ',()=>{
    cy.parseXlsx('cypress/fixtures/Book1.xlsx').then((jsonData)=>{
        const rowLength = Cypress.$(jsonData[0].data).length
        cy.log(rowLength)
        for(let i=1; i< rowLength; i++){
            let value = jsonData[0].data[i]
            const fp = new FirstPage()
            fp.visit()
           
            cy.get("input[name=userName]").type(value[0])
            cy.get("input[name=password]").type(value[1])
            cy.get("input[name=submit]").click()
            cy.get('body').then(($body)=>{
                let length =$body.find('input[name=submit]').length
                cy.log(length)
                if(length == 0){
                    cy.contains('Login Successfully').should('be.visible')

                }else{
                    
                    cy.get('tbody tr td span').should('contain','Enter your userName and password correct')
                }
            })
        }
    })

})
})