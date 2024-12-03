describe('Using Excel Data in Cypress', () => {
    it('Reads data from an Excel file and fills out the form', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('userInputDisallowedList')) {
                return false; // Ignore this error
            }
            return true; // Let other errors fail the test
        })
      // Load the Excel file using the defined task
      cy.task('excelToJson', 'cypress/fixtures/sampledata.xls').then((data) => {
        // Assuming "Sheet1" exists in the Excel file
        const sheetData = data;  // Now it's the JSON data from Excel
  
        // Access each row's data
        sheetData.forEach((row) => {
          cy.log(`First Name: ${row.FirstName}, Last Name: ${row.LastName}, User Name: ${row.UserName}, Email: ${row.Email}, Password: ${row.Password}, Confirm Password: ${row.cPassword}`);
          
          // Visit the page where you need to enter the form data
          cy.visit('https://demo.wpeverest.com/user-registration/simple-registration-form/');
  
          // Fill in the form with data from the Excel file
          cy.get('#first_name').type(row.FirstName);
          cy.get('#last_name').type(row.LastName);
          cy.get("#user_login").type(row.UserName)
          cy.get("#user_email").type(row.Email)
          cy.get("#user_pass").type(row.Password)
          cy.get("#user_confirm_password").type(row.cPassword)
          
          // Additional steps if needed, such as submitting the form
          cy.get('.btn').click();
          
          // Assert that the form was submitted successfully (adjust based on your application)
          cy.contains('User successfully registered').should('be.visible');
        });
      });
    });
  });
  