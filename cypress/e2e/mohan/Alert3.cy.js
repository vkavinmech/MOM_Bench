describe("Alert",()=>{
    it("Alerts",()=>
    {
        cy.visit("https://vinothqaacademy.com/alert-and-popup/");
        cy.get("button[name='alertbox']").click();
        cy.on("window:confirm",(win)=>
        {
            expect(win).to.equal("I am an alert box!");
        })
        cy.get("#demotwo").should("have.text","You clicked on OK!");

       
    })
    it("Confirm alert",()=>
    {
        cy.visit("https://vinothqaacademy.com/alert-and-popup/");
        cy.get("button[name='confirmalertbox']").click();
        cy.on("window:confirm",(win1)=>{
            expect(win1).to.equal("Confirm pop up with OK and Cancel button");
            assert.equal(win1,"Confirm pop up with OK and Cancel button");
        })
        cy.on("window:confirm",()=>false);
        cy.get("#demo").should("have.text","You clicked on Cancel!");
    })
    it("Prompt alert",()=>{
        cy.visit("https://vinothqaacademy.com/alert-and-popup/");
        cy.window().then((win2)=>{
            cy.stub(win2,"prompt").returns("Yes/No");

        })
        cy.get("button[name='promptalertbox1234']").click();
        cy.on("window:prompt",()=>true);
        cy.get("#demoone").should("have.text","Sad to hear it ! ");
    })
})