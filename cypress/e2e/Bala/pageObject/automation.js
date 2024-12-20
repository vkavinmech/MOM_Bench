class Automation
{
    visitUrl()
    {
        cy.visit("https://practicetestautomation.com/practice-test-login/");
    }
    setUsername(name)
    {
        cy.get("#username").type(name);
    }

   setPassword(password)
   {
    cy.get("#password").type(password)
   }
   submit()
   {
    cy.get("#submit").click();
   }
   checkurl()
   {
    cy.url().should('eq',"https://practicetestautomation.com/logged-in-successfully/")
   }
   homeLink()
   {
    cy.get("li[id='menu-item-43'] a").click();
   }
   practiceLink()
   {
    cy.get("li[id='menu-item-20'] a").click()
   }
   coursesLink()
   {
    cy.get("li[id='menu-item-21'] a").click()
   }
   blogLink()
   {
    cy.get("li[id='menu-item-19'] a").click()
   }
   contactLink()
   {
    cy.get("a[href='https://practicetestautomation.com/contact/']").click();
   }
   checkcontactUrl()
   {
    cy.url().should('eq',"https://practicetestautomation.com/contact/")
   }
   setName(name)
   {
    cy.get("#wpforms-161-field_0").type(name);
   }
   setLastname(lastname)
   {
    cy.get("#wpforms-161-field_0-last").type(lastname);
   }
   setEmail(email)
   {
    cy.get("#wpforms-161-field_1").type(email);
   }
   setComment(comment)
   {
    cy.get('#wpforms-161-field_2').type(comment);
   }
   submitForm()
   {
    cy.get("#wpforms-submit-161").click();
   }
}
export default Automation