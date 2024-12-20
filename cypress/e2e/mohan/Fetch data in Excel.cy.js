describe("read data from excel",()=>{
    it("Read only one data",()=>{
        cy.parseXlsx("data.xlsx").then((excel)=>{
            const rowCount=Cypress.$(excel[0].data).length;//---------->check the sheet length
            cy.log(rowCount)//////------->printing row length-3
             for(const j=1;j<rowCount; j++){
                const value=excelData[0].data[j];///--------------->printing 1 index values
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
                cy.get("input[placeholder='Username']").type(value[0]);////username printing
                cy.get("input[placeholder='Password']").type(value[1]);/////password printing
                cy.get("button[type='submit']").click();
             }
        })
    })
})