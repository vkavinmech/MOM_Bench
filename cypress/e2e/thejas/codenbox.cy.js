describe("MyTest suite ",()=>{

    it(" Automate the codenbox site ",()=>{
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.title().should('include','Automation Practice - CodenBox AutomationLab')
        cy.get(".site-description").should("be.visible")
        cy.get("li[id='menu-item-63'] a[class='sf-with-ul']").trigger("mouseover")
        cy.get("li[id='menu-item-68'] a").should('contain','DataBase Testing')
    
    })
    
    it.only("Practice",()=>{
        cy.visit("https://codenboxautomationlab.com/practice/");
        cy.get("[type='radio']").check('radio1')
        
        cy.get(".inputs.ui-autocomplete-input").clear().type('ind')
        cy.get("#ui-id-1 li").each(($el,index,$list)=>{
            cy.log($el.text())
            if($el.text() === 'India'){
               cy.wrap($el).click()
            }
        })
        cy.get("#dropdown-class-example").select(2)
        cy.get("[type='checkbox']").check('option1')
        cy.window().then((win) => {
            cy.stub(win, 'open').as('newWindow');
          });
    
          cy.get('#openwindow').click();
          cy.get('@newWindow').should('be.called').then((call) => {
          console.log(call.args[0]); // Check the value
          const newUrl = call.args[0].toString().split(',')[0]; // Convert to string if necessary
           cy.log(`Navigating to: ${newUrl}`);
           cy.visit(newUrl.trim());
           
           cy.origin('https://codenbox.com', () => {
            cy.get("#slider-4-slide-7-layer-1").should('contain','Contact Us')
            cy.go('back')
            })
           })
    
           cy.get("#name").type("Thejas")
           cy.get("#alertbtn").click()
           cy.on('window:alert',(t)=>{
            expect(t).to.contains('Hello Thejas');
          })
          cy.get("#name").type("Thejas")
          cy.get("#confirmbtn").click()
          cy.on('window:confirm',(t)=>{
            expect(t).to.contains('Hello Thejas, Are you sure you want to confirm?');
          })
    
    })
    
    
    
    
    
    
    
    
    })