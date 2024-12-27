import 'cypress-iframe';  

describe("mouse hover", () => {
    it("mouse actions", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");

        
        cy.get('.mega-menu > .both > .info > .title').trigger('mouseover');

        
        const exptitle =  "Mega Menu"

        cy.get('.mega-menu > .both > .info > .title').then((data) => {
            const actTitle = data.text().replace(/\u00A0/g, ' ').trim();
            expect(actTitle).to.equal(exptitle);
        });

        
        cy.get('#entry281_216477 > .menu-wraper > .design-title')
            .should('be.visible')
            .and('include.text', "Mobiles");

        
        cy.xpath("//span[normalize-space()='AddOns']").trigger('mouseover');
        
        
        cy.xpath("//span[normalize-space()='Modules']")
            .should('be.visible')
            .and('include.text', "Modules");

        
        cy.xpath("//span[normalize-space()='Designs']")
            .should('be.visible')
            .and('include.text', "Designs");

        
        cy.xpath("//span[normalize-space()='Widgets']")
            .should('be.visible')
            .and('include.text', "Widgets")
            .and("have.css", "color", "rgb(38, 38, 38)").click(); 
            cy.location('href').should('include',"page&page_id=9")

            cy.xpath("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
            .trigger("mouseover")

            const expTitle = "My account"
            cy.xpath("//a[@role='button']//span[@class='title'][normalize-space()='My account']").then((data)=>
             {
                const actualtitle = data.text().replace(/\u00A0/g, ' ').trim();
                expect(actualtitle).to.equal( expTitle)
            })

            cy.xpath("//span[normalize-space()='Login']")
            .should('be.visible')
            .and('include.text',"Login")

            cy.xpath("//span[normalize-space()='Register']")
            .should('be.visible')
            .and('include.text',"Register")
            
    });

    it("mousehover 2",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.xpath("//button[normalize-space()='Point Me']").trigger('mouseover').click()
    })
    
    it("right click operation",()=>
    {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        cy.xpath("//span[@class='context-menu-one btn btn-neutral']")
        .trigger('contextmenu')

        cy.get('.context-menu-icon-copy')
        .should('be.visible')
        .and('include.text',"Copy").click();

        cy.on('window:prompt', (promptText) => {

            expect(promptText).to.contains('You clicked: copy')
    })
     cy.on('window:prompt',()=>true)

     cy.xpath("//span[@class='context-menu-one btn btn-neutral']")
        .rightclick();

})
it("double click operation",()=>
{
    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    cy.frameLoaded("#iframeResult")
    cy.iframe('#iframeResult')
    .find("button[ondblclick='myFunction()']")
    .trigger('dblclick');

    cy.iframe("#iframeResult")
  .find("#field2")
  .should("have.value", "Hello World!");

})
it.only("double click operation 2",()=>
{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.xpath("//button[normalize-space()='Copy Text']")
    .trigger('dblclick')

    cy.get("#field2")
    .should('have.value',"Hello World!")
})
})
