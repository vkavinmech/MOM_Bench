describe("QAoncloud website",()=>
{
    it("QAoncloud industries dropdown",()=>
    {
        cy.visit("https://www.qaoncloud.com/")
        cy.industrieslink()
        cy.xpath("//a[normalize-space()='Banking & Financial Services']").should('be.visible').and('exist').click()
        const expbanking = " Banking & Financial Services"
        cy.xpath("//a[normalize-space()='Banking & Financial Services']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expbanking)
        })
        cy.location('href').should('include',"/fintech-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/fintech-testing-services")
        cy.title().should('eq'," Banking & Financial App Testing Services ").should('be.visible').and('exist')
        cy.xpath("//button[@data-bs-target='#flush-collapseOne']").should('be.visible').and('exist').and('be.emabled').click()
        cy.xpath("//p[normalize-space()='Cost-Efficient']").should('have.text',"Cost-Efficient")
        cy.xpath("//button[@data-bs-target='#flush-collapseTwo']").should('be.visible').and('exist').and('be.emabled').click()
        cy.xpath("//p[normalize-space()='Speed to Market']").should('have.text',"Speed to Market")
        cy.xpath("//button[@data-bs-target='#flush-collapseThree']").should('be.visible').and('exist').and('be.emabled').click()
        cy.xpath("//p[normalize-space()='Higher Efficiency']").should('have.text',"Higher Efficiency")
        cy.xpath("//button[@data-bs-target='#flush-collapseFour']").should('be.visible').and('exist').and('be.emabled').click()
        cy.xpath("//p[normalize-space()='Customer-centric Solutions']").should('have.text',"Customer-centric Solutions")
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
        cy.industrieslink()
        cy.xpath("//a[normalize-space()='E-Commerce']").should('be.visible').and('exist').click()
        const expEcommerce = " E-Commerce"
        cy.xpath("//a[normalize-space()='E-Commerce']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expEcommerce)
        })
        cy.location('href').should('include',"/e-commerce-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/e-commerce-testing-services")
        cy.title().should('eq',"E-commerce Testing Services | E-commerce Testing Company USA").should('be.visible').and('exist')
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
        cy.industrieslink()
        cy.xpath("//a[normalize-space()='Communications']").should('be.visible').and('exist').click()
        const expcommunication = "Communications"
        cy.xpath("//a[normalize-space()='Communications']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expcommunication)
        })
        cy.location('href').should('include',"/telecom-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/telecom-testing-services")
        cy.title().should('eq'," Telecom App Testing Services | Telecom Software Testing - QAonCloud").should('be.visible').and('exist')
        cy.xpath("//div[contains(@class,'cardFlex')]//div[1]").should('be.enabled').and('be.visible').click()
        const expfunctional = "Functional Testing"
        cy.xpath("//p[normalize-space()='Functional Testing']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expfunctional)
        })
        cy.xpath("//div[contains(@class,'cardFlex')]//div[2]").should('be.enabled').and('be.visible').click()
        const expmobile = "Mobile testing"
        cy.xpath("//p[normalize-space()='Mobile testing']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expmobile)
        })
        cy.xpath("//div[contains(@class,'cardFlex')]//div[3]").should('be.enabled').and('be.visible').click()
        const expregression = "Regression testing"
        cy.xpath("//p[normalize-space()='Regression testing']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expregression)
        })
        cy.xpath("//div[contains(@class,'cardFlex')]//div[4]").should('be.enabled').and('be.visible').click()
        const expperformance= "Performance testing"
        cy.xpath("//p[normalize-space()='Performance testing']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expperformance)
        })
        cy.xpath("//div[contains(@class,'cardFlex')]//div[5]").should('be.enabled').and('be.visible').click()
        const expdata= "Data testing"
        cy.xpath("//p[normalize-space()='Data testing']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expdata)
        })
        cy.xpath("//div[contains(@class,'cardFlex')]//div[6]").should('be.enabled').and('be.visible').click()
        const expintegration= "Integration testing"
        cy.xpath("//p[normalize-space()='Integration testing']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expintegration)
        })
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
        cy.industrieslink()
        cy.xpath("//a[normalize-space()='Artificial Intelligence']").should('be.visible').and('exist').click()
        const expArtificialIntelligence = " Artificial Intelligence"
        cy.xpath("//a[normalize-space()='Artificial Intelligence']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expArtificialIntelligence)
        })
        cy.location('href').should('include',"/ai-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/ai-testing-services")
        cy.title().should('eq'," AI Testing Services | AI Testing Company ").should('be.visible').and('exist')
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
        cy.industrieslink()
        cy.xpath("//a[normalize-space()='Event Management']").should('be.visible').and('exist').click()
        const expEvent = " Artificial Intelligence"
        cy.xpath("//a[normalize-space()='Event Management']").then((value)=>
        {
            const actbank = value.text()
            expect(actbank).to.eq(expEvent)
        })
        cy.location('href').should('include',"/event-management-software-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/event-management-software-testing-services")
        cy.title().should('eq',"Event Management Software Testing Services - QAonCloud").should('be.visible').and('exist')
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
    })
})