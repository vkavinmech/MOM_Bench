describe("Fixtures using hooks",()=>{
    //let name;
    
before("Orange Hrm Login",function(){
        cy.fixture("Gmail.json").then(function(data){
            this.login=data
           // name=data;
        })
    })
    it("Login function",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type(this.login.username);//----->using this keyword
        //cy.get("input[placeholder='Username']").type(name.username);------>using global variable
        cy.get("input[placeholder='Username']").should("have.value","Admin");
        cy.get("input[placeholder='Password']").type(this.login.password);
       // cy.get("input[placeholder='Password']").type(name.password);---->using global
        cy.get("input[placeholder='Password']").and("have.value","admin123");
        cy.get("button[type='submit']").click();
    })
    it.skip("Login function using without hooks",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture("Gmail.json").then((data1)=>{
         cy.get("input[placeholder='Username']").type(data1.username);
        cy.get("input[placeholder='Username']").should("have.value","Admin");
        cy.get("input[placeholder='Password']").type(data1.password);
        cy.get("input[placeholder='Password']").and("have.value","admin123");
        cy.get("button[type='submit']").click();
    })
    


    })
})