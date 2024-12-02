describe("Multiple File Upload Test", () => {
    it("Uploads multiple files successfully", () => {
        
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

        
        const files = ["cmd.png", "fix1.png", "fix2.png"];

       
        cy.get("#filesToUpload").attachFile(files); 

       
        files.forEach((file) => {
            cy.get("#fileList").should("contain.text", file);
        });
    });
});
