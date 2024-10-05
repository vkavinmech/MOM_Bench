import Login from "./loginPage.cy";

describe("Working with cy.task()", function() {

    it("Login Test - Task - generateJSONFromExcel", function() {
 
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      const login = new Login();
      const excelFilePath ="C:\\Users\\Dell\\Desktop\\Cypress_Test\\cypress\\fixtures\\logindetails.xlsx";
      const sheetName = "login";
      // using cy.task()
      cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
        (user) => {
          login.Email.type(user[0].email);
          login.Password.type(user[0].password);
        }
      )
      login.SubmitButton.click();
      cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
         .should('have.text','PIM');
    });
});