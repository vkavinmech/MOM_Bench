describe('eaapp Automation', () => {
  beforeEach(() => {
    cy.visit('http://eaapp.somee.com/');
  });

  it('should log in with registered user', () => {
    cy.get('#loginLink').click(); 
    cy.get('#UserName').type('kavinkumar');
    cy.get('#Password').type('Demo@9894');
    cy.get("input[value='Log in']").click(); 
    cy.get("a[title='Manage']").should('contain', 'kavinkumar');
  });

  it('should view the employee list', () => {
    cy.get("a[href='/Employee']").click();
    cy.url().should('include', '/Employee');
   
    cy.get(".table > tbody").each( ($row, index, $rows)=>{
      cy.wrap($row).within( ()=>{
        
          cy.get("tr").each( ($col, index, $cols)=>{
              cy.log($col.text());
          })
        })
    })
    cy.get("input[placeholder='Search Name']").type('john').type('{enter}');
    cy.get(':nth-child(2) > :nth-child(5)').should('contain','john@executeautomation.com')
  });

  it('should visit the source code page', () => {
    cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > p:nth-child(3) > a:nth-child(1)").click(); 
    cy.get(".heading-element").should('contain', 'Welcome to ExecuteAutomation Repo');
    cy.get("img[style='height:auto;']").should('be.visible');
  });
});
