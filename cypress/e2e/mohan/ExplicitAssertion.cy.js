describe("Assert 2",()=>
{
    it("Assert2 ",()=>
    {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       cy.xpath("//input[@placeholder='Username']").type("Admin");
       cy.get("input[placeholder='Password']").type("admin123");
       cy.get("button[type='submit']").click();
       let expName="Охапка дров и плов готов dPruebaLastName";
       cy.xpath("//span[@class='oxd-userdropdown-tab']").then ( (y)=>{
       let actname=y.text();
       expect(actname).to.equal(expName);
       assert.equal(actname,expName);
       //assert.notEqual(actname,expName);
       })

    })
})