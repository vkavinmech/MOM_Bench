

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
    it.only("navigating to the second page and logging the data", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");  // Visit the website
        cy.get("table#productTable").scrollIntoView();  // Ensure the table is in view
    
        // Navigate directly to the second page and get the data
        cy.log("Navigating to page 2");
    
        // Click on the second page (if it exists in the pagination)
        cy.get('ul#pagination li:nth-child(3) a').click();
    
        // Wait for the table to load after navigating
        cy.wait(3000);
    
        // Now extract and log data from the second page's table
        cy.get("#productTable tbody tr")
            .each(($row, index, $rows) => {
                cy.wrap($row).within(() => {
                    // Iterate over each cell in the row and log the text content
                    cy.get('td').each(($cel, index, $cels) => {
                        cy.log($cel.text());  // Log the text of each cell
                    });
                });
            });
    });
    
    
       
        })

        
        
