describe('Excel File Reading Test', () => {

    it('should parse data from an Excel file', () => {
      const filePath = 'cypress/fixtures/mercurydata.xlsx'; 
  
      cy.task('parseXlsx', { filepath: filePath }).then((data) => {
        console.log(data); 
        expect(data).to.not.be.empty; 
      });
    });
  
    it("counting number of files in e2e", () => {
      cy.task('countFiles', "cypress/e2e").then((count) => {
        cy.log(count);
        expect(count).to.equal(64); 
      });
    });
  
    it("counting the number of fixtures files", () => {
      cy.task('countFiles', "cypress/fixtures").then((count) => {
        cy.log(count);
      });
    });
  
    it.skip('should read data from all sheets in the Excel file', () => {
      const filePath = 'cypress/fixtures/multiple_data.xlsx'; 
  
      cy.task('parseXlsx', { filepath: filePath }).then((allSheetData) => {
        allSheetData.forEach((sheet) => {
          cy.log(`Sheet Name: ${sheet.name}`);
          cy.log(`Data: ${JSON.stringify(sheet.data)}`);
          
          expect(sheet.data).to.not.be.empty;
        });
      });
    });
  
    it("Excel File - First Sheet", () => {
      const filePath = 'cypress/fixtures/mercurydata.xlsx'; 
  
      cy.task('parseXlsx', { filepath: filePath }).then((excelData) => {
        const rowCount = excelData.length; 
  
        cy.log('Row Count for First Sheet:', rowCount);
  
        for (let i = 1; i < rowCount; i++) {  
          let value = excelData[i];
  
          cy.visit("https://demo.guru99.com/test/newtours/index.php");
          cy.get("input[name='userName']").type(value[0]); 
          cy.get("input[name='password']").type(value[1]); 
          cy.get("input[value='Submit']").click();
        }
      });
    });
    it("saving an href",()=>
    {
        cy.task('setHref',"https://www.cypress-dx.com")
    })

    it("get the saved href",()=>
    {
        cy.task('getHref').then((href) => {

            cy.log(href)
        })
    })
  
  });
  