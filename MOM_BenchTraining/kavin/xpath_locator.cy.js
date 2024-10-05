describe('Locator xpath ', () => {
    it('Should Enter the text using xpath', () => {
    cy.visit('https://www.google.com/');
    cy.wait(3000);
    cy.xpath("//textarea[@id='APjFqb']").type("Automation");
        });
     }); 