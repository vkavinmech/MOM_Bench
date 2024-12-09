

describe("Web table",()=>{
    it("Web table with Subject with Book name",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("#HTML1").should("be.visible");
        cy.get('[name="BookTable"]>tbody>tr:nth-child(3)>td:nth-child(1)').contains("Learn Java").should("be.visible").should("have.text","Learn Java");
       cy.get('[name="BookTable"]> tbody > tr:nth-child(3) > td:nth-child(3)').contains("Java").and("be.visible");
       cy.get('[name="BookTable"]>tbody>tr>td:nth-child(3)').each((e,index,)=>{
        let author=e.text();
        if(author.includes("JAVA")){
            cy.get('[name="BookTable"]>tbody>tr>td:nth-child(1)').eq(index).then((name1)=>{
                const at=name1.text();
                expect(at).to.equal("Master In Java");
            
            })
        }
        })

})


})
it("Web table with Book name with subject",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("#HTML1").should("be.visible");
   //  cy.get("HTML tr th").should("have.length","4");
    cy.get('[name="BookTable"]>tbody>tr:nth-child(3)>td:nth-child(1)').contains("Learn Java").should("be.visible").should("have.text","Learn Java");
   cy.get('[name="BookTable"]> tbody > tr:nth-child(3) > td:nth-child(3)').contains("Java").and("be.visible");
   cy.get('[name="BookTable"]>tbody>tr>td:nth-child(1)').each((e,index,)=>{
    let author=e.text();
    if(author.includes("Learn Java")){
        cy.get('[name="BookTable"]>tbody>tr>td:nth-child(3)').eq(index).then((name1)=>{
            const price=name1.text();
            expect(price).to.equal("Java");
        
        })
    }
    })

})