describe("Alert",()=>
{
    it("Normal Alerts",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsAlert()']").click();
        cy.on("window:confirm",(al)=>
        {
          expect(al).to.contains("I am a JS Alert");
           assert.equal(al,"I am a JS Alert ");
        })
        cy.get("#result").should("have.text","You successfully clicked an alert");
    })
    it.skip("Confirm alert",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:confirm",(al1)=>
        {
            expect(al1).to.equal.contains("I am a JS Confirm");
        })
        cy.on("window:confirm",()=>true);
        cy.xpath('//p[text()="You clicked: Ok"]').should("have.text","You clicked: Ok");
    
    })
    it("prompt alert",()=>
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("welcome");

        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.on("window:prompt",()=>false);
        cy.get("#result").should("have.text","You entered: welcome");

    })
    it("Authenatication window",()=>
    {
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
        cy.xpath("//h3[normalize-space()='Basic Auth']").should("have.text","Basic Auth");
                        
        })
})
