describe('Dynamic URL Navigation Test', () => {
    const baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/';
  
    it('should visit the Dashboard page and validate it', () => {
      
      cy.login('Admin', 'admin123');  
  
      const validateDashboardPage = () => {
        cy.title().should('eq', 'OrangeHRM');
        cy.get('h6').contains('Dashboard').should('be.visible');  
      };
  
     
      cy.visitDynamicUrl(baseUrl, 'dashboard/index', validateDashboardPage);
    });
  
    it('should visit the Buzz page and validate it', () => {
     
      cy.login('Admin', 'admin123'); 
  
      const validateBuzzPage = () => {
        cy.title().should('eq', 'OrangeHRM');
      
        cy.xpath("//h6[normalize-space()='Buzz']").contains('Buzz').should('be.visible');  
        const commentText = 'This is new comment';
        cy.postComment(commentText); 
      };
  
      
      cy.visitDynamicUrl(baseUrl, 'buzz/viewBuzz', validateBuzzPage);
    });
    it('should visit the directory page and validate it', () => {
     
        cy.login('Admin', 'admin123'); 
    
        const validateDirectoryPage = () => {
          cy.title().should('eq', 'OrangeHRM');
        
          cy.xpath("//h6[normalize-space()='Directory']").contains('Directory').should('be.visible');  
         
        };
    
        
        cy.visitDynamicUrl(baseUrl, 'directory/viewDirectory', validateDirectoryPage);
      });
  });
  