describe("check box",()=>{
    it("Check box",()=>
    {
        cy.visit("https://www.qa-practice.com/elements/checkbox/mult_checkbox");
        cy.get("#id_checkboxes_1").should("be.visible");
        cy.get("#id_checkboxes_1").check().should("be.checked");
        cy.get("#id_checkboxes_1").uncheck().should("not.be.checked");
        cy.get("#id_checkboxes_2").check();
        cy.get('input.form-check-input[name="checkboxes"]').check();//select all boxes
        cy.get('input.form-check-input[name="checkboxes"]').uncheck();//unselect all boxes


    })
})