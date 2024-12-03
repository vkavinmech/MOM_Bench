

describe('My First Test', () => {
    it('Verify the title with positive test ', () => {

    //launching the url
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 

    //validating url should include orangeHRMlive.com or not in the url
    cy.url().should('include','orangehrmlive.com') 

    //validating the url 
     cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 

    //validating the title of the page
    cy.title().should('eq',"OrangeHRM") 

    //validating the logo visibility
    cy.get('[alt="company-branding"]').should('be.visible') 

    //validating logo is exist or not 
    .and('exist') 

    //validating username text filed is visible or not
    cy.get('[name="username"]').should('be.visible')

    //validating username text field is exist or not 
    .and('exist')

    //providing the username as Admin
    cy.get('[name="username"]').type("Admin") 

    //validating the username value provided correctly or not
    cy.get('[name="username"]').should('have.value','Admin') 

    //password field should be visible
    cy.get('[name="password"]').should('be.visible')

    //password field should be exist
    .and('exist')

    // providing the password as admin123
    cy.get('[name="password"]').type("admin123")

    //validating the password is provided correctly or not 
    cy.get('[name="password"]').should('have.value','admin123')

    //clicking the login button redirected to the dashboard page
    cy.get('[type="submit"]').click() 

    // validating dashboard url page
    cy.location('href').should('include', 'dashboard/index')

   /* let expName = "Nguyễn Trà user"; // validating username of the dashboard page

    cy.get('.oxd-userdropdown-tab').then( (x)=>
    {
        let actname = x.text()
        expect(actname).to.equal(expName)
    })*/

        //redirecting to the employee list
        cy.get(':nth-child(2) > .oxd-main-menu-item') 
        .should('be.visible')  // Ensure the element is visible
        .click()

        //validating the page is redirected to the employee list or not
        cy.location('href').should('include', 'pim/viewEmployeeList')

        //validating the url of the employee list page 
        cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

        // Clicks on the last checkbox
        cy.get('.oxd-checkbox-input').last().click() 

        // Click the second checkbox
        cy.get('.oxd-checkbox-input').eq(2).click()  

        //selecting all the checkboxes at a time
        cy.get('.oxd-checkbox-input')
        .click({ multiple: true }); // Click all checkboxes

         // Click to open the  employee status dropdown
        cy.get('.oxd-select-wrapper .oxd-select-text').eq(0).click();
       
        // Find the 'Freelance' option and click it
        cy.contains('Freelance').click();

        //validating the text present in that dropdown field
        cy.get('.oxd-select-wrapper .oxd-select-text').eq(0).should('have.text','Freelance') 

        //click to open the current employees dropdown 
        cy.get('.oxd-select-wrapper .oxd-select-text').eq(1).click();

        // Find the 'Past Employees Only' option and click it
        cy.contains('Past Employees Only').click();
        
        //validating the text present in that dropdown field
        cy.get('.oxd-select-wrapper .oxd-select-text').eq(1).should('have.text','Past Employees Only') 

         //click to open the job title dropdown 
         cy.get('.oxd-select-wrapper .oxd-select-text').eq(2).click();

         // Find the 'Acoount Assistant' option and click it
        cy.contains('Account Assistant').click();

        //validating the text present in that dropdown field
        cy.get('.oxd-select-wrapper .oxd-select-text').eq(2).should('have.text','Account Assistant') 

        //click to open the Sub unit dropdown 
        cy.get('.oxd-select-wrapper .oxd-select-text').eq(3).click();

        // Find the 'Engineering' option and click it
        cy.contains('Engineering').click();

        //validating the text present in that dropdown field
        cy.get('.oxd-select-wrapper .oxd-select-text').eq(3).should('have.text','Engineering') 







      
      

    })
 
 
 })
   
      
      
  