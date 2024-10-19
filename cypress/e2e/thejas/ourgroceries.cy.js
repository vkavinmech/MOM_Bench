describe('My suite ',()=>{

    it("automate ourgroceries app",()=>{
        cy.visit("https://www.ourgroceries.com/")
        cy.get('.page-header > [href="/sign-in"]').click()
        cy.get('#emailAddress').type('thejaswaroopan@qaoncloud.com')
        cy.get("button[value='email-address']").click()
        cy.get('#password').type('qa12345test')
        cy.get("button[value='sign-in']").click()
        cy.get("div[id='listDiv'] div:nth-child(2) div:nth-child(1)").click()
        
        cy.get(".item.command-item.add-an-item.list-row").then(($btn)=>{
            const buttonText = $btn.text().trim();
            if(buttonText.includes("The shopping list is empty. Add an item...")){
                cy.get("button[title='Add an item to the list (hotkey: A)']").click()
                cy.get("#addItemName").type('egg')
                cy.get("#addItemMasterList  div.add-item-row.dialog-box-select-non-header").each(($el) => {
                    cy.wrap($el).invoke('text').then((text) => {
                      if (text.trim() === 'egg whites') {
                        cy.wrap($el).click();
                      }
                    });
                  });
                if(cy.get(".value:nth-child(1)").should('have.text','egg whites')){
                   cy.get("button[title='Add an item to the list (hotkey: A)']").click()
                   cy.get("#addItemName").type('milk')
                   cy.get("#addItemMasterList div.add-item-row.dialog-box-select-non-header").each(($el,index,$list)=>{
                    cy.log($el.text())
                    if($el.text() === 'almond milk'){
                    cy.wrap($el).click()
                    }
                   })
                   cy.get("body > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").should('have.text','almond milk')
                }// inner if statement 
            }// if statement
            else
            {
                
            cy.get("body > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
            cy.get("div[class='item list-item list-row draggable'] div[class='value']").click({ multiple: true })
        
            cy.get('#listDiv > :nth-child(5)').click()
            cy.get('[aria-describedby="deleteAllCrossedOffItemsDialog"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .danger-button').click()
           // cy.get("div[class='item command-item list-row']").click() delete all items element 
            cy.get('.item.command-item.add-an-item.list-row').click()
            cy.get(".masterItemDelete").click({ multiple: true })
            //cy.get(".masterItemDelete").click()

            cy.get(':nth-child(1) > .masterItemDelete').click()
            // cy.get(':nth-child(2) > .value').click()
            // cy.get("body > div:nth-child(19) > div:nth-child(3) > div:nth-child(1) > button:nth-child(2)").click({force: true})
            // cy.get('.item').click({ multiple: true })
            cy.get("#addItemName").type('egg')
            cy.get("#addItemMasterList  div.add-item-row.dialog-box-select-non-header").each(($el,index,$list)=>{
                cy.log($el.text())
                if($el.text() === 'egg whites'){
                cy.wrap($el).click()
                }
            })
            if(cy.get(".value:nth-child(1)").should('have.text','egg whites')){
               cy.get("button[title='Add an item to the list (hotkey: A)']").click()
               cy.get("#addItemName").type('milk')
               cy.get("#addItemMasterList div.add-item-row.dialog-box-select-non-header").each(($el,index,$list)=>{
                cy.log($el.text())
                if($el.text() === 'almond milk'){
                cy.wrap($el).click()
                }
               })
               cy.get("body > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").should('have.text','almond milk')
            }
        }
        })        
    })
})    