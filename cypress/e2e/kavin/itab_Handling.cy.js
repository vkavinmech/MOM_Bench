describe('Should Handle the tabs', () => {

    it('Should remove target attribute', () => {

    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get('.example >a').invoke('removeAttr','target').click()
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    cy.wait(2000);
    cy.go('back')
    cy.url().should('contain','the-internet.herokuapp.com')
});
    it('Should perform on inside get method', () => {

    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.get('.example >a').then((e)=>{
        let url=e.prop('href');
        cy.visit(url);
    })
    cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
    cy.wait(2000);
    cy.go('back')
    cy.url().should('contain','the-internet.herokuapp.com')
});
});