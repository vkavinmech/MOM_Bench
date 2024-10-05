describe('Should Verify alert', () => {
    it('Should Verify simple alert', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click()

    cy.on('window:alert',(t)=>{
        expect(t).to.contains('I am a JS Alert');
    })
    // validate alert ok message
    cy.get('#result').should('have.text','You successfully clicked an alert')
});
it('Should Verify confirm alert', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm',(t)=>{
        expect(t).to.contains('I am a JS Confirm');
    })
    // validate alert ok message
    cy.get('#result').should('have.text','You clicked: Cancel');
    
    cy.on('window:confirm',()=> false)
    // validate alert cancel message
    cy.get('#result').should('have.text','You clicked: Cancel')
});
it('Should Verify Prompt alert', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win)=> {
          cy.stub(win,'prompt').returns('welcome');
    })
    cy.get("button[onclick='jsPrompt()']").click()

    // validate prompted alert message
    cy.get('#result').should('have.text','You entered: welcome')
});

it('Should Verify Authenticated alert', () => {
    // approach 1
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: 
                                                                {
                                                                 username: "admin",
                                                                 password: "admin"
                                                                }
    })
    cy.get("div[class='example'] p").should('have.contain',"Congratulations")
    // approach 2
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain',"Congratulations")
});
});