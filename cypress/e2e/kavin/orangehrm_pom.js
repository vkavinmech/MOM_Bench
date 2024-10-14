class login {
    constructor() {
      this.email = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
      this.password = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
      this.submit = ".oxd-button";
    }
    get Email() {
      return cy.get(this.email);
    }
  
    get Password() {
      return cy.get(this.password);
    }
  
    get SubmitButton() {
      return cy.get(this.submit);
    }
  }  
  /*
    get Email() {
      return cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input");
    }
  
    get Password() {
      return cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input");
    }
  
    get SubmitButton() {
      return cy.get(".oxd-button");
    }*/
  
  export default login;