describe('child tabs demo',()=>{

    it('verify href attribute ',()=>{
        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#opentab').should('have.attr','href').and('include','/courses')
    
    })
    
    it('delete the target attribute ',()=>{
        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','/courses')
    
    })
    
    it.only('without deleting the target attribute ',()=>{
        cy.visit("https://www.letskodeit.com/practice")
        cy.get('#opentab').then(newTab=>{
            const hrefTab = newTab.prop('href')
            cy.visit(hrefTab)
            cy.get('input[id="search"]').type('selenium')
            cy.get('button[class="find-course search-course"]').click()
            cy.go('back');
    
        })
    
    })
    
    
    })