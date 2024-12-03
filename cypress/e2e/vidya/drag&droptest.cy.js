describe('Dragtest', () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false; 
        })
    })

    it('should drag and drop', () => {
        cy.visit('https://demo.automationtesting.in/Static.html');
        
        // Use the drag command provided by the plugin
        cy.get('#angular').drag('#droparea');
        cy.get('#mongo').drag('#droparea');
        cy.get('#node').drag('#droparea');
        cy.get('#angular').drag('#droparea');
    })
})
