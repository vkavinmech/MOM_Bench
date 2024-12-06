describe("Dynamic",()=>{
    it("Dynamic table get all the values",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get(".table-container").should("be.visible");
      // cy.get(".table-container tr:nth-child(3) td:nth-child(2)").contains("Tablet").should("have.text","Tablet");
       cy.get(".table-container tr:nth-child(2) td:nth-child(2)").contains("Laptop").should("have.text","Laptop");
        cy.get(".table-container tr:nth-child(2)").each(($row,index)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,index,)=>{
                      const name=$col.text();
                      cy.log(name);
                })

            })
        })
    })
    it("Dynamic 2",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("ul#pagination a").then((num)=>{
           const pgnum= num.length;
           cy.log(pgnum);
        })
        let pgnum=4;
        for(let p=1;p<=pgnum;p++){
            if(pgnum>1){
               // cy.log("active pgnum::;",p);
               //cy.get('ul#pagination li:nth-child(1)').click();//clicking only one pages for 4 times
               cy.get('ul#pagination li:nth-child('+p+')').click();//clicking all pages

               cy.wait(2000);
            }
        }
    })
})