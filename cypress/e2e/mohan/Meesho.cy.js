describe("Meesho",()=>{
    beforeEach("Meesho",()=>{
        cy.visit("https://www.meesho.com/");
    })
    it("Validating Meesho Homepage",()=>{
       cy.Links("Cart");
       cy.get("input[placeholder='Try Saree, Kurti or Search by Product Code']").type("shoes").type("{enter}");
       cy.xpath("//div[@class='sc-dkrFOg ProductList__GridCol-sc-8lnc8o-0 cokuZA eCJiSA']//p[@class='sc-eDvSVe gQDOBc NewProductCardstyled__StyledDesktopProductTitle-sc-6y2tys-5 ejhQZU NewProductCardstyled__StyledDesktopProductTitle-sc-6y2tys-5 ejhQZU'][normalize-space()='Latest Fabulous Men Sports Shoes']").click();
       cy.go("back");
       //cy.Links("Kids");
       //cy.Links("Women Western");
    })
    it("Login with invalid credential",()=>{
       cy.Links("Become a Supplier");//----->custom command
       //cy.xpath("//input[@id='Subscriber-Email-2']").type("8072250341");--->sign up
       cy.get("input[value='Start Selling']").click();
       cy.get("#loginbutton").click();
       cy.Meesho("skmohanraj7471@gmail.com","Mohan@7471");//----->custom command
       cy.get("button[type='submit']").click();
})
})
