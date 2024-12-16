class Registerpage{
    url(){
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
    }
    fullname(value){
        cy.get('[width="200"] > input').type(value);
    }
    mailid(value){
        cy.get('[valign="bottom"] > [type="text"]').type(value);
    }
    password(value){
        cy.get('#newpasswd').type(value);
    }
    confirmpassword(value){
        cy.get('#newpasswd1').type(value);

    }
    email(value){
        cy.get(':nth-child(1) > [width="185"] > input').type(value);
    }
    mobno(value){
        cy.get('#mobno').type(value);
    }
    day(value){
        cy.get("select[name^='DOB_Day']").select(value);
    }
    month(value){
        cy.get("select[name^='DOB_Month']").select(value);
    }
    year(value){
        cy.get("select[name^='DOB_Year']").select(value);
    }
    male(){
        cy.get("input[value='m']").check();
    }
    female(){
        cy.get("input[value='f']").check();
    }
    country(value){
        cy.get("#country").select(value);
    }
    city(value){
        cy.get(':nth-child(1) > [colspan="3"] > select').select(value);
    }
    
    submit(){
        cy.get("#Register").click();
    }

}
export default Registerpage;


 
 