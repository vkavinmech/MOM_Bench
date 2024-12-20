class TicketBooking {
    visitUrl() {
      cy.visit("https://www.travelyaari.com/");
    }
  
    signup() {
      cy.get('body header span:nth-child(3)').click();
    }
  
    login() {
      cy.get("a[href='/login']").click();
    }
  
    enterMobile(data) {
      cy.get('.mobile-inner > .inputgroup > .twoinput > .inputright > .custome-radius')
        .click().type(data);
    }
    clickSubmit()
    {
        cy.get('.btn').click()
    }
  
    //submitOtpManually() {
        
      //;  
        //cy.wait(8000);
        
        //cy.get('button[type="submit"]').should('be.visible').click();  
        //cy.url().should('eq',"https://www.travelyaari.com/login");
        //cy.wait(4000);
  //}
  securityPin(pin)
  {
    cy.get('.customwidth').should('be.visible').type(pin);
    cy.wait(2000)
     cy.get('.nxbt2').click();
  }
  //confirmPin(pin)
  //{
    //cy.get("input[placeholder='Confirm PIN']").type(pin)
  //}
 bookTicket(city)
 {
  cy.visit("https://www.travelyaari.com/");
  cy.get("#from-city").click().type(city)
 }
 bookTicketToCity(city)
 {
  cy.get("#to-city").click().type(city);
 }
 FromDate()
 {
  cy.get("div[id='selectDate'] div:nth-child(1)").click();
  cy.get(".new-form-blk").click({ force: true });

 }
 searchBus()
 {
  cy.get('.ty-button').click()
 }
 
}
  
  export default TicketBooking;
  