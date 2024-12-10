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

/// <reference types="cypress-xpath" />

Cypress.Commands.add('clicking',(username,password)=>{
    cy.get("input[placeholder='Username']").type(username);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[type='submit']").click();
   
})

Cypress.Commands.add("product",(item)=>{
    cy.xpath("//input[@id='twotabsearchtextbox']").type(item);
    cy.get("#nav-search-submit-button").click();
})


Cypress.Commands.add("Buttons",(label)=>{
        cy.get("a").contains(label).click();
})
/*Cypress.Commands.overwrite('contains',(originalFn,subject,filter,text,options={})=>{
    if(typeof text==='object'){
        options=text
        text=filter
        filter=undefined
 }
 options.matchCase=false;
 return originalFn(subject,filter,text,options)
})*/

Cypress.Commands.add("Links",(label)=>{
    cy.get("span").contains(label).click();
})
Cypress.Commands.add("Meesho",(username,password)=>{
    cy.get("#mui-1").type(username);
    cy.get("#mui-2").type(password);
    cy.get("button[type='submit']").click();
})

Cypress.Commands.add("navigatetoPage",()=>{
    cy.visit("https://www.meesho.com/");

})
Cypress.Commands.add("navigateusingSearch",(item)=>{
    cy.xpath("(//input[@placeholder='Try Saree, Kurti or Search by Product Code'])[1]").type(item).type("{enter}");
})
Cypress.Commands.add("navigateusingLinks",(label)=>{
    cy.get("span").contains(label).click();
})
Cypress.Commands.add("navigateinautomationpage",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/");
})
Cypress.Commands.add("textfields",(text)=>{
    cy.get("#name").type(text);
})
Cypress.Commands.add("emailfields",(text)=>{
    cy.get("#email").type(text);
    
})
Cypress.Commands.add("selectDropdown",(value)=>{
    cy.get("#country").select(value);
})
Cypress.Commands.add("selectmaleradiobutton",()=>{
    cy.get("#male").check();
})
Cypress.Commands.add("selectfemaleradiobutton",()=>{
    cy.get("#female").check();
})
Cypress.Commands.add("simplealert",()=>{
    cy.get("#alertBtn").click();
    cy.on("window:alert",(text)=>{
        expect(text).to.eq("I am an alert box!");

    })
    Cypress.Commands.add("confirmalert",()=>{
        cy.get("#confirmBtn").click();
        cy.on("window:confirm",(text1)=>{
            expect(text1).to.eq("Press a button!");
    
        })
})


})
