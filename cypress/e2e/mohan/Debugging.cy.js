describe("debuuging the scripts",()=>{
    it("debug the scripts using pause",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#name").type("mohan");
        cy.get("#name").type("mohan@gmail.com");
        cy.pause();
        cy.get("#phone").type("8072250341");
        cy.pause();
        cy.get("#textarea").type("bhavani");
        cy.get("#male").check();
        cy.pause
        cy.get("#sunday").check();
        cy.get("#country").select("Japan");
        cy.pause();
        cy.get("#datepicker").click();
        cy.xpath("(//a[normalize-space()='15'])[1]").click();
        cy.pause();
        cy.get("#txtDate").click();
        cy.xpath("(//a[normalize-space()='25'])[1]").click();

    })
    it("using debug method",()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/");
        cy.get("#username").type("students");
        cy.get("#password").type("Password123");
        cy.get("#submit").click().debug();
    })

    
    it("using log",()=>{
        cy.visit("https://www.qaoncloud.com/");
        cy.xpath("(//img[@title='QAonCloud Logo'])[1]").should("be.visible");
        cy.xpath("(//img[@title='QAonCloud Logo'])[1]").then((txt)=>{
            cy.log(txt.text());
        })
        cy.log("QAoncloud Homepage is Visible to user");
    })

    it.skip('using console.log to print in headless mode', () => {

        cy.visit('https://www.qaoncloud.com/');

        cy.task("log","This is console log : Navigated to QAoncloud home page")

    })

})
