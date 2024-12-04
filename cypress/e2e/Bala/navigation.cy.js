describe("navigation",()=>
{
    it("verifying the navigation",()=>
    {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    cy.get('[name="username"]').type("Admin") 

    cy.get('[name="password"]').type("admin123")

    cy.get('[type="submit"]').click() 

    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    cy.wait(5000)

    cy.go('back')

    cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.go('forward')

    cy.wait(5000)

    cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
    
})

})

