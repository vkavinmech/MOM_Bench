describe("After execution",()=>{
    beforeEach("Before execution",()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/");
        cy.get("#username").type("student");
        cy.get("#password").type("Password123")
        cy.xpath("//button[@id='submit']").click();
    })
    afterEach("after execution",()=>{
        cy.visit("https://practicetestautomation.com/logged-in-successfully/");
        cy.get(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click();
       
    })
    it("Homepage",()=>{
       cy.visit("https://practicetestautomation.com/logged-in-successfully/");
        cy.get("img[alt='Practice Test Automation']").should("be.visible");
        cy.get(".post-title").should("be.visible").should("have.text","Logged In Successfully");

    })
    it("Verification",()=>{
       cy.visit("https://practicetestautomation.com/logged-in-successfully/");
        cy.get("a[href='https://practicetestautomation.com/contact/']").click();
        cy.get(".post-title").should("be.visible").and("have.text","Contact");
        cy.get("img[alt='Dmitry Shyshkin test automation instructor']").should("be.visible");
        cy.get("#wpforms-submit-161").should("not.be.disabled");
    })
    it("Validation",()=>{
        cy.visit("https://practicetestautomation.com/contact/");
        cy.get("#wpforms-161-field_0").type("mohan").should("be.value","mohan");
        cy.get("#wpforms-161-field_0-last").type("raj").should("be.value","raj");
        cy.get("#wpforms-161-field_1").type("mohan@gmail.com").should("be.value","mohan@gmail.com");
    
    })
    it("Course page",()=>{
        cy.visit("https://practicetestautomation.com/logged-in-successfully/");
        cy.get("a[href='https://practicetestautomation.com/courses/']").click();
        cy.get(".post-title").should("be.visible").and("have.text","Courses");
        cy.get("a[href='https://practice-test-automation-school.teachable.com/p/selenium-webdriver-java-monthly-learning-subscription']").and("be.visible");
        cy.get("a[href='https://practice-test-automation-school.teachable.com/p/selenium-webdriver-java-monthly-learning-subscription']").click();
    })
})