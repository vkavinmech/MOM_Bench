






describe('File uploads ',(()=>{

    it('single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile('theja photo.jpg');
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')



    })


    it.only('File upload- Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath:'theja photo.jpg',fileName:'photo.jpg'});
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')



        
    })

    it('file upload - Drag and Drop ',()=>{


        
    })

    it('Multiple file upload- ',()=>{


        
    })

    it(' file upload- shadow dom ',()=>{


        
    })




















}))