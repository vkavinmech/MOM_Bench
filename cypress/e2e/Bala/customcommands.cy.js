describe("custom commands",()=>
{
    it("handling the link by using custom commands",()=>
    {
        cy.visit("https://www.flipkart.com/")
        cy.clicklinks('Grocery')
        //cy.clicklinks('GROCERY')
       
    })

    it("handling the custom link and login custom command ",()=>
    {
        cy.visit("https://practicetestautomation.com/practice-test-login/")
        cy.login("student" , "Password123")
        cy.url().should('eq',"https://practicetestautomation.com/logged-in-successfully/")
        cy.clicklinks('HOME')
        cy.clicklinks('PRACTICE')
        cy.clicklinks('COURSES')
        cy.clicklinks('BLOG')
        cy.clicklinks('CONTACT')
        cy.url().should('eq',"https://practicetestautomation.com/contact/")
        cy.submitForm("bala" , "aathikesavan" , "bala02aadhi@gmail.com","hai welcome")



    })

    it("login custom command",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.loginapp("Admin" , "admin123")
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.xpath("//li[1]//a[1]//span[1]").click()

       

  
    })

    it("custom command for radio button",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.selectMaleRadioButton();
        cy.selectFemaleRadioButton();
     })
     it("custom commands for checkboxes",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.checkMondayCheckbox();
        cy.uncheckMondayCheckbox();
        
    })
    it.only("custom commands for dropdown",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.selectCountryByValue('Canada')  

    })
    
})