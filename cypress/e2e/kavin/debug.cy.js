describe('Debug and pause', () => {
    it('Should perform debug', () => {
        cy.visit('https://automationintesting.online/#/');
        cy.wait(2000);
        cy.get("#name").type("DemoUser");
        cy.get("#email").type("demo@gmail.com");
        cy.get("#phone").type("9876543210");
        cy.get("#subject").type("Cypress");
        cy.get("#description").type("This is for Automation Testing using cypress");
        cy.wait(2000);
        cy.get("#submitContact").click().debug();
        cy.pause();
        cy.get(".contact > :nth-child(2) > div > :nth-child(2)").should('be.visible');
    });
    it('Should perform debug in orangehrm', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(2000);
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin12");
        cy.get("button[type='submit']").click().debug();
        cy.wait(2000);
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.pause();
        cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").should('have.text','PIM');
    });
});