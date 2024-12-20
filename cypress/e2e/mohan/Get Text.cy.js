

describe("Text",()=>{
    it("Get Text",()=>
    {
        cy.visit("https://www.google.com/");
        cy.get("a[aria-label='Gmail ']").then( (text1)=>
            {
               const element=text1.text();
               cy.log(element);
               
    })
})
it("image",()=>{
    cy.visit("https://www.google.com/");
    cy.xpath('//a[text()="Images"]').click();
})

})
