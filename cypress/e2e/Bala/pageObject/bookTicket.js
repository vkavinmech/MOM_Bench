class bookTicket
{
    visitUrl()
    {
        cy.visit("https://www.tnstc.in/OTRSOnline/")
    }
    formLocation(location)
    {
        cy.get("#matchStartPlace").type(location)
    }
    toLocation(location)
    {
        cy.get("#matchEndPlace").type(location)
    }
    onwardsDate()
    {
        cy.get("#txtdeptDateOtrip").click();
        cy.xpath("//a[normalize-space()='17']").click();
    }
    retrunDate()
    {
        cy.get("#txtdeptDateRtrip").click();
        cy.xpath(" //a[normalize-space()='26']").click
    }
    searchbus()
    {
        cy.get("#searchButton").click();
    }
}
export default bookTicket;