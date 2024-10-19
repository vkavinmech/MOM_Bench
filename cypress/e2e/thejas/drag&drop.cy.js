

describe('File uploads ',(()=>{

    it('single file upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile('theja photo.jpg');
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')

    })


    it('File upload- Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath:'theja photo.jpg',fileName:'photo.jpg'});
        cy.get('#file-submit').click();
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')        
    })

    it(' upload Multiple file ',()=>{
        cy.visit("https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new");
        
        cy.get('#ember336').scrollIntoView()
        cy.get('#ember336').selectFile(["cypress\\fixtures\\seleniumImage.png","cypress\\fixtures\\cypressImage.png"])

    })

    it("drag and drop",()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette')
        cy.scrollTo('bottom')
        cy.get("#box1").drag("#box101",{force: true})
        cy.get("#box2").drag("#box102",{force: true})
        cy.get("#box3").drag("#box103",{force: true})
    })
    



}))