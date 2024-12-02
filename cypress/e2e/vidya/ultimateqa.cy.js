describe('Write test script for Automation Practice website', () => {

    // Suppress Waypoint error
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Waypoint is not defined')) {
        return false;  
      }
      return true; 
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Cannot read properties of null") || err.message.includes("postMessage")) {
          return false; // Prevent the test from failing
        }
        return true;
      });
  
    beforeEach(() => {
      cy.visit('https://ultimateqa.com/automation');
    });
  
    it.only("Test header tabs", () => {
      cy.get("#menu-main-menu > #menu-item-218392 > a").click()
      cy.url().should('include', 'consulting');
      cy.go('back');
      cy.url().should('include', 'automation')
  
      cy.get("#menu-main-menu > #menu-item-217940 > a").click()
      cy.url().should('include', '/about');
      cy.go('back');
      cy.url().should('include', 'automation')
  
      cy.get("#menu-main-menu > #menu-item-218226 > a").click()
      cy.url().should('include', 'blog');
      cy.go('back');
      cy.url().should('include', 'automation')
  
      cy.get("#menu-main-menu > #menu-item-218720 > a").click()
      cy.url().should('include', 'profile');
      cy.go('back');
      cy.url().should('include', 'automation')
  
      cy.get("#menu-main-menu > #menu-item-218225 > [href='#']").trigger("mouseover")
      cy.get('a[href="https://courses.ultimateqa.com/collections"]').first().click({force: true})
      cy.url().should('include', 'collections');

      cy.go('back');
      cy.url().should('include', 'automation')

      cy.get("#menu-main-menu > #menu-item-218225 > [href='#']").trigger("mouseover")
      cy.get('a[href="https://courses.ultimateqa.com/courses/selenium-java-bootcamp"]').first().click({force: true})
      cy.url().should('include', 'selenium-java-bootcamp');

      cy.go('back');
      cy.url().should('include', 'automation')

      cy.get("#menu-main-menu > #menu-item-218225 > [href='#']").trigger("mouseover")
      cy.get('a[href="https://courses.ultimateqa.com/courses/selenium-with-c"]').first().click({force: true})
      cy.url().should('include', 'selenium-with-c');

      cy.go('back');
      cy.url().should('include', 'automation')

      cy.get("#menu-main-menu > #menu-item-218225 > [href='#']").trigger("mouseover")
      cy.get('a[href="https://ultimateqa.com/best-selenium-webdriver-resources/"]').first().click({force: true})
      cy.url().should('include', 'best-selenium-webdriver-resources');

      cy.go('back');
      cy.url().should('include', 'automation')

      cy.get("#menu-main-menu > #menu-item-218225 > [href='#']").trigger("mouseover")
      cy.get('a[href="https://ultimateqa.com/automation/"]').first().click({force: true})
      cy.url().should('include', 'automation');

      cy.get("#menu-main-menu > #menu-item-218225 > [href='#']").trigger("mouseover")
      cy.get('a[href="https://ultimateqa.ck.page/academy-coming-soon"]').first().click({force: true})
      cy.url().should('include', 'academy-coming-soon');

      cy.go('back');
      cy.url().should('include', 'automation')

     
      cy.get('a[href="https://forms.clickup.com/2314027/p/f/26ktb-6387/56LKNUZ9BDYXSC73SY/unlock-your-automation-potentialwitha-free-framework-assessment"]').first().click()
      cy.url().should('include', 'unlock-your-automation');

      cy.go('back');
      cy.url().should('include', 'automation')

      cy.get("button[class='et_pb_menu__icon et_pb_menu__search-button']").click()
      cy.get(".et_pb_menu__search-input").type("Automation{enter}")
    });
  
    it('Test the links', () => {
      cy.get("a[href='../complicated-page']").click();
      cy.url().should('include', 'complicated-page');
      cy.go('back');
      cy.url().should('include', 'automation');
  
      cy.get('a[href="../fake-landing-page"]').click();
      cy.url().should('include', 'fake-landing-page');
      cy.go('back');
      cy.url().should('include', 'automation');
  
      cy.get('a[href="../fake-pricing-page"]').click();
      cy.url().should('include', 'fake-pricing-page');
      cy.go('back');
      cy.url().should('include', 'automation');
  
      cy.get('a[href="https://ultimateqa.com/filling-out-forms/"]').click();
      cy.url().should('include', 'filling-out-forms');
      cy.go('back');
      cy.url().should('include', 'automation');
  
      cy.get('a[href="https://ultimateqa.com/sample-application-lifecycle-sprint-1/"]').click();
      cy.url().should('include', 'sample-application-lifecycle-sprint-1');
      cy.go('back');
      cy.url().should('include', 'automation');
  
      cy.get('a[href="http://courses.ultimateqa.com/users/sign_in"]').click();
      cy.url().should('include', 'sign_in');
      cy.go('back');
      cy.url().should('include', 'automation');
  
      cy.get('a[href="../simple-html-elements-for-automation/"]').click();
      cy.url().should('include', 'simple-html-elements-for-automation');
    });
  });
  