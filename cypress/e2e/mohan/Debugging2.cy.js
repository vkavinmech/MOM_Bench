
describe("debugger",()=>{
    it("using debugging concept",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").then((submit)=>{
            debugger;
            submit.click();
        })
        
    })
    
    
it("use debug",()=>{
cy.visit("https://practicetestautomation.com/practice-test-login/");
cy.get("#username").type("student");
cy.get("#password").type("Password123");
cy.get("#submit").click().debug();
cy.get(".post-title").should("be.visible").debug();
})
})