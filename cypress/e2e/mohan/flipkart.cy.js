describe("flipkart",()=>{

    it.skip("Visiting to flipkart to Buy laptop ",()=>{
        cy.visit("https://www.flipkart.com/");
        cy.url().should("includes","flipkart");
        cy.get('.YLCOuy > picture > img').should("be.visible")
        cy.get('.Pke_EE').clear().type("hp laptop").type("{enter}")
      cy.xpath("(//a[@class='CGtC98'])[1]").invoke("removeAttr","target").click()
      cy.get('form > .QqFHMw').click()
       
     
    }) 
    it.skip("Verify UI and Update Location in swiggy app and buy the food",()=>{
      cy.visit("https://www.swiggy.com/")
      cy.get("img[height='100%']").should("be.visible").invoke("text").then((swig)=>{
        cy.log(`text:${swig}`);
        
      })
      cy.xpath("(//a[normalize-space()='Get the App'])[1]").should("be.visible").and("not.be.disabled")
      cy.xpath("(//input[@id='location'])[1]").type("erode");
      cy.xpath("(//span[normalize-space()='Erode, Tamil Nadu, India'])[1]").click()
      cy.xpath("(//span[@class='E8Mnj'])[1]").invoke("text").then((loc)=>{
      cy.log(`location:${loc}`)
      
      })
      cy.xpath("(//span[normalize-space()='Search'])[1]").should("be.visible").click()
      cy.xpath("(//div[@class='_1UHJH'])[1]").type("veg briyani").type("{enter}");
      cy.xpath("(//div[contains(text(),'Add')])[2]").click();
      cy.scrollTo("bottom")
     cy.xpath("(//button[normalize-space()='See full menu'])[1]").click()
      cy.get('.styles_viewCart__32FxP > span').click()
      cy.get('.WO7LQ').should('be.visible').and("not.be.disabled").click()
      cy.get('#mobile').type("8072250341");
      cy.get('.ApfF7').should("not.be.disabled").click();
      cy.pause();
      cy.get('.ApfF7').click()
      cy.get(':nth-child(1) > ._3EgOG > :nth-child(2) > ._3kHjz').click()
      cy.get('._4dnMB').click()
      cy.get('[data-testid="header_subtitle"]').then((price)=>{
        cy.log(price.text())
      })

})
it("Demo shop register",()=>{
  cy.visit("https://demowebshop.tricentis.com/")
  cy.get("img[alt='Tricentis Demo Web Shop']").should('be.visible');
  cy.xpath("(//a[normalize-space()='Register'])[1]").click();
  cy.xpath("(//h1[normalize-space()='Register'])[1]").and("be.visible");
  cy.xpath("(//input[@id='gender-male'])[1]").check().should("be.checked");
  cy.xpath("(//input[@id='FirstName'])[1]").type("mohan");
  cy.xpath("(//input[@id='LastName'])[1]").type("raj");
  cy.xpath("(//input[@id='Email'])[1]").type("skmohanraj7471@gmail.com");
  cy.xpath("(//input[@id='Password'])[1]").type('mohanraj7471');
  cy.xpath("(//input[@id='ConfirmPassword'])[1]").type("mohanraj7471");
 // cy.xpath("(//input[@id='register-button'])[1]").should("not.be.disabled").click();

  })
  it("Demo shop Login",()=>{
    cy.visit("https://demowebshop.tricentis.com/")
    cy.xpath("(//a[normalize-space()='Log in'])[1]").click();
    cy.xpath("(//input[@id='Email'])[1]").type("skmohanraj7471@gmail.com");
    cy.xpath("(//input[@id='Password'])[1]").type('mohanraj7471');
    cy.xpath("(//input[@value='Log in'])[1]").click();

})
it("Demo shop Search store",()=>{
  cy.visit("https://demowebshop.tricentis.com/")
  cy.xpath("(//a[normalize-space()='Log in'])[1]").click();
    cy.xpath("(//input[@id='Email'])[1]").type("skmohanraj7471@gmail.com");
    cy.xpath("(//input[@id='Password'])[1]").type('mohanraj7471');
    cy.xpath("(//input[@value='Log in'])[1]").click();
    cy.xpath("(//input[@id='small-searchterms'])[1]").type("computer");
    cy.xpath("(//input[@value='Search'])[1]").click();
    cy.xpath("(//input[@value='Add to cart'])[1]").click();
    cy.xpath("(//input[@id='product_attribute_72_5_18_65'])[1]").click();
    cy.xpath("(//input[@id='product_attribute_72_6_19_91'])[1]").click();
    cy.xpath("(//input[@id='product_attribute_72_8_30_95'])[1]").click();
    cy.xpath("(//span[@class='price-value-72'])[1]").invoke('text').then((det)=>{
      cy.log(det)
    })
    cy.xpath("(//input[@id='add-to-cart-button-72'])[1]").should("not.be.disabled").click();
    cy.wait(3000)
    cy.xpath("(//span[normalize-space()='Shopping cart'])[1]").click();
    
   cy.xpath("(//input[@id='termsofservice'])[1]").click();
   cy.get('.product-price > strong').then((total)=>{
    cy.log(total.text())
   })
   cy.get('#checkout').click()
  // cy.xpath("//select[@id='BillingNewAddress_CountryId']").select("India")


//cy.get('#BillingNewAddress_Company').type("desicrew");
//cy.get('#BillingNewAddress_City').type("erode");
//cy.get('#BillingNewAddress_Address1').type("bhavani")
//cy.get('#BillingNewAddress_Address2').type("near bus stand")
//cy.get('#BillingNewAddress_ZipPostalCode').type('638311');
//cy.get('#BillingNewAddress_PhoneNumber').type('8072250341');
//cy.get('#BillingNewAddress_FaxNumber').type('12345678')
cy.get('#billing-buttons-container > .button-1').click()
cy.get('#shipping-buttons-container > .button-1').click()
cy.get('#shipping-method-buttons-container > .button-1').click();
cy.get('#payment-method-buttons-container > .button-1').click();
cy.get('td').then((cod)=>{
  cy.log(cod.text())
})
cy.get('#payment-info-buttons-container > .button-1').click();
cy.get('.product-price > strong').then((final)=>{
  cy.log(final.text())
})
cy.xpath("(//a[normalize-space()='Log out'])[1]").click()

})
it("Demo shop Search Books",()=>{
  cy.visit("https://demowebshop.tricentis.com/")
  cy.xpath("(//a[normalize-space()='Log in'])[1]").click();
    cy.xpath("(//input[@id='Email'])[1]").type("skmohanraj7471@gmail.com");
    cy.xpath("(//input[@id='Password'])[1]").type('mohanraj7471');
    cy.xpath("(//input[@value='Log in'])[1]").click();
    cy.xpath("(//a[normalize-space()='Books'])[1]").click();
    cy.xpath("(//input[@value='Add to cart'])[1]").click()
    cy.get('.ico-cart > .cart-label').click()
  cy.get('.product-price > strong').then((price)=>{
    cy.log(price.text())
   })
   cy.get('#termsofservice').click()
   cy.get('#checkout').click()
   cy.get('#billing-buttons-container > .button-1').click()
cy.get('#shipping-buttons-container > .button-1').click()
cy.get('#shipping-method-buttons-container > .button-1').click();
cy.get('#payment-method-buttons-container > .button-1').click();
cy.get('td').then((cod)=>{
  cy.log(cod.text())
})
cy.get('#payment-info-buttons-container > .button-1').click();
cy.get('.product-price > strong').then((final)=>{
  cy.log(final.text())
})
cy.xpath("(//a[normalize-space()='Log out'])[1]").click()


})
it("Demo shop Search electronics",()=>{
  cy.visit("https://demowebshop.tricentis.com/")
  cy.xpath("(//a[normalize-space()='Log in'])[1]").click();
    cy.xpath("(//input[@id='Email'])[1]").type("skmohanraj7471@gmail.com");
    cy.xpath("(//input[@id='Password'])[1]").type('mohanraj7471');
    cy.xpath("(//input[@value='Log in'])[1]").click();
    cy.xpath("(//a[normalize-space()='Electronics'])[1]").trigger("mouseover").click();
    cy.xpath("(//a[@title='Show products in category Cell phones'][normalize-space()='Cell phones'])[1]").click()
    cy.xpath("(//input[@value='Add to cart'])[1]").click();
    cy.get('.ico-cart > .cart-label').click()
  cy.get('.product-price > strong').then((price)=>{
    cy.log(price.text())
   })
   cy.get('#termsofservice').click()
   cy.get('#checkout').click()
   cy.get('#billing-buttons-container > .button-1').click()
cy.get('#shipping-buttons-container > .button-1').click()
cy.get('#shipping-method-buttons-container > .button-1').click();
cy.get('#payment-method-buttons-container > .button-1').click();
cy.get('td').then((cod)=>{
  cy.log(cod.text())
})
cy.get('#payment-info-buttons-container > .button-1').click();
cy.get('.product-price > strong').then((final)=>{
  cy.log(final.text())
})
cy.xpath("(//a[normalize-space()='Log out'])[1]").click()


})
it("Demo shop Search Jewellery",()=>{
  cy.visit("https://demowebshop.tricentis.com/")
  cy.xpath("(//a[normalize-space()='Log in'])[1]").click();
    cy.xpath("(//input[@id='Email'])[1]").type("skmohanraj7471@gmail.com");
    cy.xpath("(//input[@id='Password'])[1]").type('mohanraj7471');
    cy.xpath("(//input[@value='Log in'])[1]").click();
    cy.xpath("(//a[normalize-space()='Jewelry'])[1]").click();
    cy.get("#products-pagesize").select("4");
    cy.xpath("(//input[@value='Add to cart'])[2]").click()
    cy.get('.ico-cart > .cart-label').click()
    cy.get('.product-price > strong').then((price)=>{
      cy.log(price.text())
     })
     cy.get('#termsofservice').click()
     cy.get('#checkout').click()
     cy.get('#billing-buttons-container > .button-1').click()
  cy.get('#shipping-buttons-container > .button-1').click()
  cy.get('#shipping-method-buttons-container > .button-1').click();
  cy.get('#payment-method-buttons-container > .button-1').click();
  cy.get('td').then((cod)=>{
    cy.log(cod.text())
  })
  cy.get('#payment-info-buttons-container > .button-1').click();
  cy.get('.product-price > strong').then((final)=>{
    cy.log(final.text())
  })
  cy.xpath("(//a[normalize-space()='Log out'])[1]").click()
  
  
})
})