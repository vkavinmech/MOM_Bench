describe('Each concept', () => {
it('Should Verify the Dropdown dynamic', () => {
    cy.visit("https://www.google.com/");
    cy.get('#APjFqb').type('cypress automation')
    cy.wait(3000)
    cy.get('div.wM6W7d>span').should('have.length',13)

    cy.get('div.wM6W7d>span').each(($el,index,$list) =>{
        if($el.text()=='cypress automation'){
            cy.wrap($el).click()
        }
        cy.get('#APjFqb').should('have.value','cypress automation')
    })
});
it('Should handle with Approach 1', () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

   const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.type("welcome {ctrl+a}");
    cy.get("[aria-label='Bold']").click();
})
it('should print all listed products', () => {
    cy.visit('https://courses.ultimateqa.com/');
    cy.get("a[href='/users/sign_in']").click();
    cy.get("input[type='email']").type('kavinkumarv1996@gmail.com');
    cy.get("input[type='password']").type('Abcd@9894');
    cy.get("button[type='submit']").click();
    cy.url().should('include', '/enrollments');
    cy.get("div[class='form__group'] a").click();
     cy.get('.products__list-item') 
       .each(($course) => {
         const courseTitle = $course.find('.products__list-item').text();
         const courseDescription = $course.find('.card__name').text(); 
         cy.log(`Course Title: ${courseTitle}`);
         cy.log(`Course Description: ${courseDescription}`);
       });
   });
});
