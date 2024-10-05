describe('Validate Explicit Assertion', () => {
    it('Should Verify the Assertion', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.wait(2000);
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");       
    cy.get("button[type='submit']").click()

    let expName="Oleksandr Rashevchenko";
    cy.get(".oxd-userdropdown-name").then(  (x)=> {
    let actName=x.text()
    //BDD style
    expect(actName).to.equal(expName)
    //expect(actName).to.not.equal(expName)

    //TDD style
    assert.equal(actName,expName)
    //assert.notequal(actName,expName)
})
});
}); 