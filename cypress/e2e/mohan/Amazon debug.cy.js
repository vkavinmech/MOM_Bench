describe("Debugging in amazon",()=>{
    it("debugg the amazon using pause keyword",()=>{
        cy.visit("https://www.amazon.in/");
        cy.url().should("eq","https://www.amazon.in/");
        cy.log("Url verified successfully");
        cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click();
        cy.get('#ap_email').type("8072250341");
        cy.get('.a-button-inner > #continue').click();
        cy.get('#continue').click();
        cy.pause();
        cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click();
    })
    it("debugg using debug keyword",()=>{
        cy.visit("https://www.amazon.in/");
        cy.xpath("(//input[@id='twotabsearchtextbox'])[1]").type("mobiles").debug();
        cy.get("#nav-search-submit-button").debug().click();
        cy.get("div[class='sg-col-14-of-20 sg-col-18-of-24 sg-col s-breadcrumb sg-col-10-of-16 sg-col-6-of-12'] span:nth-child(1)").should("be.visible").debug();


    })
})
