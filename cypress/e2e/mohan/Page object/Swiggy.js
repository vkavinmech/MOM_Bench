class foodorder{
    url(){
        cy.visit("https://www.swiggy.com/");
    }
    location(value){
        cy.xpath("//input[@id='location']").type(value);
        cy.get("div[class='_2NKIb'] div:nth-child(2) div:nth-child(2) span:nth-child(1)").click();
        
    }
    restuarant(value){
        cy.get(".sc-aXZVg.cafrzp").click();
        cy.get('.ssM7E').type(value).type("{enter}");
    }
    selectrestaurant(){
        cy.get("div:nth-child(3) div:nth-child(1) div:nth-child(1) a:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1)").click();
    }
    serachdish(value){
        cy.get(".sc-kgOKUu.jsFFDa").click();
        cy.get("input[placeholder='Search in A2B - Adyar Ananda Bhavan']").type(value);
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2) > div:nth-child(1)").click();
    }
    viewcart(){
        cy.get("span[class='styles_viewCart__32FxP'] span").click();
    }
    login(value){
        cy.get('.WO7LQ > ._2UOuf').click();
        cy.get('#mobile').type(value);
        cy.get('.ApfF7').click();
        cy.pause();
        cy.get('.ApfF7').click();
        cy.get(':nth-child(1) > :nth-child(1) > ._1NUfE > ._28hKu').should("have.text","Logged in");

    
    }
}
export default foodorder;