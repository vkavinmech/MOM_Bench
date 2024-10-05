describe('DataDriven', () => {

    it('should perform the datadriven', () => {
    cy.fixture('orangehrm1').then( (userdata)=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        
        userdata.forEach((data) => {
            cy.get("input[placeholder='Username']").type(data.username);
            cy.get("input[placeholder='Password']").type(data.password);
            cy.get("button[type='submit']").click();  
        
            if(data.username=='Admin' && data.password=='admin123') {
                cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
                .should('have.text',data.expected);
                cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click();

            cy.get('.oxd-userdropdown-tab > .oxd-icon').click();       // logout done beacause set of data will execute 
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
            }
            else{
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                .should('have.text',data.expected)
            }  
     })
    }) 
 });
});