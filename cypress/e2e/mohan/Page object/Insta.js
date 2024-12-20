class instagram{
    url(){
        cy.visit("https://www.instagram.com/accounts/emailsignup/");
        cy.get('.x1lliihq > .x1i10hfl').click();
        cy.wait(3000);

    }
    signup(){
        cy.get('._ap3a').click();
        cy.wait(3000);
    }
    mobno(value){
        cy.get("input[name='emailOrPhone']").type(value);
    }
    pass(value){
        cy.get("input[name='password']").type(value);
    }
    fullname(value){
        cy.get("input[name='fullName']").type(value);

    }
username(value){
    cy.get("input[name='username']").type(value);

}
}
export default instagram;
