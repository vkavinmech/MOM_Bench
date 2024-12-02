describe("Automate Webdriver Login Portal", () =>{

    beforeEach( () =>{

        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
    })

    it("Should verify fileds with valid data", () =>{

        cy.get("#text").type("webdriver")
        cy.get("#password").type("webdriver123")
        cy.get("#login-button").click()

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('validation succeeded'); 
          })
        })
      
        it('should display an error for incorrect credentials', () => {
          
          cy.get('#text').type('testauto');
          cy.get('#password').type('test123');
      
          
          cy.get('#login-button').click();
      
          
          cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('validation failed'); 
          });
        });
        
})