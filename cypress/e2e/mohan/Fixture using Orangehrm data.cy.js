describe("Test Multiple data",()=>{
    it("Test multiple data for login function",()=>{
        cy.fixture("Orange Hrm").then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach((userdata)=>{
      cy.get("input[placeholder='Username']").type(userdata.username);
        //cy.get("input[placeholder='Username']").should("have.value","Admin");
        cy.get("input[placeholder='Password']").type(userdata.password);
       // cy.get("input[placeholder='Password']").and("have.value","admin123");
        cy.get("button[type='submit']").click();
            
            if(userdata.username=="Admin" && userdata.password=="admin123"){
                cy.log("Valid data........")
                cy.url().and("includes","dashboard");
                cy.xpath("(//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon'])[1]").click();
                cy.xpath("(//a[normalize-space()='Logout'])[1]").click();
            }
            else{
                cy.log("invalid data");
                //cy.get('.oxd-alert-content > .oxd-text').should("have.text","userdata.message");
            }
        })
    })
})
})