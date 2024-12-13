describe("Rediff",()=>{
    it("User details",()=>{
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
        cy.fixture("reddifffixture").then(function(value){
        cy.get('[width="200"] > input').type(value.name);
        cy.get('[valign="bottom"] > [type="text"]').type(value.id);
        cy.get("input[value='Check availability']").click();
        cy.get("#check_availability").and("have.text","Yippie! The ID you've chosen is available.");
        cy.get("#newpasswd").type(value.password);
        cy.get("#newpasswd1").type(value.repassword);
        cy.get(':nth-child(1) > [width="185"] > input').type(value.altemail);
        cy.get("#mobno").type(value.mobno);
        cy.get("input[value='m']").check();
        cy.get("#country").select(value.country);
       // cy.get(':nth-child(1) > [colspan="3"] > select').select(value.city);
        })
    })
})