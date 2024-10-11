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
        cy.get("header[class='page-header'] a:nth-child(3)").click();
        cy.get("#emailAddress").type("demotesting@gmail.com")
        cy.get("#password").type("demotest@123")
        cy.get("#passwordAgain").type("demotest@123")
        cy.get("button[value='create-account']").click();

        cy.get("label[for='user-menu-is-open']").click()
        cy.get(".user-menu-email-address").should('eq', 'demotesting@gmail.com');
        cy.get("div[class='user-menu-container'] a:nth-child(3)").click();
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

    it('should add the shopping list', () => {
        cy.get('.page-header > [href="/sign-in"]').click();
        cy.get("#emailAddress").type("demotesting@gmail.com")
        cy.get('.labelTextFieldForm > button').click();
        cy.get("#password").type("demotest@123")
        cy.get("button[value='sign-in']").click();

        cy.get('.menuButton').click();
        cy.get("body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3) > div:nth-child(3) > div:nth-child(2) > span:nth-child(2)").click();
        cy.get("#addListName").type("books")
        cy.get("button[class='submit-button ui-button ui-corner-all ui-widget']").click();

        // delete list
        cy.get("body > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2)").click();
        cy.get("button[class='menuButton']").click();
        cy.get("body > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4) > div:nth-child(3) > div:nth-child(10) > span:nth-child(2)").click();
        cy.wait(1000);
        cy.get('[aria-describedby="deleteListDialog"] > .ui-dialog-buttonpane > .ui-dialog-buttonset > .danger-button').click();
    });

    it('should navigate to Overview and check for "Shop Merch!"', () => {
        cy.get("a[href='https://www.zazzle.com/store/ourgroceries']").invoke('removeAttr','target').click()
        cy.url().should('include', '/ourgroceries'); 
    });
});