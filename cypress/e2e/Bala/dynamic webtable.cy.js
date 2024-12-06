describe("dynamic web table",()=>
{
    it("validating the dynamic web table with pagination",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#productTable tr").should('have.length','6')
        cy.get("#productTable tr th").should('have.length',4)
        cy.get("#productTable tr td").should('have.length',20)

    })

    it("verifying specific value in the cell",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#productTable>tbody>tr:nth-child(3)>td:nth-child(2)").contains("Tablet")
    })
    it("read the related data",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("#productTable>tbody>tr:nth-child(3)>td:nth-child(2)")
    .each(($e, index, $list)=>
                {
                    const price =$e.text()
                    if(price.includes("Tablet")){
                        cy.get("#productTable>tbody>tr:nth-child(3)>td:nth-child(3)").eq(index)
                        .then(function(value)
                    {
                        const price=value.text()
                        expect(price).to.eq("$5.99")
                        cy.log(price)
                        
                    })
                    }
                })
it("read all the datas in the rows ",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#productTable tbody tr")
        .each(($row , index , $rows)=>
        {
            cy.wrap($row).within(()=>
            {
                cy.get('td').each(($cel , index , $cels)=>
                {
                    cy.log($cel.text())
                })
            })
        })
       
    })
         it("validating the pagination",()=>
        {
            cy.visit("https://testautomationpractice.blogspot.com/")
            cy.get("ul#pagination li a").then(($ele)=>
            {
                let pagenumber = $ele.lemgth
                cy.log(pagenumber)
            })

        })
})
})