describe('E-commerce Site Automation', () => {

  beforeEach('navigate to ultimateqa website and login', () => {
    cy.visit('https://courses.ultimateqa.com/');
    cy.get("a[href='/users/sign_in']").click();
    cy.get("input[type='email']").type('kavinkumarv1996@gmail.com');
    cy.get("input[type='password']").type('Abcd@9894');
    cy.get("button[type='submit']").click();
    cy.url().should('include', '/enrollments');
    cy.wait(2000)
  });
  it.skip('should sign up a new user', () => {
    cy.get("a[href='/users/sign_in']").click();
    cy.get("a[href='/users/sign_up']").click(); 
    cy.get("input[id='user[first_name]']").type('kavinkumar');
    cy.get("input[id='user[last_name]']").type('v');
    cy.get("input[placeholder='Email']").type('kavinkumarv1996@gmail.com');
    cy.get("input[placeholder='New Password']").type('Abcd@9894');
    cy.get("input[id='user[terms]']").check();
    cy.get("button[type='submit']").click(); 
    cy.get(".form-error__list-item").should('contain', "The username and/or password entered are incorrect"); 
  });
  it('should print all listed products', () => {
   cy.get("div[class='form__group'] a").click();
    cy.get('.products__list-item') 
      .each(($course) => {
        const courseTitle = $course.find('.products__list-item').text();
        const courseDescription = $course.find('.card__name').text(); 
        cy.log(`Course Title: ${courseTitle}`);
        cy.log(`Course Description: ${courseDescription}`);
      });
  });
  it('should search for a product', () => {
    cy.get("div[class='form__group'] a").click();
    cy.get('input[type="search"]').type('Complete Selenium WebDriver with Java Bootcamp').type('{enter}');
    cy.get('.products__list-item').should('exist'); 
  });
  it('should complete the purchase', () => {
    cy.get("div[class='form__group'] a").click();
    cy.get(".card__img[src='https://import.cdn.thinkific.com/3880/O46iKLLREGtC5sn0itb2_Complete%20Selenium%20WebDriver%20with%20Java%20Course%20Logo.jpg']").click()
    cy.contains('Complete Selenium WebDriver with Java Bootcamp').click(); 
    cy.get('.button.button-primary.button-purchase').click(); 
    cy.wait(4000)
    cy.get("div[aria-label='Toggle Menu']").click();
    cy.get('#input-1').type('India').type('{enter}')
    cy.url().should('include', '/order'); 
  });
});
