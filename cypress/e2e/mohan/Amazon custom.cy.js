describe("Amazon",()=>{
   beforeEach("url",()=>{
        cy.visit("https://www.amazon.in/?");
    })
    it("Camera",()=>{
        cy.product("camera");
        cy.get("div[class='sg-col-14-of-20 sg-col-18-of-24 sg-col s-breadcrumb sg-col-10-of-16 sg-col-6-of-12'] div[class='a-section a-spacing-small a-spacing-top-small']").and("be.visible");
    })
    it("Smart tv",()=>{
        cy.product("smart tv");
        cy.xpath("(//div[@class='a-section a-spacing-small a-spacing-top-small'])[1]").should("be.visible");      
    })
    it("Mobiles",()=>{
        cy.product("oppo mobiles");
        cy.xpath("(//div[@class='a-section a-spacing-small a-spacing-top-small'])[1]").should("be.visible");

    })
})