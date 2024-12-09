describe("Myntra",()=>{
    beforeEach("Url",()=>{
        cy.visit("https://www.google.co.in/");
    })
    it("Click the Image button",()=>{
        cy.Buttons("Images");
        cy.url().should("be.equal","https://www.google.co.in/imghp?hl=en&ogbl");
        cy.title().and("eq","Google Images");
    })
    it("Click the Store button",()=>{
        cy.Buttons("Store");
        cy.title().and("eq","Google Store for Google Made Devices & Accessories");
        
    })
    it("Click the Gmail button",()=>{
        cy.Buttons("Gmail");
       
    })
    it("Click the About About",()=>{
        cy.Buttons("About");
        
    })
})
