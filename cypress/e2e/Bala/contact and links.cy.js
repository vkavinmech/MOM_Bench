describe("QAoncloud page",()=>
{
    it("contact us ",()=>
    {
        
    cy.visit("https://www.qaoncloud.com/")
    cy.get(".elementor-button-text").should('be.enabled').and('be.visible').and('exist').click()
    cy.location('href').should('include',"/contact-us")
    cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
    cy.title().should('eq',"Contact us | Software Testing Company | QAonCloud")
    cy.get("div[class='col-md-6 aos-init'] h2[class='text-center brand-contact-title']").should('be.visible').and('have.text',"Contact Us")
    cy.get("input[placeholder='Name'][title='Alphabetic characters only']").should('be.visible').and('exist').click().type("bala")
    .should('have.attr', 'placeholder', 'Name')
    cy.get("input[placeholder='E-mail']").should('be.visible').and('exist').click().type("bala02aadhi@gmail.com")
    .should('have.attr', 'placeholder', 'E-mail')
    cy.get("input[placeholder='Phone']").should('be.visible').and('exist').click().type("9150794431")
    .should('have.attr', 'placeholder', 'phone')
    cy.get("form[name='form2'] input[placeholder='Company Name']").should('be.visible').and('exist').click().type("desicrew")
    .should('have.attr', 'placeholder', 'Company Name')
    cy.get("body > div:nth-child(3) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(3) > input:nth-child(11)")
    .should('be.visible').and('exist').click().type("tester") .should('have.attr', 'placeholder', 'Role')
    cy.get("textarea[placeholder='Requirements']").should('be.visible').and('exist').click().type("no requirements to write")
     .should('have.attr', 'placeholder', 'Requirements')
     cy.get("input[value='Send']").should('be.enabled').and('exist').and('be.visible')
    })
    it("visit the footer links",()=>
    {
        cy.visit("https://www.qaoncloud.com/")
        cy.xpath("//span[contains(text(),'About Us')]").should('be.visible').and('exist').click()
        cy.location('href').should('include',"/about-us")
        cy.url().should('eq',"https://www.qaoncloud.com/about-us")
        cy.title().should('eq',"About QAonCloud  QA and Testing Experience").should('be.visible').and('exist')
        cy.xpath("//a[normalize-space()='How it works']").should('be.visible').and('exist').click()
        cy.location('href').should('include',"/how-we-work")
        cy.url().should('eq',"https://www.qaoncloud.com/how-we-work")
        cy.title().should('eq',"QAonCloud's Approach to QA & Testing Services ").should('be.visible').and('exist')
        cy.xpath("//a[normalize-space()='Why Us']").should('be.visible').and('exist').click()
        cy.location('href').should('include',"/why-us")
        cy.url().should('eq',"https://www.qaoncloud.com/why-us")
        cy.title().should('eq',"Why to choose QAonCloud").should('be.visible').and('exist')
        cy.xpath("//a[normalize-space()='Engagement & Pricing']").should('be.visible').and('exist').click()
        cy.location('href').should('include',"/engagement-model")
        cy.url().should('eq',"https://www.qaoncloud.com/engagement-model")
        cy.title().should('eq',"Business Engagement Model - QAonCloud").should('be.visible').and('exist')
        cy.xpath("a[href='https://www.qaoncloud.com/careers']").should('be.visible').and('exist').click()
        cy.location('href').should('include',"/careers")
        cy.url().should('eq',"https://www.qaoncloud.com/careers")
        cy.title().should('eq',"Join Our Team: Explore Exciting Career Opportunities at QAonCloud").should('be.visible').and('exist')
        cy.get("a[href='https://www.qaoncloud.com/tools-we-use']").should('be.visible').and('exist').click()
        cy.location('href').should('include',"/tools-we-use")
        cy.url().should('eq',"https://www.qaoncloud.com/tools-we-use")
        cy.title().should('eq',"Tools We Used For Software Testing").should('be.visible').and('exist')
        cy.xpath("//a[normalize-space()='Privacy Policy']").should('be.visible').and('exist').click()
        cy.location('href').should('include',"/privacy-policy")
        cy.url().should('eq',"https://www.qaoncloud.com/privacy-policy")
        cy.title().should('eq'," QA Testing Services | Software Testing Services - QAonCloud").should('be.visible').and('exist')
        cy.xpath("//a[normalize-space()='Terms & Condition']").should('be.visible').and('exist').click()
        cy.location('href').should('include',"/terms-of-use")
        cy.url().should('eq',"https://www.qaoncloud.com/terms-of-use")
        cy.title().should('eq'," QA Testing Services | Software Testing Services - QAonCloud").should('be.visible').and('exist')
        })
})