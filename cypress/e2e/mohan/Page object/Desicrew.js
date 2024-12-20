class desicrew{
    url(){
        cy.visit("https://www.desicrew.in/");
    }
    urlcontactus(){
        cy.visit("https://www.desicrew.in/contact-us/contact-us.html")
    }
    firstname(value){
        cy.get("#fullName").type(value);
    }
    email(value){
        cy.get("#workEmail").type(value);
    }
    phonenumber(value){
        cy.get("#phoneNumber").type(value);
    }
    message(value){
        cy.get("#message").type(value);
    }
    Managed(){
        cy.get("#accountDropdown").click();
        cy.wait(2000);
    }
    ManagedSecurity(){
        cy.get(':nth-child(3) > #servicesDropdown').click();
        cy.wait(2000);
    }
    OtherServices(){
        cy.get(':nth-child(4) > #servicesDropdown').click();
        cy.wait(2000);
        }
    Resources(){
        cy.get(':nth-child(5) > #servicesDropdown').click();
    }    

}
export default desicrew;