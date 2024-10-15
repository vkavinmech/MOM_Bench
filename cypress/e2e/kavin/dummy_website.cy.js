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

    it.only('should perform place order', () => {
        cy.get("#travname").type(data.firstname);
        cy.get("#travlastname").type(data.lastname);
        cy.get("#dob").click();
        cy.get("select[aria-label='Select month']").select('Jul');
        cy.get("select[aria-label='Select year']").select('1996');
        cy.get("tbody tr:nth-child(3) td:nth-child(3) a:nth-child(1)").click();
        cy.get("#sex_1").check();
        cy.get("#fromcity").type(data.fromcity);
        cy.get("#tocity").type(data.tocity);
        cy.get('#departon').click();
        cy.get("select[aria-label='Select month']").select('Oct');
        cy.get("select[aria-label='Select year']").select('2024');
        cy.get("tbody tr:nth-child(5) td:nth-child(5) a:nth-child(1)").click();
        cy.get("#deliverymethod_3").check();
        cy.get("#billname").type(data.billingName);
        cy.get("#billing_phone").type(data.phone);
        cy.get("#billing_email").type(data.emailValid);
        cy.get("#select2-billing_country-container").click();
        cy.get("input[role='combobox']").type('India').type('{enter}')
        cy.get("#billing_address_1").type(data.houseNo);
        cy.get("#billing_address_2").type(data.village);
        cy.get("#billing_city").type(data.city);
        cy.xpath("(//span[@id='select2-billing_state-container'])[1]").click();
        cy.get("input[role='combobox']").type('Tamil Nadu').type('{enter}')
        cy.get("#billing_postcode").type(data.pincode);
        cy.get('#place_order').click();
        cy.url().should('contain', "/paymentoptions");
    });
  
    it('should perform payment using netbanking', () => {
        cy.get("#travname").type(data.firstname);
        cy.get("#travlastname").type(data.lastname);
        cy.get("#dob").click()
        cy.get("select[aria-label='Select month']").select('Jul');
        cy.get("select[aria-label='Select year']").select('1996');
        cy.get("tbody tr:nth-child(3) td:nth-child(3) a:nth-child(1)").click();
        cy.get("#sex_1").check();
        cy.get("#fromcity").type(data.fromcity);
        cy.get("#tocity").type(data.tocity);
        cy.get('#departon').click();
        cy.get("select[aria-label='Select month']").select('Oct');
        cy.get("select[aria-label='Select year']").select('2024');
        cy.get("tbody tr:nth-child(5) td:nth-child(5) a:nth-child(1)").click();
        cy.get("#deliverymethod_3").check();
        cy.get("#billname").type(data.billingName);
        cy.get("#billing_phone").type(data.phone);
        cy.get("#billing_email").type(data.emailValid);
        cy.get("#select2-billing_country-container").click();
        cy.get("input[role='combobox']").type('India').type('{enter}')
        cy.get("#billing_address_1").type(data.houseNo);
        cy.get("#billing_address_2").type(data.village);
        cy.get("#billing_city").type(data.city);
        cy.xpath("(//span[@id='select2-billing_state-container'])[1]").click();
        cy.get("input[role='combobox']").type('Tamil Nadu').type('{enter}')
        cy.get("#billing_postcode").type(data.pincode);
        cy.get('#place_order').click();
        cy.get("#amount-impression").should('contain', '990');
        cy.get('[data-testid="all-options-cta"]').click();
        cy.get("li:nth-child(4) span:nth-child(2)").click();
        cy.url().should('include', '/netbanking');
    });
  
    it('should perform payment using wallet', () => {
        cy.get("#travname").type(data.firstname);
        cy.get("#travlastname").type(data.lastname);
        cy.get("#dob").click();
        cy.get("select[aria-label='Select month']").select('Jul');
        cy.get("select[aria-label='Select year']").select('1996');
        cy.get("tbody tr:nth-child(3) td:nth-child(3) a:nth-child(1)").click();
        cy.get("#sex_1").check();
        cy.get("#fromcity").type(data.fromcity);
        cy.get("#tocity").type(data.tocity);
        cy.get('#departon').click();
        cy.get("select[aria-label='Select month']").select('Oct');
        cy.get("select[aria-label='Select year']").select('2024');
        cy.get("tbody tr:nth-child(5) td:nth-child(5) a:nth-child(1)").click();
        cy.get("#deliverymethod_3").check();
        cy.get("#billname").type(data.billingName);
        cy.get("#billing_phone").type(data.phone);
        cy.get("#billing_email").type(data.emailValid);
        cy.xpath("(//span[@id='select2-billing_state-container'])[1]").click();
        cy.get("input[role='combobox']").type('India').type('{enter}')
        cy.get("#billing_address_1").type(data.houseNo);
        cy.get("#billing_address_2").type(data.village);
        cy.get("#billing_city").type(data.city);
        cy.get('#select2-billing_state-container').click();
        cy.get("input[role='combobox']").type('Tamil Nadu').type('{enter}')
        cy.get("#billing_postcode").type(data.pincode);
        cy.get('#place_order').click();
        cy.get("#amount-impression").should('contain', '990');
        cy.get('[data-testid="all-options-cta"]').click();
        cy.get(':nth-child(3) > .card-num').click();
        cy.url().should('include','/cashcard');
    });

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
  