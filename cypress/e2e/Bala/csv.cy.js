const neatCSV = require('neat-csv')

describe("csv file",()=>
{
    let table;
    before(()=>
    {
        cy.fixture("contact.csv")

        .then(neatCSV)//converting csv file into an object
        .then(data=>{

            table = data;

        })

        .then(console.table)
    })
    it("read csv file",()=>
    {
        cy.visit("https://practicetestautomation.com/contact/")

        const randomRow = Math.floor(Math.random()*table.length)

        cy.get("#wpforms-161-field_0").type(table[randomRow]['firstname'])
        cy.get("#wpforms-161-field_0-last").type(table[randomRow]['lastname'])
        cy.get("#wpforms-161-field_1").type(table[randomRow]['email'])
        cy.get("#wpforms-161-field_2").type(table[randomRow]['comment'])
    })
})