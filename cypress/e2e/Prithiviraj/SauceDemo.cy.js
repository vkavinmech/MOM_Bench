describe('Sauce Demo ', () => {
   
    it('navigate to saucedemo website',()=>{
        cy.visit('https://www.saucedemo.com')
        cy.get('input[data-test="username"]').type('standard_user');
        cy.get('input[data-test="password"]').type('secret_sauce');
        cy.get('input[data-test="login-button"]').click();
        cy.url().should('include', '/inventory.html');
        })

    it('Search for a product', () => {
        
        cy.get('.inventory_list').contains('Sauce Labs Backpack').click();
        cy.get('.inventory_details_name').should('contain', 'Sauce Labs Backpack');
    });

    it('Add product to cart', () => {
       
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_badge').should('contain', '1');
    });

    it('Calculate total amount in cart', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click();
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart.html');
        cy.get('.cart_item').should('have.length', 1);
        cy.get('.inventory_item_price').should('contain', '29.99');
        cy.get('#continue-shopping').click();
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click();
        cy.get('#first-name').type('kavin');
        cy.get('#last-name').type('kumar');
        cy.get('#postal-code').type('638502');
        cy.get('#continue').click();
        cy.get('.summary_total_label').should('contain','86.38')
        cy.get('#finish').click();
        cy.get('.complete-header').should('have.text','Thank you for your order!')
        cy.get('#back-to-products').click();
    });

    it('Logout', () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('[data-test="logout-sidebar-link"]').click();
        cy.url().should('eq', 'https://www.saucedemo.com/');
    });
});