class AutomationForm{
    url(){
        cy.visit("https://mytestingthoughts.com/Sample/home.html");
    }
firstname(value){
    cy.get("input[placeholder='First Name']").type(value);
}
lastname(value){
    cy.get("input[placeholder='Last Name']").type(value);

}
male(){
    cy.get("#inlineRadioMale").click();
}
female(){
    cy.get("#inlineRadioFemale").click();
}

department(value){
    cy.get("select[name='department']").select(value);
}
username(value){
    cy.get("input[placeholder='Username']").type(value);
}
password(value){
    cy.get("input[placeholder='Password']").type(value);
}
confirmPassword(value){
    cy.get("input[placeholder='Confirm Password']").type(value);
}
email(value){
    cy.get("input[placeholder='E-Mail Address']").type(value);
}
contactno(value){
    cy.get("input[placeholder='(639)']").type(value);
}
Additionalinfo(value){
    cy.get("#exampleFormControlTextarea1").type(value);
}
submit(){
    cy.get("button[type='submit']");
}
}
export default AutomationForm;