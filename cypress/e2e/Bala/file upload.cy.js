describe("file upload",()=>
{
    it("upload a single file",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
                cy.get('input[type="file"]')
                .attachFile("logo-title.png")
        
                cy.get("form[id='singleFileForm'] button[type='submit']")
                .click()
        
                cy.get("#singleFileStatus").should
                ('contain',"Single file selected: logo-title.png, Size: 105136 bytes, Type: image/png")
    })
    it("upload a multiple file",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/");
                
                
                const filesToUpload = [
                  "logo-title.png",
                  "logo-title - Copy.png",
                  "logo-title - Copy (2).png"
                ];
            
                cy.get('#multipleFilesInput')
                  .attachFile(filesToUpload); 
            
                
                cy.get("form[id='multipleFilesForm'] button[type='submit']")
                  .click();
    })
    it("upload a csv file",()=>
    {
        
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('input[type="file"]')
        .attachFile("contact.csv")

        cy.get("form[id='singleFileForm'] button[type='submit']")
        .click()

        cy.get("#singleFileStatus").should
        ('contain',"Single file selected: contact.csv, Size: 209 bytes, Type: text/csv")
    })
    it("upload a pdf file",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('input[type="file"]')
        .attachFile("downloaded_file.pdf")

        cy.get("form[id='singleFileForm'] button[type='submit']")
        .click()

        

    })
})