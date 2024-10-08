// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})

// custom command for clicking link using lable(lable means text present in html )

Cypress.Commands.add('clickLink',(label)=> {
    cy.get("a").contains(label).click();
})

//overwrite contains()

/*Cypress.Commands.overwrite('contains',(orginalFn, subject, filter, text, options = {})=> {
   //describe if a filter argument was passed
    if(typeof text === 'object'){
        options = text
        text = filter
        filter = undefined
    }
    options.matchCase = false      // use this it will not a case sensitive
    
    return orginalFn(subject, filter, text, options)  
})*/
//custom command for login

Cypress.Commands.add('loginapp',(email,password)=> {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(email);
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
    cy.get(".oxd-button").click();
})