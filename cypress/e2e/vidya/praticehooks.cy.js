describe("Practice for hooks", () =>{
    before( () => {

        cy.log("execute before hooks")

    })

    beforeEach( () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.contains("button", "Login").click()

        cy.log("execute before each hooks")
    })

    it("1st block", () =>{
        
        cy.contains("Admin").click()
        cy.log("1st block run")

    })
    it("2nd block", () =>{

        cy.contains("Dashboard").click()
        cy.log("2nd block run")

    })

})