describe("Automate the Snapdeal website",()=>{
   
    it("Visit the application and verify all the elements",()=>{
      cy.visit("https://www.snapdeal.com/");
        cy.url().should("eq","https://www.snapdeal.com/").and("includes","snapdeal");
        cy.get('a.notIeLogoHeader > .notIeLogoHeader').should("be.visible");
        cy.get('[data-index="1"] > .dp-widget-link').should('be.visible').contains("Our Blog");
        cy.get('.helpCentrDiv > .dp-widget-link').should('be.visible').contains("Help Center");
        cy.get('[data-index="3"] > .dp-widget-link').should('be.visible');
        cy.get('[data-index="4"] > .dp-widget-link').should('be.visible');
        cy.get('.cartTextSpan').should('be.visible').and("not.be.disabled")
        cy.get('.accountUserName').should('be.visible').and("not.be.disabled").contains("Sign In")
        cy.get(".sd-icon.sd-icon-menu").invoke('show').click({force:true})
        cy.get('[navindex="1"] > .menuLinks > .catText').should("be.visible");
        //cy.get('[navindex="3"] > .menuLinks > .catText').should("be.visible").trigger("mouseover").click({force:true})
        
 })
 it.skip("Register the account",()=>{
   cy.visit("https://www.snapdeal.com/");
    cy.xpath("(//span[@class='accountUserName col-xs-12 reset-padding'])[1]").trigger("mouseover").click();
    cy.get("span[class='newUserRegister']").should("be.visible").click();
    cy.wait(5000);
    cy.frameLoaded("#loginIframe",{timeout:5000});
    cy.wait(5000)
    cy.iframe("#loginIframe").find("#userName").type("skmohanraj7471@gmail.com")
    cy.iframe("#loginIframe").find("#checkUser").click()
    cy.wait(4000)
    cy.pause();
    cy.iframe("#loginIframe").find("#loginUsingOtp").click();
    //cy.iframe("#loginIframe").find("#j_username_new").type("skmohanraj7471@gmail.com");
   // cy.iframe("#loginIframe").find("#j_name").type("Mohan raj");
   // cy.iframe("#loginIframe").find("#j_dob").clear().type("05/03/2000")
   // cy.iframe("#loginIframe").find("#j_password").type("mohanraj7471")
    //cy.iframe("#loginIframe") .find("#userSignup").click();
 })
 it.only("Search the Tv products and buy ",()=>{
   cy.visit("https://www.snapdeal.com/");
    cy.get("#inputValEnter").clear().type("tv",{timeout:5000});
    cy.get(".searchTextSpan").click();
   cy.xpath("(//a[@class='dp-widget-link noUdLine hashAdded'])[1]").invoke("removeAttr","target").click();
   cy.xpath("(//span[@class='pdp-final-price'])[1]").then((price)=>{
      cy.log(price.text());
     //expect(price).to.equal("Rs. 185");
   })
   cy.get("div[id='add-cart-button-id'] span[class='intialtext']").click();
   cy.get('.col-xs-15 > .btn-theme-secondary').click();
   cy.get('#pincode-value').type("638311");
   
   
   })
   it("Search the Shoe  products and buy ",()=>{
      cy.visit("https://www.snapdeal.com/");
      cy.get("#inputValEnter").clear().type("White shoes",{timeout:5000});
      cy.get(".searchTextSpan").click();
      cy.get("div[id='620579935102'] div[class='product-desc-rating '] a[class='dp-widget-link noUdLine hashAdded']").invoke("removeAttr","target").click();
      cy.get(".pdp-final-price").invoke("text").then((amount)=>{
         cy.log(`price:${amount}`)
      })
      cy.get(".attr-val.ellipses-cls").then((colour)=>{
         cy.log(colour.text());
         
      })
      cy.get("div[id='add-cart-button-id'] span[class='intialtext']").click();
      cy.get(".you-pay").invoke("text").then((details)=>{
         cy.log(`price:${details}`)
      })
      
     }) 
     it("Search the Kitchen products and buy ",()=>{
      cy.visit("https://www.snapdeal.com/");
      cy.get("#inputValEnter").clear().type("Kitchen product",{timeout:5000});
      cy.get(".searchTextSpan").click();
      cy.get("div[id='629324674594'] div[class='product-desc-rating '] a[class='dp-widget-link noUdLine hashAdded']").invoke("removeAttr","target").click();
      cy.get(".pdp-final-price").invoke("text").then((amount1)=>{
         cy.log(`price2:${amount1}`)
      })
      cy.get(".attr-val.ellipses-cls").then((colour)=>{
         cy.log(colour.text())
      })
      cy.get("#pincode-check").clear().type("638311");
      cy.get("div[id='pincode-check-bttn'] span").click();
      cy.get("div[id='add-cart-button-id'] span[class='intialtext']").click();
      cy.get(".col-xs-9.info-container").invoke("text").then((price3)=>{
         cy.log(`price:${price3}`)
      })
      
})
it("Visiting to flipkart to Buy Black Iphone ",()=>{
   cy.visit("https://www.flipkart.com/");
   cy.url().should("includes","flipkart");
   cy.get('.Pke_EE').clear().type("Mobiles");
   cy.get("button[type='submit'] svg").click();
   cy.xpath("(//a[@target='_blank'])[1]").invoke("removeAttr","target").click();
   cy.get('.UOCQB1 > .hl05eU > .Nx9bqj').invoke('text').then((price)=>{
      const actualprice=`price:${price}`;
      cy.log(actualprice)
   })
   let price="₹72,900";
   cy.get('#swatch-0-color > .GK7Ljp > ._0QyAeO').click();
   cy.get('#swatch-0-storage > .CDDksN').click();
   cy.get('#pincodeInputId').type("638311");
   cy.get('form > .QqFHMw').click({force:true});
  

   

})
})