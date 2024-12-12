
describe("Read data with Excel", () => {

    
    it("Excel File - First Sheet", () => {
        
        cy.parseXlsx('cypress/fixtures/mercurydata.xlsx').then((excelData) => {
           
            const rowCount = excelData[0].data.length;
            cy.log('Row Count for First Sheet:', rowCount);

           
            for (let i = 1; i < rowCount; i++) {
                let value = excelData[0].data[i];
                
                
                cy.visit("https://demo.guru99.com/test/newtours/index.php");
                cy.get("input[name='userName']").type(value[0]);
                cy.get("input[name='password']").type(value[1]);
                cy.get("input[value='Submit']").click();

               
               
            }
        });
    });

})   