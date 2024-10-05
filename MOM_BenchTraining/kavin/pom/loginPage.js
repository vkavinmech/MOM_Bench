class Login {
    constructor() {
      this.email = "input[placeholder='Username']";
      this.password = "input[placeholder='Password']";
      this.submit = "button[type='submit']";
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
  
  export default Login;