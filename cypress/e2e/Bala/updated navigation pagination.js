

describe("navigating pagination",()=>
{
    it("verifying navigation of pagination",()=>
    {
        cy.visit("https://testautomationpractice.blogspot.com/")
         cy.get("table#productTable").scrollIntoView()
        let page=4;
        for(let p=1; p<=page; p++){
            if(page>1){
                cy.log("active page numbers:",p)
                cy.get('ul#pagination li:nth-child(' + p + ') a')
                .click()
                cy.wait(3000)
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

            }
        }
    })
    it.only("navigating to the third page and logging the data", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");  
        cy.get("table#productTable").scrollIntoView();  
        cy.log("Navigating to page 3");
        cy.get('ul#pagination li:nth-child(3) a').click();
        cy.wait(3000);
        cy.get("#productTable tbody tr")
        
        .each(($row, index, $rows) => {

            cy.wrap($row).within(() => {

                cy.get('td').each(($cel, index, $cels) => {

                    cy.log($cel.text()); 
                });
            });
        });
});
it.only("navigating to the second page and logging the data", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");  
    cy.get("table#productTable").scrollIntoView();  
    cy.log("Navigating to page 2");
    cy.get('ul#pagination li:nth-child(2) a').click();
    cy.wait(3000);
    cy.get("#productTable tbody tr")
    
    .each(($row, index, $rows) => {

        cy.wrap($row).within(() => {

            cy.get('td').each(($cel, index, $cels) => {

                cy.log($cel.text()); 
            })
        })
    })
    cy.get("#productTable>tbody>tr:nth-child(5)>td:nth-child(2)")
.each(($e, index, $list)=>
            {
                const Name =$e.text()
                if(Name.includes("Digital Camera")){
                    cy.get("#productTable>tbody>tr:nth-child(5)>td:nth-child(3)").eq(index)
                    .then(function(value)
                {
                    const price=value.text()
                    expect(price).to.eq("$16.99")
                    cy.log(price)
                    
                })
                }
                cy.get(" tbody tr:nth-child(5) td:nth-child(4) input:nth-child(1)").eq(index).check().should('be.checked')
            })
            cy.get("#productTable>tbody>tr:nth-child(1)>td:nth-child(1)")
            .each(($e, index, $list)=>
                        {
                            const id =$e.text()
                            if(id.includes(6)){
                                cy.get("#productTable>tbody>tr:nth-child(1)>td:nth-child(2)").eq(index)
                                .then(function(value)
                            {
                                const namevalue=value.text()
                                expect(namevalue).to.eq("Bluetooth Speaker")
                                cy.log(namevalue)
                                
                            })
                            cy.get("#productTable>tbody>tr:nth-child(1)>td:nth-child(3)").eq(index)
                            .then(function(value)
                        {
                            const pricevalue=value.text()
                            expect(pricevalue).to.eq("$9.99")
                            cy.log(pricevalue)
                            
                        })
                            }
                            cy.get("tbody tr:nth-child(1) td:nth-child(4) input:nth-child(1)").eq(index).check().should('be.checked')

                        })
                         cy.get("#productTable>tbody>tr:nth-child(2)>td:nth-child(1)")
            .each(($e, index, $list)=>
                        {
                            const id =$e.text()
                            if(id.includes(7)){
                                cy.get("#productTable>tbody>tr:nth-child(2)>td:nth-child(2)").eq(index)
                                .then(function(value)
                            {
                                const namevalue=value.text()
                                expect(namevalue).to.eq("Television")
                                cy.log(namevalue)
                                
                            })
                            cy.get("#productTable>tbody>tr:nth-child(2)>td:nth-child(3)").eq(index)
                            .then(function(value)
                        {
                            const pricevalue=value.text()
                            expect(pricevalue).to.eq("$20.99")
                            cy.log(pricevalue)
                            
                        })
                            }
                            cy.get("tbody tr:nth-child(2) td:nth-child(4) input:nth-child(1)").eq(index).check().should('be.checked')
            

    
})
cy.get("#productTable>tbody>tr:nth-child(3)>td:nth-child(1)")
.each(($e, index, $list)=>
            {
                const id =$e.text()
                if(id.includes(8)){
                    cy.get("#productTable>tbody>tr:nth-child(3)>td:nth-child(2)").eq(index)
                    .then(function(value)
                {
                    const namevalue=value.text()
                    expect(namevalue).to.eq("Action Camera")
                    cy.log(namevalue)
                    
                })
                cy.get("#productTable>tbody>tr:nth-child(3)>td:nth-child(3)").eq(index)
                .then(function(value)
            {
                const pricevalue=value.text()
                expect(pricevalue).to.eq("$15.99")
                cy.log(pricevalue)
                
            })
                }
                cy.get("tbody tr:nth-child(3) td:nth-child(4) input:nth-child(1)").eq(index).check().should('be.checked')



})




})  
}) 
    
       
           
               
                 
        