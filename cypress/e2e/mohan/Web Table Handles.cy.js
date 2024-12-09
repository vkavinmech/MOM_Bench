
describe("web table",()=>{
   it("Static table Book name with Author",()=>{
       cy.visit("https://testautomationpractice.blogspot.com/");
       cy.get('[name="BookTable"]').should("be.visible");
       cy.get('[name="BookTable"]>tbody>tr:nth-child(2)>td:nth-child(1)').contains("Learn Selenium").should("be.visible");
       cy.get('[name="BookTable"]>tbody>tr:nth-child(3)>td:nth-child(1)').contains("Learn Java").should("be.visible").should("have.text","Learn Java");
       cy.get('[name="BookTable"]>tbody>tr>td:nth-child(1)').each(($e,index)=>{
        let author=$e.text();
        if(author.includes("Learn JS")){
            cy.get('[name="BookTable"]>tbody>tr>td:nth-child(2)').eq(index).then((name1)=>{
                const book=name1.text();
                expect(book).equal("Animesh");
              })
        }
        })
        
        })
        it("Static table 2  Author name with Book name",()=>{
            cy.visit("https://testautomationpractice.blogspot.com/");
            cy.get('[name="BookTable"]').should("be.visible");
            cy.get('[name="BookTable"]>tbody>tr:nth-child(2)>td:nth-child(1)').contains("Learn Selenium").should("be.visible");
            cy.get('[name="BookTable"]>tbody>tr:nth-child(3)>td:nth-child(1)').contains("Learn Java").should("be.visible").should("have.text","Learn Java");
            cy.get('[name="BookTable"]>tbody>tr>td:nth-child(2)').each((e,index,)=>{
             let author=e.text();
             if(author.includes("Amod")){
                 cy.get('[name="BookTable"]>tbody>tr>td:nth-child(1)').eq(index).then((name1)=>{
                     const book=name1.text();
                     expect(book).to.equal("Master In Java");
                 
                 })
             }
             })

   })


})