describe("pop up test suite ",()=>
{
    beforeEach(()=>
    {
        cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes")
    })
    it("handling the different pop ups",()=>
    {
        
        cy.get("#alert").click()
        cy.on('window:alert',(t)=>
        {
            expect(t).to.contains("I'm an Alert Box")
        })

    })
    it("handling the multiple alerts ",()=>
    {
        const fn = cy.stub()
        cy.on('window:alert',fn)
        cy.get("#miltiplealert").click().then(()=>
        {
            expect(fn.getCall(0)).to.be.calledWithExactly('First Alert Box')
            expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box')
            expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box')
        })
    
    })

    it("handling the confirm alert pop up",()=>
    {
        cy.get("#confirm").click()
        cy.on('window:confirm',(text)=>
        {
            expect(text).to.contains("I'm a Confirm Box")
            return false
        })
        cy.get("div[id='confirmdiag'] h2").should('have.text',"CONFIRM - You pressed Cancel!")
    })
    it("handling the confirm alert pop up by clicking ok button",()=>
        {
            cy.get("#confirm").click()
            cy.on('window:confirm',(text)=>
            {
                expect(text).to.contains("I'm a Confirm Box")
                return true
            })
            cy.get("#confirmdiag").should('have.text',"CONFIRM - You pressed OK!")
        })
    it("handling the prompt window",()=>
        {
            cy.window().then(win=>
            {
                const stub = cy.stub(win,'prompt')
                stub.returns("bala")
                cy.get("#prompt").click()
            })
            cy.get('h2').should('have.text',"PROMPT - Hello bala! How are you today?")
            
        })
    it("custom pop up dialog box ",()=>
        {
            cy.get("#cusdiag").click()
            cy.get("#name").type("username")
            cy.get("#password").type("password")
            cy.get(".ui-button-text").click()
        })
    it.only("window pop up",()=>
    {
       
        
            const pop_url ="https://www.youtube.com/c/qaboxletstest/"
            cy.window().then(win=>
            {
                const stub = cy.stub(win , 'open').as('windowopen')
            })
            cy.get("#winpop").click()
            cy.get('@windowopen').should('be.calledWith',pop_url)
            cy.window().then(win=>
            {
                win.location.href = pop_url
                cy.get("input#search").type(" cypress by  qa box lets test {enter}")
            })
            
            
        })
    })
