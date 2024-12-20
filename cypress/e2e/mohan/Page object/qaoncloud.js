class contactus{
    url(){
        cy.visit("https://www.qaoncloud.com/contact-us");
    }
    name(value){
        cy.get("input[placeholder='Name'][title='Alphabetic characters only']").type(value)

    }
  email(value){
    cy.get("input[placeholder='E-mail']").type(value);

  }
  phone(value){
    cy.get("input[placeholder='Phone']").type(value);

  }
  companyname(value){
    cy.get('form > [name="companyname"]').type(value);

  }
  role(value)
  {
    cy.get('form > [name="role"]').type(value);

  }
  requirements(value){
    cy.get("textarea[placeholder='Requirements']").type(value);

  }
  services(){
    cy.get('#navbarDropdown1').click();
    cy.wait(2000);


  }
  solutions(){
    cy.get('#navbarDropdown2');
   

  }
  industries(){
    cy.get('#navbarDropdown3')
    


  }
  insights(){
    cy.get('#navbarDropdown4')

  }
}
export default contactus;