import Papa from 'papaparse';
import * as XLSX from 'xlsx';

describe('DataDriven', () => {

    it('should perform the datadriven fetch from json', () => {
    cy.fixture('orangehrm1').then( (userdata)=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        
        userdata.forEach((data) => {
            cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(data.username);
            cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(data.password);
            cy.get(".oxd-button").click();  
        
            if(data.username=='Admin' && data.password=='admin123') {
                cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
                .should('have.text',data.expected);
                cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();

            cy.get('.oxd-userdropdown-tab > .oxd-icon').click();       // logout done beacause set of data will execute 
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
            }
            else{
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                .should('have.text',data.expected)
                }  
            })
        });
    });
   
    it('should perform the datadriven fetch from csv file', () => {
        cy.fixture('orange_csv').then((userdata) => {
            const data = Papa.parse(userdata, { header: true }).data;

            cy.visit('https://opensource-demo.orangehrmlive.com/');
            
            data.forEach((row) => {
                cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(row.username);
                cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(row.password);
                cy.get(".oxd-button").click();  

                if (row.username === 'Admin' && row.password === 'admin123') {
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
                        .should('have.text', row.expected);
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();       
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                } else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text', row.expected);
                }  
            });
        });
    });
    it('should perform the datadriven fetch from excel', () => {
        cy.fixture('orange_excel.xlsx', 'binary').then((userdata) => {
            const workbook = XLSX.read(userdata, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

            cy.visit('https://opensource-demo.orangehrmlive.com/');
            
            data.forEach((row) => {
                cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(row.username);
                cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(row.password);
                cy.get(".oxd-button").click();  

                if (row.username === 'Admin' && row.password === 'admin123') {
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
                        .should('have.text', row.expected);
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();       
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                } else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text', row.expected);
                }  
            });
        });
    });

});