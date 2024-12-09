describe("Custom",()=>{
    beforeEach("Url",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
    
    it("Custom commands for login with valid credentials",()=>{
       cy.clicking("Admin","admin123");
       cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index").and("include","opensource-demo");
       })
       it("Custom commands for login with Invalid username",()=>{
        cy.clicking("admin","rdmin123");
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        })
        it("Custom commands for login with Invalid password",()=>{
            cy.clicking("admin","vdmin123");
            cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            })
    })