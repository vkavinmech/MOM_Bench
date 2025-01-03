describe("take screenshot and videos",()=>
{
    it("screenshot",()=>
    {
        cy.visit("https://www.qaoncloud.com/")
        cy.screenshot("home page")
        cy.wait(5000)
        cy.get(".elementor-button-text").screenshot("contact button")
    })
    it("automatically taking screenshot on failures",()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('[name = "username"]').should('have.attr','placeholder',"Nothing")
       cy.get('[name="password"]').type("admin123")
        cy.get('[type="submit"]').click()
       cy.location('href').should('include',"php/dashboard/index")
    })
    it('captures a screenshot for different viewport sizes', function() {
        
        
        cy.viewport(375, 667);
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name = "username"]').should('be.visible')
        cy.get('[name="password"]').should('be.visible')
         cy.screenshot('mobile-view');
      
        
        cy.viewport(768, 1024);
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name = "username"]').should('be.visible')
        cy.get('[name="password"]').should('be.visible')
        cy.screenshot('tablet-view');
    
        cy.viewport(1280, 1024); 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[name = "username"]').should('be.visible')
        cy.get('[name="password"]').should('be.visible')
        cy.screenshot('desktop-view')

       
            cy.viewport(1280, 1024); 
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          
            
            cy.get('body').should('be.visible');
            cy.get('[name="username"]').should('be.visible'); 
            cy.get('[name="password"]').should('be.visible');
          
            
            cy.screenshot('with-options', {
              capture: 'viewport',   
              quality: 90,           
              scale: true,            
              clip: {                 
                x: 0,
                y: 0,
                width: 500,
                height: 500
              }
            }); 
          });
          it("register website",()=>
        {
            cy.visit("https://demo.automationtesting.in/Register.html")
            cy.get("a[href='Register.html']").should('be.visible')
            cy.get("input[placeholder='First Name']").type("bala").should('have.value',"pooja")
        })

      });
  