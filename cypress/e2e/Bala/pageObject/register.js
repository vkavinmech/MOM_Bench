class Register
{
    visit()
    {
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
    }
    setfullName(fullname)
    {
         cy.get('[width="200"] > input').type(fullname);
    }
    setRedffillId(Id)
    {
        cy.get('[valign="bottom"] > [type="text"]').type(Id);
    }
    availability()
    {
        cy.get('.btn_checkavail').click();

    }
    setPassword(password)
    {
        cy.get("#newpasswd").type(password)
    }
    eyeToggle()
    {
        cy.get("#eyeiconNew").click()
        cy.get("#newpasswd").should('have.value',"bala02aadhi@18")
    }
    setRetypePassword(repassword)
    {
        cy.get("#newpasswd1").type(repassword)
    }
    eyeToggle1()
    {
        cy.get("#eyeiconRe").click()
        cy.get("#newpasswd1").should('have.value',"bala02aadhi@18")
    }
    alternateEmail(alteremail)
    {
        cy.get(':nth-child(1) > [width="185"] > input').type(alteremail)
    }
    mobile(entermobile)
    {
        cy.get('#mobno').type(entermobile)
    }
    genderMale()
    {
        cy.get("input[value='m']").click({ force: true }).should('be.checked');

            
        
        cy.get("input[value='f']").should('not.be.checked')
    }
    genderFemale()
    {
        cy.get("input[value='f']").click({force : true}).should('be.checked')
        cy.get("input[value='m']").should('not.be.checked')
    }
   
}
export default Register;