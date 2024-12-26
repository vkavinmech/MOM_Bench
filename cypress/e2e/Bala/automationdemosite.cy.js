describe("demo script", () => {
    it("validating the register automation page", () => {
      cy.visit("https://demo.automationtesting.in/Register.html");
  
      cy.url().should('include', "/Register.html").and('eq', "https://demo.automationtesting.in/Register.html");
      cy.title().should('eq', "Register");
  
      
      cy.get("img[alt='image not displaying']").should('be.visible').and('exist');
  
    
      cy.xpath("//h1[normalize-space()='Automation Demo Site']").should('be.visible').and('exist');
      const titlename = "Automation Demo Site";
      cy.xpath("//h1[normalize-space()='Automation Demo Site']").then((value) => {
        const actualtitle = value.text().replace(/\u00A0/g, ' ').trim(); 
        expect(actualtitle).to.equal(titlename);
      });
  
      
      cy.xpath("//a[normalize-space()='Home']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='Home']").then((data) => {
        const actualLinkName = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(actualLinkName).to.eq("Home");
      });
  
      cy.xpath("//a[normalize-space()='Register']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='Register']").then((data) => {
        const actualname = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(actualname).to.eq("Register");
      });
  
      cy.xpath("//a[normalize-space()='WebTable']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='WebTable']").then((data) => {
        const actvaluename = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(actvaluename).to.equal("WebTable");
      });
  
      cy.xpath("//a[normalize-space()='SwitchTo']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='SwitchTo']").then((data) => {
        const actswitchvalue = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(actswitchvalue).to.equal("SwitchTo");
      });
  
      cy.xpath("//a[normalize-space()='Widgets']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='Widgets']").then((data) => {
        const expwidgename = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(expwidgename).to.equal("Widgets");
      });
  
      cy.xpath("//a[normalize-space()='Interactions']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='Interactions']").then((data) => {
        const expinteractname = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(expinteractname).to.equal("Interactions");
      });
  
      cy.xpath("//a[normalize-space()='Video']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='Video']").then((data) => {
        const actvideoname = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(actvideoname).to.equal("Video");
      });
  
      cy.xpath("//a[normalize-space()='WYSIWYG']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='WYSIWYG']").then((data) => {
        const actualsomename = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(actualsomename).to.equal("WYSIWYG");
      });
  
      cy.xpath("//a[normalize-space()='More']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='More']").then((data) => {
        const actmorename = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(actmorename).to.equal("More");
      });
  
      cy.xpath("//a[normalize-space()='Practice Site']").should('be.visible').and('exist')
        .trigger('mouseover')
        .and('have.css', "color", 'rgb(255, 255, 255)');
      
      cy.xpath("//a[normalize-space()='Practice Site']").then((data) => {
        const actpracticename = data.text().replace(/\u00A0/g, ' ').trim();;
        expect(actpracticename).to.equal("Practice Site");
      });
  
    
      cy.xpath("//h2[normalize-space()='Register']").should('be.visible').and('exist');
  
      cy.xpath("//label[normalize-space()='Full Name*']").should('be.visible')
        .and('exist')
        .should('include.text', '*');
  
      cy.xpath("//input[@placeholder='First Name']").should('be.visible')
        .and('exist')
        .should('have.attr', 'placeholder', 'First Name')
        .focus()
        .type("bala")
        .and('have.value', "bala");
  
      cy.xpath("//input[@placeholder='Last Name']").should('be.visible')
        .and('exist')
        .should('have.attr', 'placeholder', 'Last Name')
        .focus()
        .type("aadhikesavan")
        .and('have.value', "aadhikesavan");
  
      cy.xpath("//label[normalize-space()='Address']").should('be.visible')
        .and('exist')
        .should('include.text', 'Address');
  
      //cy.get('[data-top="1211.537449645996"]').should('be.visible')
      //.and('exist')
        //.type("no.23 annanagar thirukatchur singaperumal kovil")
        //.and('have.value', "no.23 annanagar thirukatchur singaperumal kovil")
        //.focus();
       
        cy.get("input[type='email']").should('be.visible')
        .and('exist').focus()
        .type("bala02aadhikesavan@gmail.com").should('have.value',"bala02aadhikesavan@gmail.com")

        cy.xpath("//label[normalize-space()='Phone*']").should('be.visible')
        .and('exist')
        .should('include.text', 'Phone*').and('include.text', '*');
        cy.get("input[type='tel']").should('be.visible')
        .and('exist')
        .focus()
        .type("9150794431").should('have.value',"9150794431")

        cy.xpath("//label[normalize-space()='Gender*']").should('be.visible')
        .and('exist')
        .should('include.text', 'Gender*').and('include.text', '*');
        cy.xpath("//label[normalize-space()='Male']").should('be.visible')
        .and('exist').should('include.text'," Male ")
        cy.xpath("//input[@value='Male']").click().should('be.checked')
        cy.xpath("//input[@value='FeMale']").should('not.be.checked')
        cy.xpath("//label[normalize-space()='FeMale']").should('be.visible')
        .and('exist').should('include.text',"FeMale")
        cy.xpath("//input[@value='FeMale']").click().should('be.checked')
        cy.xpath("//input[@value='Male']").should('not.be.checked')
        cy.xpath("//label[normalize-space()='Hobbies']").should('be.visible')
        .and('exist')
        cy.xpath("//label[normalize-space()='Cricket']").should('be.visible')
        .and('exist')
        .and('include.text',"Cricket")
        cy.xpath("//input[@id='checkbox1']").should("be.visible").click().should('be.checked')
        cy.xpath("//label[normalize-space()='Movies']").should('be.visible')
        .and('exist')
        .and('include.text',"Movies")
        cy.xpath("//input[@id='checkbox2']").should("be.visible").click().should('be.checked')
        cy.xpath("//label[normalize-space()='Hockey']").should('be.visible')
        .and('exist')
        .and('include.text',"Hockey")
        cy.xpath("//input[@id='checkbox3']").should("be.visible").click().should('be.checked')
        cy.xpath("//label[normalize-space()='Languages']").should('be.visible').and('exist')
        cy.xpath("//label[normalize-space()='Skills']").should("be.visible").and('exist')
        .and('include.text',"Skills")
        cy.xpath("//select[@id='Skills']").should("have.attr", "id", "Skills").select("C")
        cy.xpath("//label[normalize-space()='Country*']").should('be.visible').and('exist')
        .and('include.text',"Country*")
        cy.get("#yearbox").select("1996");
        cy.get("select[placeholder='Month']").select("June");
        cy.get("#daybox").select("5");
        cy.get("#firstpassword").type("bala123").should('have.value',"bala123");
        cy.get("#secondpassword").type("bala123").should("have.value","bala123");
        cy.get('#submitbtn').click();

        cy.xpath("//input[@id='imagesrc']")
        .attachFile("logo-title.png")
        

    });
    it("handling the alerts ",()=>
    {
      cy.visit("https://demo.automationtesting.in/Alerts.html")
      cy.url().should('include',"in/Alerts.html").and('eq',"https://demo.automationtesting.in/Alerts.html")
      cy.title().should('eq',"Alerts")
      cy.xpath("//a[normalize-space()='Alert with OK']").click().should('include.text',"Alert with OK")
      cy.xpath("//button[contains(text(),'click the button to display an')]").click()
      cy.on('window:alert',(t)=>
        {
            expect(t).to.contains("I am an alert box!")
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
            cy.get('#username').should("be.visible").type("bala02aadhikesavan@gmail.com");
            cy.get('#password').should("be.visible").type("bala@16789");
            cy.get(':nth-child(5) > .button').should("be.visible").and("not.be.disabled").click();
            cy.get('.woocommerce-billing-fields > h3').should("be.visible").should("have.text","Billing Details");
            cy.get('#billing_first_name').type("bala");
            cy.get('#billing_last_name').type("aathikesavan");
            cy.get('#billing_company').type("QAoncloud");
            cy.get('#billing_phone').type("9150794431");
            cy.xpath("(//span[@id='select2-chosen-1'])[1]").click();
            cy.xpath("(//input[@id='s2id_autogen1_search'])[1]").type("India");
            cy.xpath("(//input[@id='s2id_autogen1_search'])[1]").type("{enter}")
            cy.get('#billing_address_1').type("singaperumal kovil");
            cy.get('#billing_address_1').type("bala");
            cy.get('#billing_postcode').type("603204");
            cy.get("#order_review_heading").should("be.visible")
            cy.xpath("(//input[@id='payment_method_cod'])[1]").click();
            cy.xpath("(//p[normalize-space()='Pay with cash upon delivery.'])[1]").should("be.visible").and("have.text","Pay with cash upon delivery.");
            cy.get('#place_order').should("be.visible").and("not.be.disabled");
            cy.get('#menu-icon').click();

    })
  })

  