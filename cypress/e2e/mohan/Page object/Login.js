 class loginpage{
    url(){
        cy.visit("https://practicetestautomation.com/practice-test-login/")
    }
    fillUsername(value){
       const name= cy.get("#username");
       name.clear();
       name.type(value);
        
    }
    fillPassword(value){
       const pass= cy.get("#password");
       pass.clear();
       pass.type(value);
       
    }
    submit(){
       let button=cy.get("#submit");
    button.click();
    }
}
    export default loginpage;