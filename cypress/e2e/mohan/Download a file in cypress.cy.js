describe("download",()=>{
    it("download in cypress",()=>{
        cy.visit("https://commitquality.com/practice-file-download");
        cy.get("div[class='container'] div button").click();
        cy.readFile("cypress\\downloads\\dummy_file.txt").should("contain","This is a dummy text file");
        })

 it('download plugin to download a file', () => {
        
        let pdfUrl = 'https://demo.automationtesting.in/FileDownload.html';
        let destinationFolder = 'cypress/downloads';
        let fileName = 'new.doc';
        cy.downloadFile(pdfUrl, destinationFolder, fileName);
        cy.readFile(`${destinationFolder}/${fileName}`).should('exist').and("includes","<!DOCTYPE html>")
    })


})