describe('Fixures data', () => {
    
    it('retrive the data from fixure', () => {
    cy.visit('http://register.rediff.com/register/register.php?FormName=user_details');
    cy.fixture('rediff').then( (data)=>{
        cy.get('[width="200"] > input').type(data.username);
        cy.get("[valign='bottom'] > [type='text']").type(data.email);
        cy.get('.btn_checkavail').click();
        cy.get("div[id='check_availability'] b:nth-child(1)").should('have.text',data.expcheckAvail);
        cy.get("#newpasswd").type(data.password);
        cy.get("#newpasswd1").type(data.cnfmpassword);
        cy.get('.nomargin').check();
        cy.get(':nth-child(2) > [colspan="3"] > select').select(data.secQue);
        cy.get('#div_hintQS > .f14 > tbody > :nth-child(4) > [width="185"] > input').type(data.secQueAns);
        cy.get(':nth-child(6) > :nth-child(3) > input').type(data.motherName);
        cy.get("#mobno").type(data.mobile);
        cy.get("select[name*='DOB_Day']").select(data.day);
        cy.get("select[name*='DOB_Month']").select(data.month);
        cy.get("select[name*='DOB_Year']").select(data.year);
        cy.get('[value="m"]').should('be.checked');
        cy.get("#country").select(data.country);
        cy.get(':nth-child(1) > [colspan="3"] > select').select(data.city);
        cy.pause();
        cy.get("#Register").click();
        cy.get('#tblcrtac > :nth-child(1) > :nth-child(1) > .f22').should('have.text',data.verifyOtp)
    }) 
 });  
 it("Retrieve data from excel", function() {
    cy.visit("http://register.rediff.com/register/register.php?FormName=user_details");
    const excelFilePath ="C:\\Users\\Dell\\Desktop\\Cypress_Test\\cypress\\fixtures\\rediff_excel.xlsx";
    const sheetName = "Details";
    cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then(
      (user) => {
        cy.get('[width="200"] > input').type(user[0].username);
        cy.get("[valign='bottom'] > [type='text']").type(user[0].email);
        cy.get('.btn_checkavail').click();
        cy.get("div[id='check_availability'] b:nth-child(1)").should('have.text',user[0].expcheckAvail);
        cy.get("#newpasswd").type(user[0].password);
        cy.get("#newpasswd1").type(user[0].cnfmpassword);
        cy.get('.nomargin').check();
        cy.get(':nth-child(2) > [colspan="3"] > select').select('What is your favourite food?');
        cy.get('#div_hintQS > .f14 > tbody > :nth-child(4) > [width="185"] > input').type(user[0].food);
        cy.get(':nth-child(6) > :nth-child(3) > input').type(user[0].motherName);
        cy.get("#mobno").type(user[0].mobile);
        cy.get("select[name*='DOB_Day']").select(user[0].day);
        cy.get("select[name*='DOB_Month']").select(user[0].month);
        cy.get("select[name*='DOB_Year']").select(user[0].year);
        cy.get('[value="m"]').should('be.checked');
        cy.get("#country").select(user[0].country);
        cy.get(':nth-child(1) > [colspan="3"] > select').select(user[0].city);
        cy.pause();
        cy.get("#Register").click();  
        cy.get('#tblcrtac > :nth-child(1) > :nth-child(1) > .f22').should('have.text',"Verify OTP")
        })
    });
});