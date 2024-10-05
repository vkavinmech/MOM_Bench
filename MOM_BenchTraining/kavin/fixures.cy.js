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
    cy.get("input[placeholder='Username']").type(data.username);
    cy.get("input[placeholder='Password']").type(data.password);
     cy.get("button[type='submit']").click();   
     cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
     .should('have.text',data.expected);
    }) 
 });  
     
    it('retrive the data from fixure using hook concept', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
         cy.get("button[type='submit']").click();   
         cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text')
         .should('have.text',userdata.expected);
   });
}); 