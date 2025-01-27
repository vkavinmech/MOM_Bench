describe('Lockton',() =>{

before(()=>{
    cy.loginlock('preethi.s+sysadmin@auxosolutions.io','2000@Preethi')
    //cy.visit('http://lockton-qax.unqork.io/'); 
    //cy.wait(3000)
    //cy.get('#username').type('preethi.s+sysadmin@auxosolutions.io');
    //cy.get('#password').type('2000@Preethi');
    //cy.get("input[type='submit']").click();
    cy.visit('http://lockton-qax.unqork.io/app/dashboard');
    
})

    it('Selecting Client from Clients Screen', () => {
        cy.get('.lockton-logo > img').should('be.visible');
        cy.get("button[id='colBtnClients'] span[class='button-label ng-binding']").should('exist')
        cy.wait(2000)
        cy.get("button[id='colBtnClients'] span[class='button-label ng-binding']").should('exist').click()
        cy.wait(3000)
        cy.get("h1[class='m-0']").should('contain', 'Clients')
        cy.wait(4000)
        cy.get("#searchClient").type('Sershah')
        cy.wait(3000)
        cy.get(".jsgrid-grid-body").click()
        cy.wait(3000)


    })


})

    