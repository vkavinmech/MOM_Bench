describe("Handling alert pop-ups",()=>{
    beforeEach("Url",()=>{
        cy.visit("https://vinothqaacademy.com/alert-and-popup/")
    })
    it("Handle simple alert",()=>{
        cy.get("button[name='alertbox']").click();
        cy.on("window:alert",(al)=>{
            expect(al).to.equal("I am an alert box!");
        })
        cy.get("#demotwo").should("have.text","You clicked on OK!")
    
    })
    it("Handle confirm alert",()=>{
        cy.get("button[name='confirmalertbox']").click();
        cy.on("window:confirm",(al1)=>{
            expect(al1).to.contains("Confirm pop up with OK and Cancel button");
        })
        cy.on("window:confirm",()=>false);
        cy.get("#demo").should("have.text","You clicked on Cancel!");

    })
    it("Handle prompt alert",()=>{
        cy.window().then((al2)=>{
            cy.stub(al2,"prompt").returns("Hello Mohan");
        })
        cy.get("button[name='promptalertbox1234']").click();
        cy.get("#demoone").should("have.text","Sad to hear it ! ")
    })
})