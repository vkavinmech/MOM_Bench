describe('Alerts ',()=>
{
    it("handling the javascript alert",()=>
    {
cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
cy.get('button[onclick="jsAlert()"]').click()

//validating the alert message on the alert window
cy.on('window:alert',(t)=>
{
    expect(t).to.contains("I am a JS Alert")
})
//alert window will automatically close by the cypress

//verifying the result after clicking the alert window
cy.get("#result").should('have.text',"You successfully clicked an alert")
    cy.wait(3000)

    })

    it("handling the javascript confirmation alert",()=>
        {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get('button[onclick="jsConfirm()"]').click()
    
    //validating the alert message on the alert window
    cy.on('window:confirm',(t)=>
    {
        expect(t).to.contains("I am a JS Confirm")
    })
    //alert window will automatically close by the cypress
    
    //verifying the result after clicking the alert window by clicking ok button
    cy.get("#result").should('have.text',"You clicked: Ok")
    cy.wait(3000)
    
        })

        it("handling the javascript confirmation alert by cancel button",()=>
            {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsConfirm()"]').click()
        
        //validating the alert message on the alert window
        cy.on('window:confirm',(t)=>
        {
            expect(t).to.contains("I am a JS Confirm")
        })
          cy.on('window:confirm',()=>false)
        
        //verifying the result after clicking the alert window by clicking cancel button
        cy.get("#result").should('have.text',"You clicked: Cancel")
        cy.wait(3000)
        
            })
            it("handling the javascript promt alert",()=>
                {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

            cy.window().then((win)=>{
                cy.stub(win,'prompt').returns("welcome")
                })

            cy.get('button[onclick="jsPrompt()"]').click()

            //verifying the result after clicking the alert window by clicking ok button
            cy.get("#result").should('have.text',"You entered: welcome")
            cy.wait(3000)
            
                })
                it.skip("handling the javascript prompt alert by clicking cancel button", () => {
                    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
                
        
                
                    // Trigger the prompt by clicking the button
                    cy.get('button[onclick="jsPrompt()"]').click();
                
                    // Now simulate clicking the Cancel button
                    cy.on('window:prompt', () => null); // This simulates clicking "Cancel", returning `null`
                
                    // Verify the result after canceling the prompt (should show "You entered: null")
                    cy.get("#result").should('have.text', "You entered: null");
                })
                
                it("handling the javascript authenticated alert",()=>
                    {
                cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{ username:"admin", password:"admin"}
                })
                cy.get('p').should('have.contain',"Congratulations!")
    
            })
                
                
    
})