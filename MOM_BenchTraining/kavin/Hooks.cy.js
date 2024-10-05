describe('Should perform hooks', () => {
    
    beforeEach('navigate to the respective url',()=>{
        cy.visit('https://medium.com/')
        })

        it('Should verify title', () => {
          cy.title().should('eq','Medium: Read and write stories.');
        });

        it('Should verify text', () => {
         cy.get('.cq.b.ei.ej.ek.el.em.eo.ep.eq.er.dc.dd.es.et.eu.dh.ev.di.u.dj.dk.dl.dm').should('have.text','Start reading');
       
      });
      it('Should verify text', () => {
       cy.get('.dz').should('have.text',"Human stories & ideas");
     });
  });