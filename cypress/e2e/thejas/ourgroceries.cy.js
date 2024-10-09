describe('My suite ',()=>{

    it("automate ourgroceries app",()=>{
        cy.visit("https://www.ourgroceries.com/")
        cy.get('.page-header > [href="/sign-in"]').click()
        cy.get('#emailAddress').type('thejaswaroopan@qaoncloud.com')
        cy.get('.labelTextFieldForm > button').click()
        cy.get('#password').type('qa12345test')
        cy.get(':nth-child(4) > button').click()
        cy.get(':nth-child(2) > .value').click()
        
            cy.get(".item.command-item.add-an-item.list-row").should('have.text','The shopping list is empty. Add an item...')
            cy.get('.item').click()
            cy.get("#addItemName").type('egg')
            
            cy.get("div:nth-child(1) div:nth-child(1) div:nth-child(1) b:nth-child(1)").click()
            cy.get(".value").should('have.text','eggs')
        
            cy.get("button[title='Add an item to the list (hotkey: A)']").click()
            cy.get("#addItemName").type('milk')
            cy.get("dialog[id='addItemDialog'] div:nth-child(1) div:nth-child(1) div:nth-child(1)").click()
            cy.get(':nth-child(3) > .value-note').should('have.text','milk')
        
    })
})    