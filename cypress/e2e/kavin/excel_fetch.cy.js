describe('Fetch Data from Excel', () => {
    it("should perform the datadriven fetch from excel for single data", () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');

        const filePath = "C:\\Users\\Dell\\Desktop\\Cypress_Test\\cypress\\fixtures\\logindetails.xlsx"; 
        const sheetName = 'login'; 
  
        cy.readExcelRaw(filePath, sheetName).then((data) => {
            const headers = data[0]; // First row (header row)
            const rowData = data[1]; // Second row (first data row)         
            const userdata = headers.reduce((acc, header, index) => {
              acc[header] = rowData[index];
              return acc;
            }, {});
            cy.log(JSON.stringify(userdata)); 
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.email);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password);
        cy.get('.oxd-button').click();   
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
        .should('have.text','PIM');
      });
    });    


    it("should perform the datadriven fetch from excel for multiple data's", () => {
        const filePath = "C:\\Users\\Dell\\Desktop\\Cypress_Test\\cypress\\fixtures\\orange_excel.xlsx"; 
        const sheetName = 'login'; 
    
        cy.readExcelRaw(filePath, sheetName).then((data) => {
            const headers = data[0]; 
            data.slice(1).forEach((rowData) => {
                const userdata = headers.reduce((acc, header, index) => {
                    acc[header] = rowData[index];
                    return acc;
                }, {});
    
                cy.visit('https://opensource-demo.orangehrmlive.com/');
                cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(userdata.username);
                cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(userdata.password);
                cy.get(".oxd-button").click();  

                if (userdata.username === 'Admin' && userdata.password === 'admin123') {
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
                        .should('have.text', userdata.expected);
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();
    
                    // Logout
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();       
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                } else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text', userdata.expected);
                }  
            });
        });
    });
    it("should perform the datadriven fetch from excel directly", () => {
        cy.visit("http://register.rediff.com/register/register.php?FormName=user_details");

        const excelFilePath = "C:\\Users\\Dell\\Desktop\\Cypress_Test\\cypress\\fixtures\\rediff_excel.xlsx";
        const sheetName = "Details";

        cy.readExcelRaw(excelFilePath, sheetName).then((data) => {
            const headers = data[0]; // First row (header row)
            const rowData = data[1]; // Second row (first data row)

            const user = headers.reduce((acc, header, index) => {
                acc[header] = rowData[index];
                return acc;
            }, {});
            cy.log(JSON.stringify(user));

            cy.get('[width="200"] > input').type(user.username);
            cy.get("[valign='bottom'] > [type='text']").type(user.email);
            cy.get('.btn_checkavail').click();
            cy.get("div[id='check_availability'] b:nth-child(1)").should('have.text', user.expcheckAvail);
            cy.get("#newpasswd").type(user.password);
            cy.get("#newpasswd1").type(user.cnfmpassword);
            cy.get('.nomargin').check();
            cy.get(':nth-child(2) > [colspan="3"] > select').select('What is your favourite food?');
            cy.get('#div_hintQS > .f14 > tbody > :nth-child(4) > [width="185"] > input').type(user.food);
            cy.get(':nth-child(6) > :nth-child(3) > input').type(user.motherName);
            cy.get("#mobno").type(user.mobile);
            cy.get("select[name*='DOB_Day']").select(user.day);
            cy.get("select[name*='DOB_Month']").select(user.month);
            cy.get('[value="m"]').should('be.checked');
            cy.get("#country").select(user.country);
            cy.get(':nth-child(1) > [colspan="3"] > select').select(user.city);
            cy.url().should('contain','/register')
        });
    });
    it("should perform the datadriven fetch from excel for contact sales", () => {
        cy.visit("https://www.orangehrm.com/en/book-a-free-demo");
        cy.get("div[class='d-flex web-menu-btn'] li:nth-child(2) a:nth-child(1)").click(); 

        const excelFilePath = "C:\\Users\\Dell\\Desktop\\Cypress_Test\\cypress\\fixtures\\orange_excel.xlsx";
        const sheetName = "Details";

        cy.readExcelRaw(excelFilePath, sheetName).then((data) => {
            const headers = data[0]; // First row (header row)
            const rowData = data[1]; // Second row (first data row)

            const user = headers.reduce((acc, header, index) => {
                acc[header] = rowData[index];
                return acc;
            }, {});
            cy.log(JSON.stringify(user));

            cy.get("#Form_getForm_FullName").type(user.fullname);
            cy.get("#Form_getForm_Contact").type(user.mobile);
            cy.get("#Form_getForm_Email").type(user.email);
            cy.get("#Form_getForm_Country").select(user.country);
            cy.get("#Form_getForm_NoOfEmployees").select("11 - 15");
            cy.get("#Form_getForm_JobTitle").type(user.jobTitle);
            cy.get("#Form_getForm_Comment").type(user.comments);
            cy.url().should('contain','/contact-sales');
        });
    });    
});
  