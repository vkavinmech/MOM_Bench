class meesho{
    url(){
        cy.visit("https://www.meesho.com/");
    }
    downloadApp(){
        cy.get(".sc-eDvSVe.cvxTN").should("not.be.disabled");
    
    }
    profile(){
        cy.get('.Header__StyledProfileMenu-sc-1qdannb-2').and("not.be.disabled");
    }
    cart(){
        cy.get(".sc-pyfCe.hSGtBS.hover").click();
        
    }
    back(){
        cy.go("back");
    }
    supplier(){
    
        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > span:nth-child(1)").click();
    }
    sellonline(){
        cy.get(".nav-link-2.w-nav-link[href='https://supplier.meesho.com/sell-online?utm_source=meesho&utm_medium=website&utm_campaign=header']").click();
    }
    login(){

        cy.xpath("(//a[@id='loginbutton'])[1]").click();
        cy.go("back");
    }
    username(value){
        const name=cy.xpath("(//input[@id='mui-1'])[1]");
        name.clear();
        name.type(value);
    }
    password(value){
        const pass=cy.xpath("(//input[@id='mui-2'])[1]")
        pass.clear();
        pass.type(value)
    }
    submit(){
        cy.get("button[type='submit']").click();
    }
}
export default meesho;