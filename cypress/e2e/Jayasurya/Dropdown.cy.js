describe('Select the Dropdown', () => {
    it('Should Verify the Dropdown selection', () => {
    cy.visit("https://artoftesting.com/samplesiteforselenium");
    cy.get('#testingDropdown').select('Manual Testing').should('have.value','Manual')
});
it('Should Verify the Dropdown to enter the text', () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type('Italy').type('{enter}')

});
it('Should Verify the Dropdown dynamic', () => {
    cy.visit("https://www.wikipedia.org/");
    cy.get('#searchInput').type('Delhi')
    cy.get('.suggestion-title').contains('Delhi University').click({force: true});
});
it.only('Should Verify the Dropdown dynamic', () => {
    cy.visit("https://www.google.com/");
    cy.xpath("//textarea[@id='APjFqb']").type('cypress automation')
    cy.wait(3000)
    cy.get('div.wM6W7d>span').should('have.length',13)

    cy.get('div.wM6W7d>span').each(($el,index,$list) =>{
        if($el.text()=='cypress automation'){
            cy.wrap($el).click()
        }
        cy.get('#APjFqb').should('have.value','cypress automation')   // verify all cypress automation in dropdown
    })
});
});