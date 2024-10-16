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

import 'cypress-file-upload';

import * as XLSX from 'xlsx';


Cypress.Commands.add("parseXlsx",(inputFile)=>{
    return cy.task('parseXlsx',{filePath:inputFile})
})

Cypress.Commands.add('readExcelRaw', (filePath, sheetName) => {
    return cy.readFile(filePath, 'binary').then((data) => {
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheet = workbook.Sheets[sheetName];
      // Directly return the raw data as a 2D array
      return XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
    });
  });

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

Cypress.Commands.add('loginapp',(email,password)=> {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(email);
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
    cy.get(".oxd-button").click();
})

