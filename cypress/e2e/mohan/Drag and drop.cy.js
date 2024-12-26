
describe("Drag and drop",()=>{
    it("drag and drop",()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box1").drag("#box106",{force:true});
       

     })
     it("Drag and drop2",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get("div[id='HTML3'] h2[class='title']").scrollIntoView();
        cy.wait(2000);
        cy.get('#draggable > p').drag("#droppable",{force:true});
     })
     it("drag and drop 3",()=>{
        cy.visit("https://practice.expandtesting.com/drag-and-drop");
        cy.get('#column-b > header').should("have.text","B")
        cy.get("#column-a").drag("#column-b");
        cy.get('#column-b > header').should("be.visible").then((data)=>{
            cy.log(data.text());
        
        })
        cy.get("#column-a").should("be.visible").then((data1)=>{
            cy.log(data1.text())
        })
     })
     it("drag and drop 4",()=>{
        cy.visit("https://demoqa.com/droppable/");
        cy.get('.text-center').scrollIntoView();
        cy.get('#draggable').drag("#simpleDropContainer > #droppable",{force:true});
        cy.get('#droppableExample-tab-accept').click();
        cy.get('#acceptable').drag("#acceptDropContainer > #droppable",{force:true})
        cy.get('#notAcceptable').drag("#acceptDropContainer > #droppable",{force:true})

     }
    )

})