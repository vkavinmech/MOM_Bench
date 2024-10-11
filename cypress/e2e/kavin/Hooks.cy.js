describe('Should perform hooks', () => {
  let userdata;
  before('Retrieve the data from fixtures',()=>{
    cy.fixture('hooks').then( (data)=>{
      userdata=data;   
     })
  })
  
  beforeEach('navigate to the respective url',()=>{
      cy.visit('https://medium.com/')
      })

      it('Should verify title', () => {
        cy.title().should('eq',userdata.title);
      });

      it('Should verify text', () => {
        cy.get('.cq.b.ei.ej.ek.el.em.eo.ep.eq.er.dc.dd.es.et.eu.dh.ev.di.u.dj.dk.dl.dm').should('have.text',userdata.text);
      
    });
    it('Should verify text', () => {
      cy.get('.dz').should('have.text',userdata.expText);
    });
});