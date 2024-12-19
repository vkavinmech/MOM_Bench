describe("File Download and Parsing", () => {
    it("Download and verify text file content", () => {
        cy.visit("https://commitquality.com/practice-file-download");
        cy.get("button").contains("Download File").click();
        cy.readFile("cypress\\downloads\\dummy_file.txt").should(
            "eq",
            "This is a dummy text file."
        );
    });

    it("Download image and PDF files and verify PDF content", () => {
        // Download an image file
        cy.downloadFile(
            "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
            "mydownloads",
            "example.jpg"
        );

        // Download a PDF file
        cy.downloadFile(
            "https://drive.google.com/uc?export=download&id=1MzNlAleo4QEMUaBBMUVjGOxuNqhjsFLY",
            "mydownloads",
            "downloaded_file.pdf"
        );

        // Parse and verify the content of the PDF file
        cy.task("parsePdf", { filePath: "mydownloads\\downloaded_file.pdf" }).then((pdfData) => {
            // Normalize the text by replacing multiple spaces, tabs, and newlines with a single space
            const normalizedText = pdfData.text.replace(/[\s]+/g, " ").trim();
            cy.log("PDF Content: ", normalizedText);

            
              
        });
    });
});
