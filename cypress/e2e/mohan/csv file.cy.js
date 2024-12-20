const neatCSV = require('neat-csv')/////---->importing


describe("csv",()=>{
    let table1;///////////---------->global variable
    before(()=>{
        cy.fixture("new.csv")
        .then(neatCSV)//------------>convert into object to use csv files
        .then(values=>{
            table1=values;
        })
        
    })
   
    it("Read the data from csv file",()=>{
        cy.visit("https://practicetestautomation.com/contact/");
       // const randomRow= math.floor(Math.random()*table1.length)-------->print the random values
         cy.get("#wpforms-161-field_0").type(table1[0]["firstname"])////////------->print the first index of values
         cy.get("#wpforms-161-field_0-last").type(table1[0]["lastname"])
         cy.get("#wpforms-161-field_1").type(table1[0]["email"])
    })
})
    it.skip("Read the data from csv file ",()=>{
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
        cy.get('#input-firstname').type(table1[1]["regfirstname"]);
        cy.xpath("(//input[@id='input-lastname'])[1]").type(table1[0]["reglastname"]);
        cy.xpath("(//input[@id='input-email'])[1]").type(table1[1]["regemail"]);
        cy.xpath("(//input[@id='input-telephone'])[1]").type(table1[1]["regphone"]);
        cy.xpath("(//input[@id='input-password'])[1]").type(table1[1]["regpassword"]);
        cy.xpath("(//input[@id='input-confirm'])[1]").type(table1[1]["regconfirm"]);
        cy.xpath("(//label[@for='input-agree'])[1]").click();
       cy.xpath("(//input[@value='Continue'])[1]").click();
        

})
