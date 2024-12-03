describe('Read Data from Excel', () => {
    it('should read data from an Excel file', () => {
      const filePath = 'C:/cypress/cypress/fixtures/studentdata.xls'; // Use the correct path
  
      cy.task('readExcel', filePath).then((data) => {
        cy.task('log', 'Excel data read successfully:'); // Log a message
        cy.task('log', data); // Log the actual data
        expect(data).to.not.be.empty; // Ensure data is not empty
      });
    });
  });
  