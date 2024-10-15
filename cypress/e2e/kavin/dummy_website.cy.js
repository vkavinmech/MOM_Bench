describe('Dummy Ticket positive Scenarios', () => {
    let data;
    before(()=>{
        cy.fixture('dummy').then( (userdata)=>{
            data=userdata; 
        })
    });
    beforeEach('Navigate to the url',() => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    });

    it('should verify the home page', () => {
        cy.get("li[id='menu-item-13'] a[class=' nav-item-child ffb-ark-first-level-menu ']").click();
        cy.url().should('eq','https://www.dummyticket.com/')
        cy.get(".ffb-id-1bsvhj23.fg-heading.text-left.fg-text-light.fg-wow.fadeIn").should('contain','Dummy tickets for all occasions')
        cy.get("input[placeholder='First Name *']").type(data.firstname)
        cy.get("input[placeholder='Last Name *']").type(data.lastname)
        cy.get("input[placeholder='Email *']").type(data.emailValid)
        cy.get("input[placeholder='Your Phone *']").type(data.phone)
        cy.get("textarea[placeholder='Your message *']").type(data.description)
        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(5) > div:nth-child(2) > span:nth-child(1) > a:nth-child(1) > span:nth-child(1)").click();
        cy.get("div[class='ffb-id-16b6hbtu fg-text-light ff-message-send-ok-duplicate'] span[class='alert-box-title fg-text-light ffb-title-1']")
        .should('contain','Message sent!')
    })

    it('should verify contact us page', () => {
        cy.get("a[href='https://www.dummyticket.com/contact/']").click();
        cy.url().should('include','/contact')
        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > h2:nth-child(2)")
        .should('contain','Let us contact you')
        cy.get("input[placeholder='First Name *']").type(data.firstname)
        cy.get("input[placeholder='Last Name']").type(data.lastname)
        cy.get("input[placeholder='Email *']").type(data.emailValid)
        cy.get("input[placeholder='Phone']").type(data.phone)
        cy.get("textarea[placeholder='Your message *']").type(data.description)
        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(6) > span:nth-child(1) > a:nth-child(1)").click();
        cy.title().should('eq','Contact - Dummy ticket')
    })
    
    it('should validate the affiliate program', () => {
        cy.get("body > div:nth-child(1) > div:nth-child(2) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(5) > span:nth-child(1)").click();
        cy.wait(2000)
        cy.get(".c-button.c-header__item-link--blend").should('be.visible')
        cy.get("#tap_publishing_registration_firstname").type("kavin");
        cy.get("#tap_publishing_registration_lastname").type("kumar");
        cy.get("#tap_publishing_registration_email").type("demotesting@gmail.com");
        cy.get("#tap_publishing_registration_plainPassword").type("demo@1234");
        cy.title().should('eq','Standard program | Affiliate signup | Dummyticket');
      });
  });