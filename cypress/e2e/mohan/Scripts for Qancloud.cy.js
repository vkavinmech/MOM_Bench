describe("Qaonclud homepage",()=>{
    beforeEach("Url",()=>{
        cy.visit("https://www.qaoncloud.com/");

    })
    it("Verify all elements in qaoncloud homepage",()=>{
        cy.url().should("be.equal","https://www.qaoncloud.com/").should("include","qaoncloud");
        cy.title().and("be.equal","QA Testing Services | Software Testing Services - QAonCloud");
        cy.get("img[title='QAonCloud Logo']").and("be.visible");
        cy.xpath("(//span[@class='elementor-button-text'])[1]").should("be.visible").should("not.be.disabled").should("have.text","Contact Us");
        cy.get('.elementskit-menu-hamburger > :nth-child(1)').click();
        cy.xpath("(//a[@class='ekit-menu-nav-link ekit-menu-dropdown-toggle'][normalize-space()='Services'])[1]").and("be.visible").and("not.be.disabled").and("have.text","Services");
        cy.get("li[id='menu-item-326'] a[class='ekit-menu-nav-link ekit-menu-dropdown-toggle']").and("be.visible").and("not.be.disabled");
        cy.get("li[id='menu-item-331'] a[class='ekit-menu-nav-link ekit-menu-dropdown-toggle']").and("be.visible").and("not.be.disabled");
        cy.get("li[id='menu-item-337'] a[class='ekit-menu-nav-link ekit-menu-dropdown-toggle']").and("be.visible").and("not.be.disabled");

    })
    it("Validating the Services dropdown",()=>{
        cy.Services();//----->custom command'
        cy.get('.elementor-element-4eceb4cb > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
        cy.url().and("includes","functional-testing-services");
        cy.go("back");
        cy.Services();
        cy.get('.elementor-element-48fb1974 > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
        cy.url().and("includes","api-testing-services");
        cy.go("back");
        cy.Services();
        cy.get('.elementor-element-170be5c0 > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
        cy.url().and("includes","regression-testing-services");
        cy.go("back");
        })
        it("Validating solutions dropdown",()=>{
            cy.Solutions();
            cy.get('.elementor-element-17155f2 > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
            cy.url().and("includes","mobile-app-testing-services");
            cy.go("back");
            cy.Solutions();
            cy.get('.elementor-element-4c255919 > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
            cy.url().and("includes","cross-browser-testing-services");
            cy.go("back");
            cy.Solutions();
            cy.get('.elementor-element-424755e > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
            cy.url().and("includes","game-testing-services");
            cy.go("back");
            cy.Solutions();

        })
        it("Validating Industries dropdown",()=>{
            cy.Industries();
            cy.get('.elementor-element-7218d76c > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
           cy.url().and("includes","fintech-testing-services");
            cy.go("back");
           cy.Industries();
            cy.get('.elementor-element-4589dfa1 > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
            cy.url().and("includes","telecom-testing-services");   
            cy.go("back");
            cy.Industries();     
            cy.get('.elementor-element-23474d1b > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
            cy.url().and("includes","ai-testing-services");   
            cy.go("back");
            cy.Industries(); 
        })
        it.skip("Validating Insights dropdown",()=>{
            cy.Insights();  
            cy.get('.elementor-element-7ef85f34 > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title').click();
            cy.url().and("includes","blog-trending-posts");   
            cy.go("back");
            cy.Insights(); 
            cy.get('.elementor-element-2a38e8df > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
            cy.url().and("includes","case-study");   
            cy.go("back");
            cy.Insights(); 
            cy.get('.elementor-element-1d8213ef > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
            cy.url().and("includes","faq");   
            cy.go("back");
            cy.Insights(); 
            cy.get('.elementor-element-73a49724 > .elementor-widget-container > .elementor-image-box-wrapper > .elementor-image-box-content > .elementor-image-box-title > a').click();
            cy.url().and("includes","testimonial");   
            cy.go("back");
            

})
it("Verifying validating contactus page",()=>{
    cy.xpath("(//span[@class='elementor-button-text'])[1]").click();
    cy.url().and("includes","contact-us");
    cy.xpath("(//div[@class='col-md-6 aos-init aos-animate'])[1]").should("be.visible");
    cy.get("input[placeholder='Name'][title='Alphabetic characters only']").type("Mohan").should("have.value","Mohan");
    cy.get("input[placeholder='E-mail']").type("mohan@gmail.com").should("have.value","mohan@gmail.com");
    cy.get("input[placeholder='Phone']").type("123456789").should("have.value","123456789");
    cy.get("form[name='form2'] input[placeholder='Company Name']").type("desicrew").should("have.value","desicrew");
    cy.get("body > div:nth-child(3) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(3) > input:nth-child(11)").type("qa intern").should("have.value","qa intern");
    cy.get("textarea[placeholder='Requirements']").type("need login page").and("have.value","need login page");
    cy.get("input[value='Send']").should("be.visible").contains("Send").and("not.be.disabled");
    cy.xpath("//h6[normalize-space()='Address']").then((txt)=>{
        const address=txt.text();
        cy.log(address);
    })
    cy.xpath("//h6[normalize-space()='Phone']").should("be.visible");
    cy.xpath("//a[normalize-space()='contactus@qaoncloud.com']").should("have.text","contactus@qaoncloud.com");
    cy.get("#scrollToTopBtn").should("not.be.disabled").click();
    cy.scrollTo("bottom");
})
it("Verifying and validating links presents in bottom of page",()=>{
    cy.get('.elementor-element-b7925ff > .elementor-widget-container > .elementor-heading-title').and("be.visible").and("have.text","Company");
    cy.get('.elementor-element-6f23676 > .elementor-widget-container > .ekit-wid-con > .elementor-icon-list-items > :nth-child(1) > .elementor-repeater-item-01d06f0 > .ekit_page_list_content > .elementor-icon-list-text > .ekit_page_list_title_title').and("be.visible").and("not.be.disabled").click();
    cy.url().should("includes","about-us");
    cy.get(':nth-child(1) > .footer-list > :nth-child(3) > a').should("be.visible").and("not.be.disabled").click();
    cy.url().and("includes","how-we-work");
    cy.get(':nth-child(1) > .footer-list > :nth-child(4)').should("be.visible").and("not.be.disabled").click();
    //cy.url().and("includes","why-us");
    cy.get(':nth-child(2) > .footer-list > .text-center').should("be.visible");
    cy.get(':nth-child(2) > .footer-list > :nth-child(2)').should("be.visible").and("not.be.disabled").click();
    cy.url().and("includes","engagement-model");
    cy.get(':nth-child(2) > .footer-list > :nth-child(3)').should("be.visible").and("not.be.disabled").click();
    //cy.url().and("eq","https://www.qaoncloud.com/careers");
   cy.get(':nth-child(2) > .footer-list > :nth-child(4) > a').should("be.visible").and("not.be.disabled").click();
   cy.url().and("includes","tools-we-use");
   //cy.get('[href="https://www.qaoncloud.com/privacy-policy"]').should("be.visible").and("not.be.disabled").click();
   //cy.url().and("includes","privacy-policy");
   cy.get('[href="https://www.qaoncloud.com/terms-of-use"]').should("be.visible").and("not.be.disabled").click();
   cy.url().and("includes","terms-of-use");
  

})
})