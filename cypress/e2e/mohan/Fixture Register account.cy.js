describe("Register account",()=>{
    it("register",()=>{
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");
        cy.fixture("register").then((value)=>{
            cy.get('#input-firstname').type(value.firstname);
            cy.xpath("(//input[@id='input-lastname'])[1]").type(value.lastname);
            cy.xpath("(//input[@id='input-email'])[1]").type(value.email);
            cy.xpath("(//input[@id='input-telephone'])[1]").type(value.phone);
            cy.xpath("(//input[@id='input-password'])[1]").type(value.password);
            cy.xpath("(//input[@id='input-confirm'])[1]").type(value.confirm);
            cy.xpath("(//label[@for='input-agree'])[1]").click();
            cy.xpath("(//input[@value='Continue'])[1]").click();
           // cy.get(".alert.alert-danger.alert-dismissible").should("have.text","Warning: E-Mail Address is already registered!'");
        })
    })
    it("Login",()=>{
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        cy.fixture("ecommerce.json").then((login)=>{
            login.forEach((datas)=>{
                cy.xpath("(//input[@id='input-email'])[1]").type(datas.email);
                cy.xpath("(//input[@id='input-password'])[1]").type(datas.pass);
                cy.get('form > .btn').click();
                if(datas.email=="skmohanraj7471@gmail.com"&&datas.pass=="mohanraj7471"){
                    cy.log("*********Valid data********");
                    cy.get("img[alt='Poco Electro']").should("be.visible").then((img)=>{
                        cy.log(img.text());
                    })
                   
                cy.xpath("(//a[contains(text(),'Logout')])[1]").click();
                cy.get('.list-group > [href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').click();
                }
                else{
                    cy.get('#account-login > .alert').should("be.visible").and("have.text"," Warning: No match for E-Mail Address and/or Password.");
                    cy.log("Invalid data...........");
                }
            })
        })
    })
})