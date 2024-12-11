describe("QAoncloud page",()=>
{
    it("validating the solutions page",()=>
    {
        cy.visit("https://www.qaoncloud.com/")
        cy.url().should('eq',"https://www.qaoncloud.com/").and('include',"qaoncloud.com/")
        cy.title().should("eq"," QA Testing Services | Software Testing Services - QAonCloud")
        cy.get("img[title='QAonCloud Logo']").should('be.visible').and('exist')
        cy.solutionslink()
        cy.get("//a[normalize-space()='Mobile App Testing']").should('be.visible').and('exist').click()
        const expmobile ="Mobile App Testing"
        cy.xpath("//a[normalize-space()='Mobile App Testing']").then((value)=>
        {
            const actmobile = value.text()
            expect( actmobile).to.eq(expmobile)
        })
        cy.location('href').should('include',"/mobile-app-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/mobile-app-testing-services")
        cy.title().should('eq',"Mobile App Testing Services | Mobile App Security Testing USA ")
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
        cy.go(back)
        cy.xpath("//p[normalize-space()='Usability Testing']").should('be.enabled').should('be.visible').and('exist').click()
        cy.xpath("//h3[normalize-space()='Usability Testing']").should('have.text',"Usability Testing").and('exist')
        cy.xpath("//p[normalize-space()='Mobile Functional Testing']").should('be.enabled').should('be.visible').and('exist').click()
        cy.xpath("//h3[normalize-space()='Mobile Functional Testing']").should('have.text',"Mobile Functional Testing").and('exist')
        cy.xpath("//p[normalize-space()='Mobile Load And Performance Testing']").should('be.enabled').should('be.visible').and('exist').click()
        cy.xpath("//h3[normalize-space()='Mobile Load And Performance Testing']").should('have.text',"Mobile Load And Performance Testing").and('exist')
        cy.xpath("//p[normalize-space()='Compliance Testing']").should('be.enabled').should('be.visible').and('exist').click()
        cy.get("//h3[normalize-space()='Compliance Testing']").should('have.text',"Compliance Testing").and('exist')
        cy.xpath("//p[normalize-space()='Mobile Security Testing']").should('be.enabled').should('be.visible').and('exist').click()
        cy.xpath("//h3[normalize-space()='Mobile Security Testing']").should('have.text',"Mobile Security Testing").and('exist')
        cy.xpath("//p[normalize-space()='Mobile Test Automation']").should('be.enabled').should('be.visible').and('exist').click()
        cy.xpath("//h3[normalize-space()='Mobile Test Automation']").should('have.text',"Mobile Test Automation").and('exist')
        cy.xpath("//p[normalize-space()='Mobile Accessibility Testing']").should('be.enabled').should('be.visible').and('exist').click()
        cy.xpath("//h3[normalize-space()='Mobile Accessibility Testing']").should('have.text',"Mobile Accessibility Testing").and('exist')
        cy.solutionslink()
        cy.xpath("//a[normalize-space()='Cross-Platform Testing']").should('be.visible').and('exist').click()
        const expmobile2 ="Cross-Platform Testing"
        cy.xpath("//a[normalize-space()='Cross-Platform Testing']").then((value)=>
        {
            const actmobile = value.text()
            expect( actmobile).to.eq(expmobile2)
        })
        cy.location('href',"/cross-platform-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/cross-platform-testing-services")
        cy.title().should('eq'," Cross Platform Testing Services | Cross Platform Testing USA ").should('be.visible').and('exist')
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
        cy.go(back)
        cy.xpath("//p[normalize-space()='Application Compatibility Testing']").should('be.enabled').should('be.visible').and('exist').click()
        const expcompatibilityvalue = "Application Compatibility Testing"
        cy.xpath("//p[normalize-space()='Application Compatibility Testing']").then((value)=>
        {
            const actcompvalue = value.text()
            expect(actcompvalue).to.eq(expcompatibilityvalue)
        })
        cy.xpath("//h3[normalize-space()='Application Compatibility Testing']").should('be.visible').and('have.text',"Application Compatibility Testing")
        cy.xpath("//p[contains(text(),'Software Compatibility')]").should('be.enabled').and('exist').should('be.visible').click()
        const expsoftwarevalue = "Software Compatibility  Testing"
        cy.xpath("//p[contains(text(),'Software Compatibility')]").then((value)=>
        {
            const actcompvalue = value.text()
            expect(actcompvalue).to.eq( expsoftwarevalue)
        })
        cy.xpath("//div[@class='carousel-item content_item active']//div[@class='content_header']").should('have.text',"Software Compatibility  Testing")
        .should('be.visible').and('exist')
        cy.xpath("//p[normalize-space()='Browser Compatibility Testing']").should('be.enabled').and('exist').should('be.visible').click()
        const expbrowservalue = "Browser Compatibility Testing"
        cy.xpath("//p[normalize-space()='Browser Compatibility Testing']").then((value)=>
        {
            const actcompvalue = value.text()
            expect(actcompvalue).to.eq( expbrowservalue)
        })
        cy.xpath("//h3[normalize-space()='Browser Compatibility Testing']").should('be.visible').and('have.text',"Browser Compatibility Testing")
        cy.xpath("//div[@aria-label='Slide 4']").should('be.enabled').and('exist').should('be.visible').click()
        const expdatabasevalue = "Database Compatibility Testing"
        cy.xpath("//div[@aria-label='Slide 4']").then((value)=>
        {
            const actcompvalue = value.text()
            expect(actcompvalue).to.eq( expdatabasevalue)
        })
        cy.xpath("//h3[normalize-space()='Database Compatibility Testing']").should('be.visible').and('have.text',"Database Compatibility Testing")
        cy.xpath("//p[normalize-space()='Mobile Device Compatibility Testing']").should('be.enabled').and('exist').should('be.visible').click()
        const expmobilevalue = "Mobile Device Compatibility Testing"
        cy.xpath("//p[normalize-space()='Mobile Device Compatibility Testing']").then((value)=>
        {
            const actcompvalue = value.text()
            expect(actcompvalue).to.eq( expmobilevalue)
        })
        cy.xpath("//h3[normalize-space()='Mobile Device Compatibility Testing']").should('be.visible').and('have.text',"Mobile Device Compatibility Testing")
        cy.solutionslink()
        cy.xpath("//a[normalize-space()='Web App Testing']").should('be.visible').and('exist').click()
        const expweb ="Web App Testing"
        cy.xpath("//a[normalize-space()='Web App Testing']").then((value)=>
        {
            const actmobile = value.text()
            expect( actmobile).to.eq(expweb)
        })
        cy.location('href').should('include',"/web-app-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/web-app-testing-services")
        cy.title().should('eq',"Web Application Testing Services | Web App Testing USA").should('be.visible').and('exist')
        cy.solutionslink()
        cy.xpath("//a[normalize-space()='Cross-Browser Testing']").should('be.visible').and('exist').click()
        const expcrossbrowser ="Cross-Browser Testing"
        cy.xpath("//a[normalize-space()='Cross-Browser Testing']").then((value)=>
        {
            const actmobile = value.text()
            expect( actmobile).to.eq(expcrossbrowser)
        })
        cy.location('href').should('include',"/cross-browser-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/cross-browser-testing-services")
        cy.title().should('eq'," Cross Browser Testing Services | Automated Cross Browser Testing USA").should('be.visible').and('exist')
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
        cy.solutionslink()
        cy.xpath("//a[normalize-space()='Game Testing']").should('be.visible').and('exist').click()
        const expgame ="Game Testing"
        cy.xpath("//a[normalize-space()='Game Testing']").then((value)=>
        {
            const actmobile = value.text()
            expect( actmobile).to.eq(expgame)
        })
        cy.location('href').should('include',"/game-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/game-testing-services")
        cy.title().should('eq'," Mobile Game Testing Services | Game Testing Services ").should('be.visible').and('exist')
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
        cy.solutionslink()
        cy.xpath("//a[normalize-space()='Smart Tv Testing']").should('be.visible').and('exist').click()
        const expsmart ="Game Testing"
        cy.xpath("//a[normalize-space()='Game Testing']").then((value)=>
        {
            const actmobile = value.text()
            expect( actmobile).to.eq(expsmart)
        })
        cy.location('href').should('include',"/smart-tv-app-testing-services")
        cy.url().should('eq',"https://www.qaoncloud.com/smart-tv-app-testing-services")
        cy.title().should('eq'," Smart TV App Testing Services | Smart TV App Testing Company USA ").should('be.visible').and('exist')
        cy.talktoourexperts().should('be.enabled').and('exist').should('be.visible')
        cy.location('href').should('include',"/contact-us")
        cy.url().should('eq',"https://www.qaoncloud.com/contact-us")
})
})