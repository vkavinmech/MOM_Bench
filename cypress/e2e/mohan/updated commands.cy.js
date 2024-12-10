describe("commands",()=>{
    it("Custom commands using orange hrm page to validate",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.add("A","admin123");
        cy.add("admin","admin123");//------>sign in the application
        cy.url().should("include","/dashboard");
        cy.title(),and("contain","OrangeHRM");
        cy.getText("Upgrade");//------>get ui text
        cy.clickText("OrangeHRM");//------->click text
        cy.profile();//verifying profile displaying all elements
        cy.post("Tuesday");////----->update the status
        cy.post("Tuesday evening");
        cy.logout();//------>logout the application


         })
         it("custom commands2 to fill the contact us page present in qaoncloud website",()=>{
            cy.visit("https://www.qaoncloud.com/contact-us");
            cy.fillform(
                "mohan","mohan@gmail.com","988888872"
                
                  )
            cy.fillform(
                 "mohan raj","skmohan7865@gmail.com","9653098745"
                )
         })
            it("search a product in shopping application",()=>{
                cy.website();
                cy.searchproduct("tv");
                cy.searchproduct("mobiles");
            })
         })

