class Login{

    txtUsername="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblMsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setUsername(username){
        cy.get(this.txtUsername).type(username);
    }
    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }
    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }
    verifyLogin(expecValue){
        cy.get(this.lblMsg).should('have.text',expecValue);
    }
}
export default Login;