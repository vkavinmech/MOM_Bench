describe("Assertions",function(){
    it("Implicit Assertion for Homepage",()=>{
        cy.visit("https://www.qaoncloud.com/");
        cy.url().should("eq","https://www.qaoncloud.com/").should("include","qaoncloud").and("not.contain","desicrew").and("not.eq","werty");
        cy.get("img[title='QAonCloud Logo']").should("be.visible");
        cy.get(".elementor-button-text").should("be.visible").and("have.text","Contact Us").should("not.be.disabled");
        cy.get("li[id='menu-item-319'] a[class='ekit-menu-nav-link ekit-menu-dropdown-toggle']").should("have.text","Services").and("not.eq","frert");
        cy.xpath("(//a[@class='ekit-menu-nav-link ekit-menu-dropdown-toggle'][normalize-space()='Solutions'])[1]").should("have.text","Solutions");
})
it("Contact us Implicit Assertion",()=>{
    cy.visit("https://www.qaoncloud.com/");
    cy.get(".elementor-button-text").click();
    cy.get("input[placeholder='Name'][title='Alphabetic characters only']").type("Mohanraj");
    cy.get("input[placeholder='Name'][title='Alphabetic characters only']").should("have.value","Mohanraj");
    cy.get("body > div:nth-child(3) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h6:nth-child(3)").contains("Address");
    cy.get("input[placeholder='E-mail']").type("mohan@gmail.com");
    cy.get("input[placeholder='E-mail']").should("have.value","mohan@gmail.com");
    cy.get("input[value='Send']").should("not.be.disabled").should("contain","Send").and("be.visible");
    cy.get("a[href='mailto:contactus@qaoncloud.com']").should("have.text","contactus@qaoncloud.com");
    cy.xpath("//a[@id='navbarDropdown4']").click();
    cy.get(".dropdown-item").contains("Blogs").click();
    cy.url().should("eq","https://www.qaoncloud.com/blog-trending-posts");
    cy.go("back");
    cy.url().should("eq","https://www.qaoncloud.com/contact-us").should("include","contact-us");
})
it("Desicrew website homepage for implicit assertion",()=>{
    cy.visit("https://www.desicrew.in/");
    cy.url().should("eq","https://www.desicrew.in/").should("include","desicrew");
    cy.get("img[alt='DesiCrew Logo']").should("be.visible");
    cy.get("img[alt='DesiCrew Logo']").then((t1)=>{
        let value=t1.text();
        cy.log(value);
        })
     cy.get(".nav-link[aria-current='page']").contains("Home").should("have.text","Home");
     cy.get("a[type='submit']").should("be.visible").should("not.be.disabled");
     cy.get("body > navbar-component:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)").contains("Resources");
     cy.get("a[type='submit']").click();
     cy.url().should("eq","https://www.desicrew.in/contact-us/contact-us.html").should("include","contact-us");
   cy.get("#workEmail").type("mohan@gmail.com");
   cy.get("#workEmail").should("have.value","mohan@gmail.com");
   cy.get("#phoneNumber").type("1234");
   cy.get("#phoneNumber").should("have.value","1234");
   cy.get("input[value='Submit']").should("not.be.disabled").should("contain","Submit").should("be.visible");
})
it("implicit assertion using radio button",()=>{
    cy.visit("https://practice.expandtesting.com/radio-buttons#google_vignette");
    cy.get("#red").check().should("be.checked");
    cy.get("#black").check().should("be.checked");
    cy.get("#yellow").check().should("be.checked");
})
it("Radio button & Drop down",()=>{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#sex_1").check().should("be.checked");
    cy.get("#sex_2").check().should("be.checked");
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-reasondummy-container").click();
    cy.get("input[role='combobox']").type("Office work place needs it").type("{enter}");
})
})