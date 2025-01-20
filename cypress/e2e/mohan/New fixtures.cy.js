describe("Fixtures",()=>{
    it("Visiting to flipkart to Buy Black Iphone ",()=>{
        cy.visit("https://www.flipkart.com/");
        cy.url().should("includes","flipkart");
        cy.get('.Pke_EE').clear().type("Mobiles");
        cy.get("button[type='submit'] svg").click();
        cy.xpath("(//a[@target='_blank'])[1]").invoke("removeAttr","target").click();
        cy.get('.UOCQB1 > .hl05eU > .Nx9bqj').invoke('text').then((price)=>{
           const actualprice=`price:${price}`;
           cy.log(actualprice)
        })
       // let price="₹72,900";
       // cy.get('#swatch-0-color > .GK7Ljp > ._0QyAeO').click();
       // cy.get('#swatch-0-storage > .CDDksN').click();
        cy.get('#pincodeInputId').type("638311");
        cy.get('form > .QqFHMw').click({force:true})
    })
    it("Read data from excel for reg page",()=>{
        cy.visit("https://demo.wpeverest.com/user-registration/simple-registration-form/")
        const filepath = "cypress/fixtures/data.xlsx"; 
        let sheetname = "Sheet3";
        
        cy.task('readExcel',{filepath,sheetname}).then((data)=>{
            let count=3;
            for(let i=0;i<count;i++){
            cy.get('#first_name').clear().type(data[i].Firstname)
            cy.get('#last_name').clear().type(data[i].Lastname)
            cy.get('#user_login').clear().type(data[i].Username);
            cy.get('#user_email').clear().type(data[i].Email);
            cy.get('#user_pass').clear().type(data[i].Userpassword)
            cy.get('#user_confirm_password').clear().type(data[i].Confirmpassword);
            cy.get('#description').clear().type(data[i].Userbio)
            
            }
        })

    })
    it("Read data from excel to login page",()=>{
        cy.visit("http://testphp.vulnweb.com/login.php")
        const filepath = "cypress/fixtures/data.xlsx"; 
        let sheetname = "Sheet4";
        cy.task("readExcel",{filepath,sheetname}).then((data)=>{
            for(let i=0;i<data.length;i++){

            cy.get(':nth-child(1) > :nth-child(2) > input').clear().type(data[i].Username)
            cy.get(':nth-child(2) > :nth-child(2) > input').clear().type(data[i].Password)
    
            }
        })
    })
    it("Read data for practice automation",()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/");
        let filepath="cypress/fixtures/Book1.xlsx";
        let sheetname="Sheet3"
        cy.task("readExcel",{filepath,sheetname}).then((data)=>{
            for(let i=0;i<data.length;i++){
                cy.get('#username').clear().type(data[i].Username)
                cy.get('#password').clear().type(data[i].Password)
                cy.xpath("//button[@id='submit']").click()


                if(data[i].Username=="student"  && data[i].Password=="Password123"){
                    cy.log("welcome");
                    cy.xpath("(//h1[normalize-space()='Logged In Successfully'])[1]").invoke("text").then((post)=>{
                        cy.log(post)
                    })
                    cy.xpath("(//a[normalize-space()='Log out'])[1]").click()

                }
                else{
                    cy.log("Invalid credentials")
                }

            }
        })
    })
    it.only("Read data from excel",()=>{
        cy.visit("https://practice.expandtesting.com/login")
        let filepath="cypress/fixtures/data.xlsx";
        let sheetname="Sheet4"
        cy.task("readExcel",{filepath,sheetname}).then((data)=>{
            for(let i=0;i<data.length;i++){
                cy.xpath("(//input[@id='username'])[1]").clear().type(data[i].Username);
                cy.xpath("(//input[@id='password'])[1]").clear().type(data[i].Password);
                cy.get('#login > .btn').click()

                if(data[i].Username=="test"  &&data[i].Password=="test"){
                    cy.log("welcome");
            
                    cy.get('.icon-2x').click()
                }
                else{
                    cy.log("Invalid credentials")
                }
                
            }
    })
    })
})
            