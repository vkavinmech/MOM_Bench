

describe("drop",()=>
{
    it("Dropdown with select",()=>
    {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("#zcf_address_country").select("Hong Kong").should("have.value","Hong Kong");
    })
})
it("Dropdown without select",()=>
{
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get(".select2-search__field").type("India").type("(enter");
    cy.get("#select2-billing_country-container").should("have.text","India");

})
it("Auto suggest dropdown",()=>
{
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type("delhi");
    cy.xpath("//em[contains(text(),'Delhi')]").contains("Delhi").click();
})
it.skip("Dynamic suggestions",()=>
{
    cy.visit("https://www.google.com/");
    cy.get(".gLFyf").type("cypress automation");
   // cy.xpath("//span[(text(),'cypress')]").each( ($el,index,list)=>{
      //  if($el.text()=="cypress automation jobs"){
      //      cy.wrap($el).click();
       // }
    

})

