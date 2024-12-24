describe("Demo ",()=>{
    it("For register page",()=>{
        cy.visit("https://demo.automationtesting.in/Register.html");
        cy.url().should("eq","https://demo.automationtesting.in/Register.html").and("includes","demo");
        cy.get("img[alt='image not displaying']").should("be.visible");
        cy.xpath("(//h1[normalize-space()='Automation Demo Site'])[1]").should("be.visible");
        cy.get("a[href='Index.html']").should("be.visible").and("not.be.disabled").contains("Home");
        cy.get("a[href='WebTable.html']").should("be.visible").and("not.be.disabled").contains("WebTable");
        cy.xpath("(//a[normalize-space()='SwitchTo'])[1]").and("not.be.disabled").contains("SwitchTo");
        cy.xpath("(//a[normalize-space()='Widgets'])[1]").should("be.visible").and("not.be.disabled").contains("Widgets");
        cy.xpath("(//a[normalize-space()='Video'])[1]").should("be.visible").and("not.be.disabled").contains("Video");
        cy.xpath("(//a[normalize-space()='More'])[1]").should("be.visible").and("not.be.disabled").contains("More");
        cy.xpath("(//a[normalize-space()='Practice Site'])[1]").should("be.visible").and("not.be.disabled").contains("Practice Site");
        cy.xpath("(//h2[normalize-space()='Register'])[1]").should("be.visible");
        cy.get("input[placeholder='First Name']").type("mohan");
        cy.get("input[placeholder='Last Name']").type("raj");
        cy.get("input[type='email']").type("mohan@gmail.com");
        cy.get("input[type='tel']").type("8072250341");
        cy.get("input[value='Male']").check().should("be.checked");
        cy.get("#checkbox1").check();
        cy.get("#msdd").click();
        //cy.xpath("(//a[normalize-space()='Danish'])[1]").click();
        cy.get("#Skills").select("C");
        cy.get("span[role='combobox']").click();
        cy.get("input[role='textbox']").type("india").type("{enter}");
        cy.get("#yearbox").select("1996");
        cy.get("select[placeholder='Month']").select("June");
        cy.get("#daybox").select("5");
        cy.get("#firstpassword").type("mohanraj7471");
        cy.get("#secondpassword").type("mohanraj7471");
        cy.get('#submitbtn').should("be.visible").and("not.be.disabled").contains("Submit");
        cy.get("#Button1").should("be.visible").and("not.be.disabled").contains("Refresh");
 })
 it("Writing alerts",()=>{
    cy.visit("https://demo.automationtesting.in/Alerts.html");
    cy.xpath("//div[contains(@class,'nav nav-tabs')]").click();
    cy.on("window:alert",(al)=>{
        expect(al).to.equal("I am an alert box!");
    })
    cy.on("window:alert",()=>true);
    cy.xpath("(//a[normalize-space()='Alert with OK & Cancel'])[1]").click();
    cy.get(".btn.btn-primary").click();
    cy.on("window:confirm",(al1)=>{
        expect(al1).to.equal("Press a Button !")
    })
    cy.on("window:confirm",()=>false);
    cy.xpath("(//p[@id='demo'])[1]").should("have.text","You Pressed Cancel");
    cy.window().then((al3)=>{
        cy.stub(al3,"prompt").returns("Automation Testing user")
    })
    cy.get(".analystic[href='#Textbox']").click();
    cy.get(".btn.btn-info").click();
    cy.on("window:prompt",()=>true);
    cy.get("#demo1").should("have.text","Hello Automation Testing user How are you today");
})
it("File upload",()=>{
    cy.visit("https://demo.automationtesting.in/FileUpload.html");
    cy.get("#input-4").attachFile("rediff.json");
})
it('File Download', () => {
        
    let pdfUrl = 'https://demo.automationtesting.in/FileDownload.html';
    let destinationFolder = 'cypress/downloads';
    let fileName = 'samplefile.pdf';
    cy.downloadFile(pdfUrl, destinationFolder, fileName);
    cy.readFile(`${destinationFolder}/${fileName}`).should('exist').and("includes","<!DOCTYPE html>")
})
it("Practice site",()=>{
    cy.visit("https://practice.automationtesting.in/");
    cy.url().should("eq","https://practice.automationtesting.in/").and("includes","practice");
    cy.get('#menu-icon').click();
    cy.xpath("(//a[normalize-space()='Shop'])[1]").should("be.visible").and("not.be.disabled").contains("Shop");
    cy.xpath("(//a[normalize-space()='My Account'])[1]").should("be.visible").and("not.be.disabled").contains("My Account");
    cy.xpath("(//a[normalize-space()='Test Cases'])[1]").should("be.visible").and("not.be.disabled").contains("Test Cases");
    cy.xpath("(//a[normalize-space()='AT Site'])[1]").should("be.visible").and("not.be.disabled").contains("AT Site");
    cy.xpath("(//a[normalize-space()='Demo Site'])[1]").should("be.visible").and("not.be.disabled").contains("Demo Site");
    cy.xpath("(//a[normalize-space()='Shop'])[1]").click();
    cy.get('.cat-item-24 > a').should("be.visible").click();
    cy.get('h3').should("be.visible");
    cy.get('.button').should("not.be.disabled").click();
    cy.get('.added_to_cart').should("be.visible").and("not.be.disabled").click();
    cy.get('.cart_item > .product-name').should("be.visible");
    cy.get('strong > .woocommerce-Price-amount').should("have.text","₹459.00");
    cy.go("back")
    cy.go("back");
    cy.get('.cat-item-19 > a').should("be.visible").click();
    cy.get('.post-181 > .button').should("be.visible").and("not.be.disabled").click();
    cy.get('.post-182 > .button').should("be.visible").and("not.be.disabled").click();
    cy.get('.post-163 > .button').should("be.visible").and("not.be.disabled").click();
    cy.get('.post-163 > .added_to_cart').click();
    cy.get('strong > .woocommerce-Price-amount').should("have.text","₹1,336.20");
    cy.go("back")
    cy.go("back");
    cy.get('.cat-item-21 > a').click();
    cy.get('.post-170 > .button').click();
    cy.get('.post-180 > .button').click();
    cy.get('.post-165 > .button').click();
    cy.get('.post-170 > .added_to_cart').click();
    cy.get('strong > .woocommerce-Price-amount').should("be.visible").and("have.text","₹2,101.20");
    cy.go("back");
    cy.go("back");
    cy.get('.cat-item-17 > a').should("be.visible").click();
    cy.get('.button').click();
    cy.get('.added_to_cart').click();
    cy.get('strong > .woocommerce-Price-amount').should("be.visible").and("have.text","₹2,611.20");
    cy.get('.checkout-button').should("be.visible").and("not.be.disabled").click();
        cy.get('.showlogin').should("be.visible").click();
        cy.get('#username').should("be.visible").type("skmohanraj7471@gmail.com");
        cy.get('#password').should("be.visible").type("mohanraj7471");
        cy.get(':nth-child(5) > .button').should("be.visible").and("not.be.disabled").click();
        cy.get('.woocommerce-billing-fields > h3').should("be.visible").should("have.text","Billing Details");
        cy.get('#billing_first_name').type("mohan");
        cy.get('#billing_last_name').type("raj");
        cy.get('#billing_company').type("QAoncloud");
        cy.get('#billing_phone').type("8072250341");
        cy.xpath("(//span[@id='select2-chosen-1'])[1]").click();
        cy.xpath("(//input[@id='s2id_autogen1_search'])[1]").type("India");
        cy.xpath("(//input[@id='s2id_autogen1_search'])[1]").type("{enter}")
        cy.get('#billing_address_1').type("TN Palayam, Erode");
        cy.get('#billing_address_1').type("Bhavani");
       // cy.get("#select2-chosen-3506").click();
        //cy.get("#s2id_autogen3506_search").type("Tamil Nadu").type("{enter}");
        cy.get('#billing_postcode').type("638501");
        cy.get("#order_review_heading").should("be.visible")
        cy.xpath("(//input[@id='payment_method_cod'])[1]").click();
        cy.xpath("(//p[normalize-space()='Pay with cash upon delivery.'])[1]").should("be.visible").and("have.text","Pay with cash upon delivery.");
        cy.get('#place_order').should("be.visible").and("not.be.disabled");
        cy.get('#menu-icon').click();
})
it("My account",()=>{
    cy.visit("https://practice.automationtesting.in/");
    cy.get('#menu-icon').click();
    cy.xpath("(//a[normalize-space()='My Account'])[1]").click();
    cy.get('.u-column1 > h2').should("be.visible").and("have.text","Login");
    cy.fixture("demo.json").then((name1)=>{
        name1.forEach((value)=>{
            cy.get('#username').should("be.visible").clear().type(value.username).debug();
         cy.get('#password').should("be.visible").type(value.password);
         cy.get(':nth-child(3) > .woocommerce-Button').should("be.visible").and("not.be.disabled").click();

        if(value.username=="skmohanraj7471@gmail.com" &&  value.password=="mohanraj7471"){
            cy.log("welcome");
           cy.log("Hello skmohanraj7471 (not skmohanraj7471? Sign out)");
        }
       else{
            cy.log("Invalid data.....");
        
    }

        })
    })

})
it("Test cases",()=>{
    cy.visit("https://practice.automationtesting.in/");
    cy.get('#menu-icon').click();
    cy.xpath("(//a[normalize-space()='Test Cases'])[1]").click();
    cy.url().should("includes","test-cases");
    cy.xpath("(//div[@id='accordion-222-sub_row_1-0-1-0-0'])[1]").should("be.visible");
    cy.xpath("(//div[@id='accordion-222-sub_row_1-0-1-0-2'])[1]").should("be.visible");
    cy.xpath("(//div[@id='accordion-222-sub_row_1-0-1-0-4'])[1]").should("be.visible");
    cy.xpath("(//div[@id='accordion-222-sub_row_1-0-1-0-8'])[1]").should("be.visible");
})
it("AT site",()=>{
    cy.visit("https://practice.automationtesting.in/");
    cy.get('#menu-icon').click();
    cy.get("a[href='http://automationtesting.in/']").then((url)=>{
        debugger;
        url.click();
    })
    cy.visit("https://automationtesting.in/");
    cy.get('#menu-icon').click();
    cy.get("img[title='sel-home']").should("be.visible");
    cy.xpath("(//span[normalize-space()='Selenium'])[1]").should("be.visible").contains("Selenium");
    cy.xpath("(//a[normalize-space()='Tools'])[1]").should("be.visible").contains("Tools");
    cy.xpath("(//a[normalize-space()='Trainings'])[1]").should("be.visible").contains("Trainings");
    cy.xpath("(//a[normalize-space()='TestNG'])[1]").should("be.visible").contains("TestNG");
    cy.xpath("(//a[normalize-space()='Reports'])[1]").should("be.visible").contains("Reports");
    




})



})