import 'cypress-xpath';
describe("Assertion demo",()=>{
    it("Implicit assertions",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

        //cy.url().should('include','orangehrmlive.com')
        //.and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.and('contain','orangehrm')
        //.and('not.contain','greenhrm')
    
        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain','orangehrm')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        cy.xpath("//a").should('have.length','5')

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        /*let expName="Shehan user"
        
        cy.get(".oxd-userdropdown-name").then( (x)=>{
        let actName=x.text()
        expect(actName).to.equal(expName)
        expect(actName).to.equal(expName)

        assert.equal(actName, expName)
        assert.equal(actName, expName)

        

    })*/
    cy.xpath(".//div[@class='orangehrm-todo-list-item'][1]").click()
    cy.wait(5000)
    //cy.xpath(".//div[5]//div[1]//div[2]").should('have.text','Activated');
    //cy.xpath("//div[@class='data'][normalize-space()='Activated'])[2]").should('have.text','Activated')
    cy.get("div:nth-child(5) div:nth-child(1) div:nth-child(2)").should('have.text','Activated')
    

})
})