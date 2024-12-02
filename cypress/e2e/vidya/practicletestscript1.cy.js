describe("FabIndia Signup, Login, Search Product, and Product Listing Tests", () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught exception:', err);
            return false; // Prevent Cypress from failing the test
        });
    });

    beforeEach(() => {
        // Visit the FabIndia homepage before each test
        cy.visit("https://www.fabindia.com/");
    });

    it("Perform Signup/login", () => {
        cy.get("app-fab-login-slot > .dropdown").click();
        cy.get("#phone").type("8970769513");
        cy.get("#send-otp").click();
        cy.pause();
        cy.get(".login-signup-mobile-btn > .btn").click();
        cy.get("#email").type("vidyaabbedi@gmail.com");
        cy.get("#firstName").type("Vidyashree");
        cy.get("#lastName").type("Devadiga");
        cy.get(".login-signup-mobile-btn").click();
        cy.get("app-fab-login-slot > .dropdown").trigger("mouseover");
        cy.contains(" Profile ").should("be.visible");
    });

    it("Perform login functionality", () => {
        cy.get("app-fab-login-slot > .dropdown").click();
        cy.get("#phone").type("8970769513");
        cy.get("#send-otp").click();
        cy.pause();
        cy.get(".login-signup-mobile-btn > .btn").click();
        cy.get("app-fab-login-slot > .dropdown").trigger("mouseover");
        cy.contains(" Profile ").should("be.visible");
    });

    it.only("Add item to cart", () => {
        
        cy.get(".container > :nth-child(9) > :nth-child(1) > cx-generic-link.all > .all > p").click();
        cy.wait(6000);

        
        cy.visit("https://www.fabindia.com/tulsi-green-ashwagandh-tea-25-infusionbags-20147062")

        // Click 'Add to Cart' on the product page and verify item in cart
        cy.get(".add-to-cart-form > .btn").click();
        cy.get(".add-to-cart-form > .btn").click();
        cy.get(".submit_button_section_block > .btn").click()
    });

});
