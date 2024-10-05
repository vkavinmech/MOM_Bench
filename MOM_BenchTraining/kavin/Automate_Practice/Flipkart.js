describe('Flipkart Automation for Redmi 12 5G', () => {
    let data; 
    before(()=>{
        cy.fixture('flipkart').then( (userdata)=>{
            data=userdata; 
        })
})
    beforeEach('should navigate to url', () => {
        cy.visit('https://www.flipkart.com');
        });
    it('should perform signup', () => {
        cy.get('._1TOQfO > span').click();
        cy.get('.azBkHf').click(); 
        cy.get('.r4vIwl').type(data.mobile);
        cy.get('._7Pd1Fp').click();
        cy.get('.eIDgeN').contains('You are already registered. Please log in.').click();
    });
    it.only('should perform login, search, add to cart, and verify price calculations', () => {
        cy.get("a[title='Login'] span").click(); 
        cy.get("input[class='r4vIwl BV+Dqf']").type(data.mobile); 
        cy.get('.QqFHMw.twnTnD._7Pd1Fp').click(); 
        cy.pause();
        cy.get("button[class='QqFHMw llMuju M5XAsp']").click();
        cy.get("a[title='Account'] span").contains("kavin").click(); 

        // search product
        cy.get("input[placeholder='Search for Products, Brands and More']").type(data.productName).type('{enter}');

        //Handling the tab
        cy.get(".CGtC98").first()
        .invoke('removeAttr','target').click()
        cy.wait(2000)
        // verify product and price
        cy.get('.VU-ZEz').contains("Infinix Note 40 Pro 5G");
        cy.get('.Nx9bqj.CxhGGd').contains("₹17,999");

        // add to cart
        cy.get("button[class='QqFHMw vslbG+ In9uk2']").should('be.visible')
        cy.get("button[class='QqFHMw vslbG+ In9uk2']").click();
        cy.wait(4000);
        // verify product and price
         cy.get("div[class='x9LoV+'] span[class='LAlF6k re6bBo']").contains("₹17,999");
         cy.get(".T2CNXf.QqLTQ-").contains("Infinix Note 40 Pro 5G");

         //place order
         cy.get("button[class='QqFHMw zA2EfJ _7Pd1Fp'] span").click();
         // add item 
         cy.get("div[class='eGXlor'] button:nth-child(1)").click();
         // total payment
         cy.get(".LAlF6k.re6bBo").contains("35,998");
         // subract item
         cy.get("div[class='eGXlor'] button:nth-child(1)").click();
         cy.get("div[class='x9LoV+'] span[class='LAlF6k re6bBo']").contains("17,999");
        // continue to payment
         cy.get(".QqFHMw.VuSC8m._7Pd1Fp").click();
         cy.get(".QqFHMw._0ofT-K.M5XAsp").click()
         cy.get(".R8pZXi").should('have.text','Complete payment in');
    });
});
