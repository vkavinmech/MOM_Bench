describe("file upload using cypress",()=>{
    before("file upload",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
    })
    it.skip("Upload a json file",()=>{
             cy.xpath("(//input[@id='singleFileInput'])[1]").attachFile("rediff.json");
            cy.get('#singleFileInput').and("be.visible").then((txt)=>{
             cy.log(txt.text());
        })
        

    })
    it("Upload a png file",()=>{
        cy.xpath("(//input[@id='singleFileInput'])[1]").attachFile("Dynamic table.PNG");
        cy.get('#singleFileInput').and("be.visible").then((txt)=>{
         cy.log(txt.text());

    })
})
})