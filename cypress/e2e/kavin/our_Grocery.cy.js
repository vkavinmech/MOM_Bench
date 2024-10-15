describe('Our Groceries Automation', () => {
    beforeEach(() => {
        cy.visit('https://www.ourgroceries.com/');
    });

    it('should navigate to User Guide', () => {
        cy.get("header[class='page-header'] a:nth-child(3)").click();
        cy.url().should('include', '/user-guide'); 
        cy.get('.page-header-branding > img').should("be.visible");
    });

    it('should navigate to Get Groceries and download', () => {
        cy.get(".page-header-link.button").click();
        cy.url().should('include', '/download'); 
        cy.get("h2").each(($row) => {
            cy.log($row.text()); 
        })
    });

    it('should navigate to FAQ', () => {
        cy.get('.page-header > [href="/faq"]').click();
        cy.url().should('include', '/faq'); 
        cy.contains('Frequently Asked Questions'); 
        cy.get(".table-of-contents").each( ($row, index, $rows)=>{
            cy.log($row.text());
        });
    });

    it('should navigate to Sign up', () => {
        cy.get('.page-header > [href="/sign-in"]').click();
        cy.get("#emailAddress").type("demotesting@gmail.com")
        cy.get('.labelTextFieldForm > button').click();
        cy.get("div[class='main-content sign-in-page sign-in-password-existing-account form-page'] h1")
        .should('have.text', 'Welcome Back!');
    });

    it('should navigate to Sign in', () => {
        cy.get('.page-header > [href="/sign-in"]').click();
        cy.get("#emailAddress").type("demotesting@gmail.com")
        cy.get('.labelTextFieldForm > button').click();
        cy.get("#password").type("demotest@123")
        cy.get("button[value='sign-in']").click();

        cy.get("label[for='user-menu-is-open']").click()
        cy.get('.fa-user-circle').should('be.visible');
        //sign out
        cy.get("div[class='user-menu-container'] a:nth-child(3)").click();
    });

    it('should verify the shopping list', () => {
        cy.get('.page-header > [href="/sign-in"]').click();
        cy.get("#emailAddress").type("demotesting@gmail.com")
        cy.get('.labelTextFieldForm > button').click();
        cy.get("#password").type("demotest@123")
        cy.get("button[value='sign-in']").click();

        cy.url().should('contain','/your-lists');
        
        cy.get("body > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1)")
        .should('have.text','Biscuit');
    });

    it('should navigate to Overview and check for "Shop Merch!"', () => {
        cy.get("a[href='https://www.zazzle.com/store/ourgroceries']").invoke('removeAttr','target').click()
        cy.url().should('include', '/ourgroceries'); 
    });
});