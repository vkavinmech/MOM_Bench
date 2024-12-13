describe("file upload",()=>
{
    it("upload a file and assert a name",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('input[type="file"]')
        .attachFile("logo-title.png")

        cy.get("form[id='singleFileForm'] button[type='submit']")
        .click()

        cy.get("#singleFileStatus").should
        ('contain',"Single file selected: logo-title.png, Size: 105136 bytes, Type: image/png")
    })
})
describe("file upload", () => {
    it("upload multiple files and assert names", () => {
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
    });
  });
  