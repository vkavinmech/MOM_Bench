describe("Alert using testing website",()=>
{
    it("Confirm Alert1",()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.get(".btn.btn-primary").click();
        cy.on("window:confirm",(w)=>{
            expect(w).to.equal("Press a Button !");
         })
        cy.on("window:confirm",()=>false);
        cy.get("#demo").should("have.text","You Pressed Cancel");
       
       
    })
    it("Prompt Alert",()=>{
        cy.visit("https://demo.automationtesting.in/Alerts.html");
        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("Automation Testing User");

        })
        cy.get(".btn.btn-info").click();
        cy.on("window:prompt",()=>true);
        cy.xpath("(//p[@id='demo1'])[1]").should("have.text","Hello Automation Testing User How are you today");

    })
})