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
    it("custom commands for dropdown",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.selectCountryByValue('Canada')  
        cy.selectCountryByValue('France')  
        cy.selectCountryByValue('Japan')  
        cy.selectCountryByValue('Germany')  
        
    })
    it("custom commands for validating the dates",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.selectDate('#datepicker', '15'); 
        cy.selectDate('#datepicker', '16');  
        cy.selectDate('#datepicker', '17'); 
        cy.selectDate('#datepicker', '18'); 
        cy.selectDate('#datepicker', '19'); 

    })
    it("custom commands for month navigation",()=>
    {
        
  it('should navigate to next and previous months', () => {
    cy.visit('https://testautomationpractice.blogspot.com/'); 
    cy.navigateToNextMonth();
    cy.get('.ui-datepicker-title').should('contain', 'January'); 
    cy.navigateToPreviousMonth();
    cy.get('.ui-datepicker-title').should('contain', 'December'); 
    cy.get(".ui-datepicker-year").should('contain',2024)
    cy.navigateToNextMonth();
    cy.get(".ui-datepicker-year").should('contain',2025)
    cy.navigateToNextMonth();
    cy.get('.ui-datepicker-title').should('contain', 'February');
    cy.get(".ui-datepicker-year").should('contain',2025)


  });

    })
    
})