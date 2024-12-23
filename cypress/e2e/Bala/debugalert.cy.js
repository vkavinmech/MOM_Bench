///<reference types="cypress"/>

describe('Alerts', () => {
    it("handling the javascript alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        
        const alertSpy = cy.spy().as('alertSpy');

        cy.get('button[onclick="jsAlert()"]').click();

    
        cy.on('window:alert', (message) => {
            alertSpy(message);  
            expect(message).to.contains("I am a JS Alert");  
        });

        
        cy.get("#result").should('have.text', "You successfully clicked an alert");

    
        cy.wrap(alertSpy).should('have.been.calledOnce');  
        cy.wrap(alertSpy).should('have.been.calledWith', 'I am a JS Alert');

        cy.log("JavaScript Alert handled successfully!");

        cy.wait(3000);
    });

    it("handling the javascript confirmation alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        const confirmSpy = cy.spy().as('confirmSpy');

        cy.get('button[onclick="jsConfirm()"]').click();

        
        cy.on('window:confirm', (message) => {
            confirmSpy(message);
            expect(message).to.contains("I am a JS Confirm");
            return true;  
        });

        
        cy.get("#result").should('have.text', "You clicked: Ok");

    
        cy.wrap(confirmSpy).should('have.been.calledOnce');
        cy.wrap(confirmSpy).should('have.been.calledWith', 'I am a JS Confirm');

        cy.log("JavaScript Confirmation handled successfully!");

        cy.wait(3000);
    });

    it("handling the javascript confirmation alert by cancel button", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        const confirmSpy = cy.spy().as('confirmSpy');

        cy.get('button[onclick="jsConfirm()"]').click();

    
        cy.on('window:confirm', (message) => {
            confirmSpy(message);
            expect(message).to.contains("I am a JS Confirm");
            return false;  
        });

        
        cy.get("#result").should('have.text', "You clicked: Cancel");

        
        cy.wrap(confirmSpy).should('have.been.calledOnce');
        cy.wrap(confirmSpy).should('have.been.calledWith', 'I am a JS Confirm');

        cy.log("JavaScript Confirmation (Cancel) handled successfully!");

        cy.wait(3000);
    });

    it("handling the javascript prompt alert", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");


        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns("welcome");  
        });

        cy.get('button[onclick="jsPrompt()"]').click();

        
        cy.get("#result").should('have.text', "You entered: welcome");

        
        cy.window().then((win) => {
            expect(win.prompt).to.have.been.calledOnceWithExactly("Please enter your name");
        });

        cy.log("JavaScript Prompt handled successfully!");

        cy.wait(3000);
    });

    it("handling the javascript authenticated alert", () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: { username: "admin", password: "admin" }
        });

    
        cy.get('p').should('have.contain', "Congratulations!")
            .then(() => {
                cy.log("Authentication successful!");
            });

        cy.wait(3000);
    });
});
