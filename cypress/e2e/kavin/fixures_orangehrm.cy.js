import 'cypress-iframe'
describe('Fixures data', () => {
    it('Book demo page retrive the data from fixure', () => {
    cy.visit('https://www.orangehrm.com/en/book-a-free-demo');
    cy.fixture('orange').then( (data)=>{
    cy.get("#Form_getForm_FullName").type(data.fullname);
    cy.get("#Form_getForm_Email").type(data.email);
    cy.get("#Form_getForm_CompanyName").type(data.comName);
    cy.get("#Form_getForm_Country").select(data.country)
    cy.get("#Form_getForm_Contact").type(data.mobile);
    cy.frameLoaded("iframe[title='reCAPTCHA']");
    cy.iframe("iframe[title='reCAPTCHA']").find(".recaptcha-checkbox-border").click();
    cy.pause();
    cy.get("#Form_getForm_action_submitForm").should('be.visible')
    cy.get("#Form_getForm_action_submitForm").click();   
    cy.get("div[class='thank-page-info'] h1")
    .should('contain',data.exp);
    }) 
 });  
    it("Book demo page retrieve data from excel", function() {
        cy.visit("https://www.orangehrm.com/en/book-a-free-demo");
        const excelFilePath ="C:\\Users\\Dell\\Desktop\\MOM_Bench\\cypress\\fixtures\\orange_excel.xlsx";
        const sheetName = "Details";
        cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
         (user) => {
            cy.get("#Form_getForm_FullName").type(user[0].fullname);
            cy.get("#Form_getForm_Email").type(user[0].email);
            cy.get("#Form_getForm_CompanyName").type(user[0].comName);
            cy.get("#Form_getForm_Country").select(user[0].country)
            cy.get("#Form_getForm_Contact").type(user[0].mobile);
            cy.frameLoaded("iframe[title='reCAPTCHA']");
            cy.iframe("iframe[title='reCAPTCHA']").find(".recaptcha-checkbox-border").click();
            cy.pause();
            cy.get("#Form_getForm_action_submitForm").should('be.visible')
            cy.get("#Form_getForm_action_submitForm").click();   
            cy.get("div[class='thank-page-info'] h1")
            .should('contain',user[0].exp);
    })
});
    it('Contact sales retrive the data from fixure', () => {
        cy.visit('https://www.orangehrm.com/en/book-a-free-demo');
        cy.get("div[class='d-flex web-menu-btn'] li:nth-child(2) a:nth-child(1)").click(); 
        cy.fixture('orange').then( (data)=>{
        cy.get("#Form_getForm_FullName").type(data.fullname);
        cy.get("#Form_getForm_Contact").type(data.mobile);
        cy.get("#Form_getForm_Email").type(data.email);
        cy.get("#Form_getForm_Country").select(data.country)
        cy.get("#Form_getForm_NoOfEmployees").select(data.empCount) 
        cy.get("#Form_getForm_JobTitle").type(data.jobTitle);
        cy.get("#Form_getForm_Comment").type(data.comments);
        cy.frameLoaded("iframe[title='reCAPTCHA']");
        cy.iframe("iframe[title='reCAPTCHA']").find(".recaptcha-checkbox-border").click();
        cy.pause();
        cy.get("#Form_getForm_action_submitForm").should('be.visible')
        cy.get("#Form_getForm_action_submitForm").click();   
        cy.get("div[class='thank-page-info'] h1")
        .should('contain',data.exp);
        }) 
    });  
    it("Contact Sales retrieve data from excel", function() {
        cy.visit("https://www.orangehrm.com/en/book-a-free-demo");
        cy.get("div[class='d-flex web-menu-btn'] li:nth-child(2) a:nth-child(1)").click(); 
        const excelFilePath ="C:\\Users\\Dell\\Desktop\\MOM_Bench\\cypress\\fixtures\\orange_excel.xlsx";
        const sheetName = "Details";
        cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
        (user) => {
            cy.get("#Form_getForm_FullName").type(user[0].fullname);
            cy.get("#Form_getForm_Contact").type(user[0].mobile);
            cy.get("#Form_getForm_Email").type(user[0].email);
            cy.get("#Form_getForm_Country").select(user[0].country)
            cy.get("#Form_getForm_NoOfEmployees").select(user[0].empCount)  
            cy.get("#Form_getForm_JobTitle").type(user[0].jobTitle);
            cy.get("#Form_getForm_Comment").type(user[0].comments);
            cy.frameLoaded("iframe[title='reCAPTCHA']");
            cy.iframe("iframe[title='reCAPTCHA']").find(".recaptcha-checkbox-border").click();
            cy.pause();
            cy.get("#Form_getForm_action_submitForm").should('be.visible')
            cy.get("#Form_getForm_action_submitForm").click();   
            cy.get("div[class='thank-page-info'] h1")
            .should('contain',user[0].exp);
        })
    });
});