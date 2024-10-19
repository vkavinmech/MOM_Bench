



describe('File uploads ',(()=>{

    it('single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile('test.pdf');
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })

    it.only('File upload- Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath:'test.pdf',fileName:'sample.pdf'});
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')



        
    })


}))