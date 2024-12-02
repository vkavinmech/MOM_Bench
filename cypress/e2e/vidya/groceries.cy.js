describe('OurGroceries Overview Page Tests', () => {
    beforeEach(() => {
      // Visit the Overview page before each test
      cy.visit('https://www.ourgroceries.com/overview');
    });
  
    it('should display the main elements on the overview page', () => {
      // Check that the header, title, and main sections are visible
      cy.get('header').should('be.visible');
      cy.get('.hero > .logo > img').should('be.visible');

    })

    it('should display the footer and contain social media links', () => {
      // Check that the footer is visible and has social media links
      cy.get('footer').should('be.visible');
      cy.get('footer').within(() => {
        cy.contains('Shop Merch!').should('have.attr', 'href').and('include', 'ourgroceries');
        cy.contains('About').should('have.attr', 'href').and('include', 'about-us');
        cy.contains('User Guide').should('have.attr', 'href').and('include', 'user-guide');
        cy.contains('Sign In').should('have.attr', 'href').and('include', '/your-lists');
        
      });
    })

    it ("should verify header tab", () =>{

        cy.get(".page-header-current-page").click()
        cy.url().should("eq", "https://www.ourgroceries.com/overview")

        cy.get('.page-header > [href="/user-guide"]').click()
        cy.url().should("eq", "https://www.ourgroceries.com/user-guide")

        cy.get('.page-header > [href="/faq"]').click()
        cy.url().should("eq", "https://www.ourgroceries.com/faq")

        cy.get('.page-header > [href="/sign-in"]').click()
        cy.url().should("eq", "https://www.ourgroceries.com/sign-in")

        cy.get('.button').click()
        cy.url().should("eq", "https://www.ourgroceries.com/download")
    })

    it.only("Verify Sign in Page", () => {

      cy.get('.page-header > [href="/sign-in"]').click()

      cy.get('#emailAddress').type("testauto@xyz.com")

      cy.get(".labelTextFieldForm > button").click()

      cy.get('#password').type("Test@123")

      //cy.get('#passwordAgain').type("Test@123")

      //cy.get('.labelTextFieldForm > button').click()

      cy.get(':nth-child(4) > button').click()
      cy.get('#listName').should("have.text", "Your Lists")


    })


  
    it('should check the "Contact Us" link and verify redirection', () => {
      // Find and click the "Contact Us" link
      cy.contains('Contact Us').click();
    });
 

  it('should verify "Privacy Policy" link in the footer redirects to correct page', () => {
    // Find and click the "Privacy Policy" link in the footer
    cy.get('footer').contains('Privacy policy').click();

    // Verify that it redirects to the privacy policy page
    cy.url().should('include', '/privacy');
    cy.get('h1').should('contain.text', 'Privacy Policy');
  });
  });
  