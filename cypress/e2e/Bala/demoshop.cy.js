describe("demo shop",()=>
{
    it("Register an acoount",()=>
    {
        cy.visit("https://demowebshop.tricentis.com/")
        cy.get(".ico-register").click()
        cy.url().should("eq","https://demowebshop.tricentis.com/register")
        cy.get("#gender-female").click()
        cy.get("#FirstName").type("bala")
        cy.get("#LastName").type("aadhikesavan")
        cy.get("#Email").type("bala02aadhi@gmail.com")
        cy.get("#Password").type("bala@123")
        cy.get("#ConfirmPassword").type("bala@123")
        cy.get("#register-button").click()
        //cy.get('.result').should("have.text","Your registration completed")
        //cy.get('.page-body > .buttons > .button-1').click()
    })
    it("add a product to the cart",()=>
    {
        cy.visit("https://demowebshop.tricentis.com/")
        cy.get('.top-menu > :nth-child(1) > a').click()
        cy.url().should("eq","https://demowebshop.tricentis.com/books")
        cy.get("img[title='Show details for Computing and Internet']").should("be.visible")
        cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > input:nth-child(1)")
        .click()
        cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)")
        .should("have.text","Computing and Internet")
        cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > span:nth-child(2)")
        .should("have.text","10.00")
        cy.get('.list > :nth-child(6) > a').click()
        cy.get(':nth-child(2) > .product-item > .picture > a > img').should("be.visible")
        cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get(':nth-child(2) > .product-item > .details > .product-title > a').should("have.text","Black & White Diamond Heart")
        cy.get(':nth-child(2) > .product-item > .details > .add-info > .prices > .price').should("have.text","130.00")
        cy.get(':nth-child(1) > .product-item > .picture > a > img').should("be.visible")
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .button-2').click()
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .prices > .price').should("have.text","100.00")
        cy.get('.ico-cart > .cart-label').click()
        cy.url().should("eq","https://demowebshop.tricentis.com/cart")
        cy.get(':nth-child(1) > .product-picture > img').should("be.visible")
        cy.get(':nth-child(2) > .product-picture > img').should("be.visible")
        const expproductname = "Computing and Internet"
        cy.get(':nth-child(1) > .product > .product-name').then((value)=>
        {
            const actproductname = value.text()
            expect(actproductname).equal(expproductname)
        })
        const expvalue = "Black & White Diamond Heart"
        cy.get(':nth-child(2) > .product > .product-name').then((value)=>
        {
            const actproductvalue = value.text()
            expect(actproductvalue).equal(expvalue)
        })
        cy.get(':nth-child(1) > .cart-total-left > .nobr').should("be.visible").and("have.text","Sub-Total:")
        cy.get(':nth-child(1) > .cart-total-right > .nobr > .product-price').should("have.text","140.00")
        cy.get(':nth-child(2) > .cart-total-left > .nobr')
  .invoke('text')  
  .then((text) => {
    console.log('Text found:', text);  
    expect(text.trim()).to.equal('Shipping:');  
  });
  

  cy.get(':nth-child(2) > .cart-total-right > .nobr > .product-price')
  .invoke('text')  
  .then((text) => {

    const Text = text.replace(/\u00A0/g, '').trim();  
    expect(Text).to.equal('0.00');  
  });

  cy.get(':nth-child(3) > .cart-total-left > .nobr')
  .invoke('text')
  .then((text) => {
    const cleanedText = text.replace(/\u00A0/g, '').trim();
    expect(cleanedText).to.equal('Tax:');  
  });

        cy.get(':nth-child(3) > .cart-total-right > .nobr > .product-price').should("have.text","0.00")
        const expsubtotalamount = "140.00"
        cy.get('.product-price > strong').then((value)=>
        {
            const acttotalamount = value.text()
            expect(acttotalamount).equal(expsubtotalamount)
        })
        cy.get('.cart-header-row > :nth-child(1)').click()
        cy.get('#CountryId').should('be.visible').select('India');
        
        cy.get('#termsofservice').click()
        cy.get('#checkout').click()
        cy.get('#Email').type("bala02aadhi@gmail.com")
        cy.get('#Password').type("bala@123")
        cy.get('form > .buttons > .button-1').click()
        cy.location("href").should("contains","https://demowebshop.tricentis.com/cart")
        cy.get('#termsofservice').click()
        cy.get('#checkout').click()
        cy.get('#billing-buttons-container > .button-1').click()
      
        cy.get('#shipping-buttons-container > .button-1').click()
       // cy.get('#opc-shipping_method > .step-title > h2').should("be.visible").and("have.text","Shipping method")
        cy.get(':nth-child(1) > .method-name > label').should("be.visible").and("have.text","Ground (0.00)")
        cy.get(':nth-child(2) > .method-name > label').should("be.visible").and("have.text","Next Day Air (0.00)")
        cy.get(':nth-child(3) > .method-name > label').should("be.visible").and("have.text","2nd Day Air (0.00)")
        cy.get('#shipping-method-buttons-container > .button-1').click()
      //  cy.get('#opc-payment_method > .step-title > h2').should("be.visible").and("have.text","Payment method")
        cy.get('#checkout-payment-method-load > .checkout-data > .section > .method-list > :nth-child(1) > .method-name')
        .should("be.visible").and('exist')
        cy.get(':nth-child(1) > .method-name > .payment-details > label').should("have.text","Cash On Delivery (COD) (7.00)")
        cy.get('#checkout-payment-method-load > .checkout-data > .section > .method-list > :nth-child(2) > .method-name')
        .should("be.visible").and("exist")
        cy.get(':nth-child(2) > .method-name > .payment-details > label').should("have.text","Check / Money Order (5.00)")
        cy.get('#checkout-payment-method-load > .checkout-data > .section > .method-list > :nth-child(3) > .method-name')
        .should("be.visible").and("exist")
        cy.get(':nth-child(3) > .method-name > .payment-details > label').should("have.text",'Credit Card')
        cy.get(':nth-child(4) > .method-name').should("be.visible").and("exist")
        cy.get(':nth-child(4) > .method-name > .payment-details > label').should("have.text","Purchase Order")
        cy.get('#payment-method-buttons-container > .button-1').click()
       // cy.get('#opc-payment_info > .step-title > h2').should("be.visible").and("have.text","Payment information")
       cy.get('td')
       .invoke('text')
       .then((text) => {
         const cleanedText = text.replace(/\u00A0/g, '').trim(); 
         expect(cleanedText).to.equal('You will pay by COD'); 
       });
     
        cy.get('#payment-info-buttons-container > .button-1').click()
       // cy.get('#opc-confirm_order > .step-title > h2').should("be.visible").and("have.text","Confirm order")
    
        cy.get('#confirm-order-buttons-container > .button-1').click()
        cy.get('h1').should("have.text","Thank you")
        cy.get('strong').should("have.text","Your order has been successfully processed!")





    })
})