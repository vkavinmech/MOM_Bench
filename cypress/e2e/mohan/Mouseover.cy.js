describe("handling mouseover",()=>{
    it("Handling mouseover",()=>{
        cy.visit("https://demo.opencart.com/");
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should("not.be.visible");
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click();
        cy.pause();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should("be.visible").and("have.text","PC (0)")
        cy.get(':nth-child(2) > .dropdown-toggle').trigger("mouseover").click();
        cy.get(':nth-child(2) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should("be.visible").contains("Macs (0)");
        cy.get(':nth-child(2) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should("be.visible").contains("Windows (0)");
        cy.get(':nth-child(2) > .dropdown-menu > .see-all').should("be.visible").and("have.text","Show All Laptops & Notebooks").click();
        cy.get(':nth-child(1) > .product-thumb > .content > .description > .price > .price-new').should("be.visible").and("have.text","$122.00");
        cy.go("back");
        cy.pause();
        cy.get(':nth-child(3) > .dropdown-toggle').should("be.visible").contains("Components").trigger("mouseover").click();
        cy.get(':nth-child(3) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should("be.visible").contains("Monitors").click();
        cy.get(':nth-child(1) > .product-thumb > .content > .description > h4 > a').should("be.visible");
        
    })
    it("Mouse action 2",()=>{
        cy.visit("https://testautomationpractice.blogspot.com/");
        cy.get(".dropbtn").invoke("show").click();

    })
    it("Right clicking actions",()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
       // cy.xpath("//span[@class='context-menu-one btn btn-neutral']").trigger("contextmenu");
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").rightclick();
        cy.wait(4000);
        cy.get('.context-menu-icon-quit').should("be.visible").and("have.text","Quit").click();
        
    })

it("Double click",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get("button[ondblclick='myFunction1()']").dblclick();
    cy.get("#field2").and("have.value",'Hello World!')

    
})
})