describe('Automate Amazon website', () => {

    beforeEach('navigate to amazon',()=>{
        cy.visit('https://www.amazon.in/')
        })

    it('Should automate the amazon signup', () => {
      cy.wait(2000)
      cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
      cy.get("span[class='nav-line-2 ']").click()
      cy.get("#createAccountSubmit").click()
      cy.get("#ap_customer_name").type("Kavin")
      cy.get("#ap_phone_number").type("6385667529")
      cy.get("#ap_password").type("demotest@123")
      cy.get("#continue").click()
      cy.wait(2000)
      cy.pause();
      cy.wait(2000)
      cy.get('.a-size-large').should('have.text',"Solve this puzzle to protect your account")
    })
    it('Should automate the amazon sigin', () => {
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.get("span[class='nav-line-2 ']").click()
        cy.get("#ap_email").type("6385667529")
        cy.get("input#continue").click()
        cy.get("#ap_password").type("demotest@123")
        cy.get("#signInSubmit").click()
        cy.wait(2000)
        cy.get("#nav-link-accountList-nav-line-1").should('have.text',"Hello, kavin")
    })
    it('Should automate the search product', () => {
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.get("#twotabsearchtextbox").type("redmi 5g mobiles{enter}")
        cy.wait(2000)
        cy.get("div[class='s-widget-container s-spacing-mini s-widget-container-height-mini celwidget slot=MAIN template=MESSAGING widgetId=messaging-messages-results-header-builder-legal-disclaimer-and-ranking-disclosure-builder'] h2[class='a-size-medium-plus a-spacing-none a-color-base a-text-bold']")
        .should('have.text','Results')
        });
    it('Should automate the listed product', () => {
        cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        cy.get("#twotabsearchtextbox").type("redmi 5g mobiles{enter}")
        cy.wait(2000)
        cy.get("div[class='s-widget-container s-spacing-mini s-widget-container-height-mini celwidget slot=MAIN template=MESSAGING widgetId=messaging-messages-results-header-builder-legal-disclaimer-and-ranking-disclosure-builder'] h2[class='a-size-medium-plus a-spacing-none a-color-base a-text-bold']")
        .should('have.text','Results')
        cy.wait(2000)
        cy.get('.s-main-slot .s-result-item h2').each(($el) => {
            const title = $el.text();
            if (title.includes('Redmi')) {
              cy.log(title);    // Display only titles contains 'Redmi'
            }
        });
    })
})