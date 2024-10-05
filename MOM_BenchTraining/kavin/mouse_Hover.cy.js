import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')
describe('Should Handle Mouse Operations', () => {
    it('Should perform the mousehover', () => {
        cy.visit("https://stqatools.com/demo/MouseHover.php");
        cy.get("body > nav:nth-child(2) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > div:nth-child(2) > a:nth-child(1)").should('not.be.visible')
        cy.get("body > nav:nth-child(2) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)").trigger('mouseover').click();
        cy.get(".dropdown-item[href='Alerts.php']")
        .should('be.visible')
    });
    it('Should perform the Rightclick', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        //approach 1
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible');
        /*approach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
        */
    });
    it('Should perform the double click', () => {
        cy.visit("http://www.mouseprogram.com/double-click-game.html");
        cy.get("img[name='A']").trigger('dblclick')
    });
    it('Should perform the Drag and Drop', () => {
        cy.visit("https://practice.expandtesting.com/drag-and-drop-circles");
        cy.get('.red').should('be.visible')
        cy.get('#target').should('be.visible')
        cy.wait(3000);
        cy.get('.red').drag('#target');
    });
    it('Should perform the scrolling', () => {
        cy.visit("https://htmlburger.com/blog/horizontal-scrolling-website-examples/");
        cy.get("body > div:nth-child(2) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > h4:nth-child(76)").scrollIntoView({duration:2000});
        cy.get("body > div:nth-child(2) > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > h4:nth-child(10)").scrollIntoView({duration:2000});
        cy.wait(3000);
        cy.get('.gform_footer').scrollIntoView({duration:2000});
    });
});