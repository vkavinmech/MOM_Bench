class ticket{
    url(){
        cy.visit("https://www.tnstc.in/OTRSOnline/");
    }
    From(value){
        cy.get("#matchStartPlace").type(value);
    }
    to(value){
        cy.get("#matchEndPlace").type(value);
    }
    onward(){
        cy.get("#txtdeptDateOtrip").click();
        cy.xpath("(//a[normalize-space()='15'])[1]").click();
    }
    return(){
        cy.get("#txtdeptDateRtrip").click();
        cy.xpath("(//a[normalize-space()='24'])[1]").click();
    }
    submit(){
        cy.get('#searchButton').click();
    }
  
}
export default ticket;