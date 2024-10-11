describe('Fixures data', () => {
   let userdata;
   before( ()=>{
      cy.fixture('orangehrm').then( (data)=>{
      userdata=data;   
     })
  })
    it('retrive the data from fixure', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.fixture('orangehrm').then( (data)=>{
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password);
      cy.get('.oxd-button').click();   
     cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
     .should('have.text',data.expected);
    }) 
 });  
     
    it('retrive the data from fixure using hook concept', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password);
        cy.get('.oxd-button').click();   
         cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
         .should('have.text',userdata.expected);
   });
}); 