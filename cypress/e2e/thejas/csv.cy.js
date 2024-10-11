const neatCSV = require('neat-csv');

describe('Read csv ',()=>{

let table;
    before(()=>{
        cy.fixture('contact.csv')
        .then(neatCSV)// convert csv file into the object 
        .then(data=>{
            table=data;
        })
        .then(console.table)
    })

     it("Fill input fields using the csv data ",()=>{
         cy.visit("https://practicetestautomation.com/contact/",{failOnStatusCode: false})


         const randomRow= Math.floor(Math.random()*table.length)
         cy.get("#wpforms-161-field_0").type(table[randomRow]['name'])
         cy.get("#wpforms-161-field_0-last").type(table[randomRow]['lastName'])
         cy.get("#wpforms-161-field_1").type(table[randomRow]['email'])
         

    })

    




})