describe("desicrew website",()=>{


    it("Managed security ",()=>{
        cy.visit("http://desicrew.in/")
        cy.title().should('include','DesiCrew Website')
        cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").trigger('mouseover').click()
        cy.xpath("//a[normalize-space()='Continuous Security Monitoring (SOC)']").should('contain','Continuous Security Monitoring (SOC)')
    })
    
    it("Managed IT",()=>{
        cy.visit("http://desicrew.in/")
        cy.get("#accountDropdown").trigger("mouseover").click()
        cy.xpath("//a[text()='Onsite Technical Support']").should('contain','Onsite Technical Support')
    })
    
    it("contact",()=>{
        cy.visit("http://desicrew.in/")
        cy.get("a[type='submit']").click()
        cy.title().should("include","Contact Us")
        cy.xpath("//h2[text()='Contact Us for Meeting or Demo']").should('be.visible')
        cy.get("#fullName").type("Thejaswaroopan",{force: true})
        cy.get("#workEmail").type("thejaswaroopan@qaoncloud.com")
        cy.get("#phoneNumber").type("987654321")
        cy.get("#message").type("hi myself thejas, im working on the testing field ")
        cy.get("input[value='Submit']").click()
        cy.get("div[class='widget meet-us-widget'] li:nth-child(6)").should('have.text','info@desicrew.com')
    
    })
    
    
    
    
    })