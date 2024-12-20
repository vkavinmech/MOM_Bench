describe("New Custom commands",()=>{
    it("Navigate to page",()=>{
        cy.navigatetoPage();//------>custom commands
        cy.url().should("be.equal","https://www.meesho.com/");
        cy.navigateusingSearch("Mobile phones");//----->custom commands
        cy.xpath("//div[@class='sc-dkrFOg ProductList__GridCol-sc-8lnc8o-0 cokuZA jGAjKy']//p[@class='sc-eDvSVe gQDOBc NewProductCardstyled__StyledDesktopProductTitle-sc-6y2tys-5 ejhQZU NewProductCardstyled__StyledDesktopProductTitle-sc-6y2tys-5 ejhQZU'][normalize-space()='Others Cases & Covers']").click();
        cy.xpath("//button[@class='sc-gYbzsP cxnfNY ProductCard__GhostButtonBigStyled-sc-camkhj-2 Uqksj ProductCard__GhostButtonBigStyled-sc-camkhj-2 Uqksj']").click();
        //cy.xpath("//input[@type='tel']").type("8072250341");//---->sign up
        cy.xpath("//span[@class='sc-eDvSVe fpkPeP']").click();
        cy.navigateusingSearch("Smart tv");
        cy.xpath("//p[contains(text(),'Croma 32 inch HD Ready LED Linux TV with Dolby Aud')]").click();
        cy.xpath("//span[normalize-space()='Add to Cart']").click();//---->add to cart
        cy.navigateusingLinks("Men");//   ---->dropdownlinks
        cy.navigateusingLinks("Kids");
        cy.navigateusingLinks("Home&Kitchen");
    })
    it("Text field",()=>{
        cy.navigateinautomationpage();
        cy.textfields("mohan");//------>custom comands
        cy.xpath("//input[@id='name']").should("have.value","mohan");
        cy.emailfields("mohan@gmail.com");
        cy.xpath("//input[@id='email']").should('have.text',"mohan@gmail.com");
})
it("Dropdown",()=>{
    cy.navigateinautomationpage();
    cy.selectDropdown("Japan");//----->custom commands
    cy.xpath("//select[@id='country']").should("have.value"," Japan");
    cy.selectDropdown("India");
   cy.selectDropdown("United States");
   cy.selectDropdown("China");

})
it("Radio button",()=>{
    cy.navigateinautomationpage();
    cy.selectmaleradiobutton();//------->custom commands
    cy.get("#male").should("be.checked");
    cy.selectfemaleradiobutton();
})
it("Alert",()=>{
    cy.navigateinautomationpage();
    cy.simplealert();
    cy.confirmalert();
})
it.only("checkbox",()=>{
    cy.navigateinautomationpage();
    cy.navigatetoCheckbox("Monday");
})

})