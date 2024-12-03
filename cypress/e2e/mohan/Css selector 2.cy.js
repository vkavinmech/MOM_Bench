describe("Css selector 2",()=>
{
    it("Css selector 2",()=>
    {
        cy.visit("https://www.qaoncloud.com/");
        cy.get("img[title='QAonCloud Logo']").should("be.visible");
        cy.get(".elementor-button-text").contains("Contact Us");
        cy.xpath("//span[@class='elementor-button-text']").click();
        cy.xpath("//input[@title='Alphabetic characters only']").type("Mohan raj");
        cy.xpath("//input[@placeholder='E-mail']").type("mohan@gmail.com");
        cy.xpath("//input[@placeholder='Phone']").type("8072250341");
        cy.get("form[name='form2'] input[placeholder='Company Name']").type("Desicrew");
        cy.get('body > div:nth-child(3) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(3) > input:nth-child(11)').type("QA Intern");
        cy.get("textarea[placeholder='Requirements']").type("Need Login page");
        cy.visit("https://www.qaoncloud.com/#");
    })
})