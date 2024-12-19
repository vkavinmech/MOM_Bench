describe("upload a file",()=>{
    it("upload a file",()=>{
        cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html");
        cy.get("input[name='userfile']").attachFile("register.json");
        cy.get('[name="userfile"]').should("be.visible");
        cy.get("input[value='Send File']").should("be.visible").and("not.be.disabled").contains("Send File");
        //cy.get("input[value='Send File']").click();


    })
    it("upload a json file",()=>{
        cy.visit("https://practice.expandtesting.com/upload");
        cy.get("#fileInput").attachFile("rediff.json");
        cy.get("#fileSubmit").click();
        cy.get('#uploaded-files > p').and("be.visible");

    })
    it("upload a file",()=>{
        cy.visit("https://demo.automationtesting.in/Register.html");
        cy.xpath("(//input[@id='imagesrc'])[1]").attachFile("rediff.json");
    })
    it("upload a file in automation website",()=>{
        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("new.csv");
        cy.get('#file-submit').click();
        cy.get('h3').should("have.text","File Uploaded!");
    })
    it("upload a multiple files",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        const Files=("new.csv","TestData.json");
        cy.xpath("(//input[@id='multipleFilesInput'])[1]").attachFile(Files);


    })
})