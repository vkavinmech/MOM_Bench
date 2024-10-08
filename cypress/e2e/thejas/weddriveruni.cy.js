describe("webdriver university",()=>{

    it("entering the user data ",()=>{
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get("input[placeholder='First Name']").type("Thejaswaroopan")
        cy.get("input[placeholder='Last Name']").type("subramani")
        cy.get("input[placeholder='Email Address']").type("Thejaswaroopan@qaoncloud.com")
        cy.get("textarea[placeholder='Comments']").type("testing the webdriver university website")
        cy.get("input[value='SUBMIT']").click()
        
        cy.get("div[id='contact_reply'] h1").should('have.text','Thank You for your Message!')
    })
    
    
    it("validating the user data ",()=>{
        cy.visit("http://webdriveruniversity.com/Login-Portal/index.html?")
        cy.get("#text").type("Thejaswaroopan")
        cy.get("#password").type("sub!2435")
       
        cy.get("#login-button").click()
        
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('validation failed');
          })
    })
    
    it("btn click",()=>{
      cy.visit("http://webdriveruniversity.com/Click-Buttons/index.html")
      cy.get("#button1").click()
      cy.on('window:alert',(t)=>{
        expect(t).to.contains('click() method!')
      })
    
    })
    
    
    })