describe("Instagram",()=>{
    let data;
    before("url",function(){
        cy.visit("https://www.instagram.com");
        cy.fixture("instagram").then((insta)=>{
        data=insta;
        })

        
    })
    it("Execute the block",()=>{
        data.forEach((value)=>{
        cy.get('.x1lliihq > .x1i10hfl').click();
        cy.get(':nth-child(1) > .xnz67gz > ._aa48 > ._aa4b').type(value.email);
        cy.wait(3000);
        cy.get("input[name='password']").type(value.pass);
        cy.xpath("(//div[@class='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1xmf6yo x1e56ztr x540dpk x1m39q7l x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1'])[1]").click();
       cy.wait(5000);
      if(value.email=="skmohanraj7471@gmail.com"&&value.pass=="mohanraj7471"){
       cy.get('[aria-describedby=":rd:"] > .x1n2onr6.x6s0dn4 > .x1i10hfl > .x3nfvp2').click();
       cy.get(':nth-child(11) > .x1pi30zi > .x1qjc9v5 > .xozqiw3 > .xs83m0k > .x1ja2u2z > .x9f619 > .x1plvlek > .x1lliihq').click();
    }
    else{
        cy.xpath("(//div[@class='_ab2z'])[1]").should("be.visible").and("have.text","Sorry, your password was incorrect. Please double-check your password.");
    }
    })
})
})
