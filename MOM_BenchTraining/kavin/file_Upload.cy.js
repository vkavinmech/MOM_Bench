import 'cypress-file-upload';
describe('File upload', () => {
    it('upload the single file', () => {
    cy.visit('http://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile('test.pdf');
    cy.get('#file-submit').click();
    cy.wait(5000);
    cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
     });
    it('uploaded file rename', () => {
        cy.visit('http://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath:'test.pdf',fileName:'myfile.pdf'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!');
    });
    it('uploaded file drag and drop', () => {
        cy.visit('http://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('test.pdf',{subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains("test.pdf");
    });
    it('file upload - Shadow Dom', () => {
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('test.pdf');
        cy.wait(5000);
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('test.pdf');
    });
    }); 