describe("Ultimateqa page",()=>{
    afterEach(() => {
        
        cy.clearAllSessionStorage()
        
        
      });
      
    it.skip("Visit homepage and Verify the page",()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.url().should("includes","automation");
        cy.get(".wp-image-218123.lazyloaded").should("be.visible").then((page)=>{
            cy.log(page.text())
        })
        cy.get(".wp-image-218123.lazyloaded").click();
        cy.url().should("not.includes","automation")
        cy.get("img[title='hero-image']").should("be.visible");
        cy.get("h1[class='et_pb_module_heading']").invoke("text").then((details)=>{
            cy.log(`text:${details}`)
            expect(details).to.equal("Push Higher Quality Software To Market Faster")
        })
        cy.go('back');
        cy.url().should('includes','automation')
        })
        it.skip("Visit homepage and Verifying UI Elements ",()=>{
            cy.visit("https://ultimateqa.com/automation")
            cy.get('#menu-main-menu > #menu-item-218392 > a').should("be.visible").contains("Services").click();
            cy.url().should("includes","consulting")
            cy.get('.et_pb_column_0 > .et_pb_heading > .et_pb_heading_container > .et_pb_module_heading').then((details1)=>{
                cy.log(details1.text())
            })
            cy.go("back");
            cy.xpath("(//a[normalize-space()='About'])[2]").should("be.visible").contains("About").click();
            cy.url().should("includes","about");
            cy.get('.et_pb_section_0 > .et_pb_row > .et_pb_column > .et_pb_module > .et_pb_text_inner > h1').then((details2)=>{
                cy.log(details2.text())
            })
            cy.go("back");
            cy.xpath("(//a[normalize-space()='Blog'])[2]").should("be.visible").contains("Blog").click();
            cy.url().should("includes","blog");
            cy.get('.et_pb_section_0').then((details3)=>{
                cy.log(details3.text());
            })
            cy.go("back");
            cy.get('#menu-main-menu > #menu-item-218225 > [href="#"]').invoke("show").click()
            
            

})
it("Contact us",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.scrollTo("bottom")
    cy.get('#menu-footer-main-menu > #menu-item-218100 > a').should("be.visible").contains("Contact Us").click();
    cy.get('h1').should("be.visible");
    cy.get('.et_pb_column_2_3 > .et_pb_text > .et_pb_text_inner > h2 > span').should("be.visible").and('have.text',"Send us a Message");
    cy.get('.et_pb_text_3 > .et_pb_text_inner > :nth-child(1) > span').should("be.visible").and("have.text","7901 4th St N STE 300 St. Petersburg, FL 33702");
    cy.get('.et_pb_text_3 > .et_pb_text_inner > :nth-child(2)').should('be.visible').and("have.text","info@ultimateqa.com");
    cy.get('#et_pb_contact_name_0').clear().type('mohan');
    cy.get('#et_pb_contact_email_0').clear().type("mohan@gmail.com");
    cy.get('#et_pb_contact_message_0').clear().type("Welcome to Cypress");
    cy.get('.et_pb_contact_submit').should("be.visible").contains("Submit").and("not.be.disabled");

})
it("Select the Cypress courses and sign up",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.scrollTo("bottom")
    cy.get('#menu-footer-secondary-menu > #menu-item-218104 > a').should("be.visible").contains("Free Courses").click();
    cy.get('.collections__heading').should("be.visible");
    cy.get('.form__control').clear().type("Cypress").type('{enter}');
    //cy.get('.products__title').should("have.text","Search result for Cypress");
    cy.get(':nth-child(1) > .card > .card__body-container > .card__body > .card__name').should("be.visible").click();
    cy.get('.course-curriculum__chapter-header > .toga-icon').click();
    cy.get('.course-curriculum-card__details').should("be.visible");
    cy.get('.section__button-group > .button').click();
    cy.get('#account-info-email').clear().type("skmohanraj7471@gmail.com");
    cy.get('#input-2').clear().type("Mohan");
    cy.get('#input-3').clear().type("raj");
    cy.get('.sc-bczRLJ').should("be.visible").and("not.be.disabled")

})
it.skip("Automate the Simple elements",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.get("div[class='et_pb_text_inner'] h3").should("be.visible").then((details)=>{
        cy.log(details.text())
    })
    cy.xpath("(//button[normalize-space()='Click Me!'])[1]").should("not.be.disabled").click();
    cy.get('.et_pb_column_0 > .et_pb_heading > .et_pb_heading_container > .et_pb_module_heading').should("be.visible");
    cy.get('.et_pb_button.et_pb_button_0.et_pb_bg_layout_light').should("not.be.disabled").invoke("removeAttr","target").click();
   
})
it.skip("Raise button",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.get("#button2").should("be.visible").click()
    cy.get('.et_pb_column_0 > .et_pb_heading > .et_pb_heading_container > .et_pb_module_heading').then((details2)=>{
        cy.log(details2.text())
    })

})
it.skip("Button clicking",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.get("#idExample").should("not.be.disabled").click();
    cy.get(".entry-title").should("have.text","Button success");
    cy.get('#comment').clear().type("working fine");
    cy.get('#author').type("mohan");
    cy.get('#email').type("mohan@gmail.com");
    cy.get('#url').type("www.google.com");
    cy.get('#submit').should("not.be.disabled")
    cy.go("back");
    cy.get("a[href='../link-success/']").click();
    cy.get(".entry-title").invoke("text").then((details3)=>{
        cy.log(`text:${details3}`)
    })
    cy.go("back");
    cy.get("#simpleElementsLink").click();
    cy.get("#simpleElementsLink").then((details4)=>{
        cy.log(details4.text())
    })
    
})
it.skip("Email filling",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
  cy.xpath("(//input[@id='et_pb_contact_name_0'])[1]").type("mohan");
    cy.xpath("(//input[@id='et_pb_contact_email_0'])[1]").type("skmohanraj7471@gmail.com");
    cy.get("button[name='et_builder_submit_button']").should("not.be.disabled").click();


})
it("Radio buttons",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.xpath("(//span[normalize-space()='Radio buttons'])[1]").should("be.visible");
    cy.get("input[value='male']").check().should("be.checked")
    cy.get("input[value='female']").check().should("be.checked");
    cy.get("input[value='other']").check().should("be.checked");

})
it("Check box",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.xpath("(//span[normalize-space()='Checkboxes'])[1]").should("be.visible");
  cy.get("input[name='vehicle']").eq(1).check().should("be.checked");
    cy.get("input[name='vehicle']").eq(1).uncheck()
    cy.wait(4000)
    cy.get("input[name='vehicle']").should('have.length', 2); 
    cy.get('[value="Car"]').check().should("be.checked")
   // cy.get("input[name='vehicle']").eq(2).check().should('be.checked');


})
it("Drop down",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.xpath("(//select)[1]").select("Audi").should("have.value","audi")
    cy.xpath("(//select)[1]").select("Volvo").should("have.value","volvo")
    cy.xpath("(//select)[1]").select("Opel").should("have.value","opel")


})
it("Handle HTML Table get same index value with id",()=>{
    cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
    cy.get("#htmlTableId").should("be.visible");
    cy.get("#htmlTableId >tbody >tr").should("have.length","4")
    cy.get("#htmlTableId >tbody >tr:nth-child(1) >th").should("have.length","3");
    cy.get("#htmlTableId >tbody >tr:nth-child(2) >td").should("have.length","3");
    cy.get("#htmlTableId >tbody >tr:nth-child(2) >td:nth-child(1)").each(($l,index,$list)=>{
        cy.log($l.text())
        if($l.text().includes("Software Development Engineer in Test")){
            cy.get("#htmlTableId >tbody >tr:nth-child(2) >td:nth-child(2)").each(($l1,index,$list)=>{
                cy.log($l1.text());
                expect($l1.text()).to.equal("Automation")

        })
    }
        
    })

    })
    it("Handle HTML Table for get all values in table",()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.get("#htmlTableId").find("tbody tr").each(($l1)=>{
           cy.log($l1.text())
       
})
    })
    it("Handle HTML Table with no id",()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
        cy.xpath("(//div[contains(@class, 'et_pb_text_inner')])[3]").should("be.visible");
        cy.xpath("(//div[contains(@class, 'et_pb_text_inner')])[3]").find("table tbody tr") .each(($l2) => {
            cy.log($l2.text());
        });
    
        })
        it.skip("Handle HTML Table for get all values in rows and coloumns in table",()=>{
            cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
            cy.get("#htmlTableId",{timeout:4000}).find("tbody tr").each(($l1,index,$list)=>{
               cy.wrap($l1).within(()=>{
                cy.get("td").should("exist").each(($l2,index,$list)=>{
                    cy.log($l2.text())
                })
            })
        })
    })
        it("Login the page",()=>{
            cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
            cy.xpath("(//h2[normalize-space()='Click here to login'])[1]").should("be.visible");
            cy.xpath("(//a[normalize-space()='Go to login page'])[1]").and("not.be.disabled").click();
            cy.wait(5000)
            cy.xpath("(//h2[normalize-space()='Welcome Back!'])[1]").invoke("text").then((msg)=>{
                let message=`msg is:${msg}`
               // expect(message).to.equal("Welcome Back!")
            })
            cy.get("input[id='user[email]']").clear().type("skmohanraj7471@gmail.com");
            cy.get("input[id='user[password]']").clear().type("mohanraj7471");
            cy.get("button[type='submit']").should("not.be.disabled").click();


        })
        it.skip("Selenium resources",()=>{
            cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/");
            cy.get('#menu-footer-secondary-menu > #menu-item-218107 > a').should("be.visible").click();
             cy.get(".entry-title").should("be.visible");
             

        })
    })

    


