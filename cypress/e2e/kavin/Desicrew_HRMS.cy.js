describe('Login Test', () => {
    
    let data; 
    before(()=>{
        cy.fixture('desicrew').then( (userdata)=>{
            data=userdata; 
        })
    })
    beforeEach('should navigate and log in with valid credentials', () => {
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex');
        cy.get('#frmLogin > fieldset > :nth-child(2) > .block > #Username').type(data.username);
        cy.get('#Password').type(data.password); 
        cy.get('#btnLogin').click();
        });
    afterEach('should perform logout', () => { 
        cy.get('.user-info.initPageDone').click();
        cy.get("a[href='/Account/Logout']").click();
        });

    it('should verify home page', () => {
        cy.url().should('include', '/Home/Index'); 
        cy.get("span[class='user-info initPageDone'] small").should('contain','Welcome');
    });

    it.skip('should navigate to calender page', () => {
        cy.get(".menu-icon.fa.fa.fa-calendar").click();
        cy.get("div[class='fc-center'] h2").should('have.text','October 2024')
        cy.url().should('include', '/Home/Calendar'); 
    });
    it('should navigate to profile page', () => {
        cy.get(".menu-icon.fa.fa-users").trigger('mouseover').click();
        cy.get("body > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > ul:nth-child(3) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)").click();
        cy.get("#AssociateName").should('have.text',' Kavinkumar V ')
        cy.get("a[data-toggle='tab'][href='#tabbankdetails']").should('contain','Bank Details')
        cy.get("div[data-field-key='Field_BankName'] div[class='field-value']").should('contain','State Bank')
        cy.url().should('include', '/Modules/CoreHR/AssociateMaster'); 
    });
    it('should navigate to modules page and validate pf details', () => {
        cy.get("#sidebar-shortcuts-mini").trigger('mouseover')
        cy.get(".ace-icon.fa.fa-arrow-down").click();
        cy.get("a[href='/Modules/EIP/Home']").trigger('mouseover')
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > ul:nth-child(3) > li:nth-child(2) > a:nth-child(1) > span:nth-child(1)").click();
        cy.get("strong:nth-child(1)").should('contain',data.uan)
        cy.url().should('include', '/Modules/EIP/Pay/PF'); 
    });
    it('should navigate to modules page and validate ticket details', () => {
        cy.get("#sidebar-shortcuts-mini").trigger('mouseover')
        cy.get(".ace-icon.fa.fa-arrow-down").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > a:nth-child(1) > span:nth-child(1)").trigger('mouseover')
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > ul:nth-child(3) > li:nth-child(1) > a:nth-child(1) > span:nth-child(1)").click();
        cy.get("td:nth-child(1)").should('contain',data.ticketno)
        cy.url().should('include', '/HelpDesk/RaiseTicket'); 
        cy.get(".label.label-sm.label.arrowed.arrowed-right").should('contain', "Closed");
     });
     it('should navigate to modules page and get holiday details', () => {
        cy.get("#sidebar-shortcuts-mini").trigger('mouseover')
        cy.get(".ace-icon.fa.fa-arrow-down").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > a:nth-child(1) > span:nth-child(1)").trigger('mouseover')
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > ul:nth-child(3) > li:nth-child(5) > a:nth-child(1) > span:nth-child(1)").click();
        cy.get("#select2-chosen-1").click();
        cy.get("#s2id_autogen1_search").type("Jan 2024 - Dec 2024").type('{enter}');
        cy.get("#HolidayTable > tbody > tr").each( ($row, index, $rows)=>{
            cy.wrap($row).within( ()=>{
                cy.get("td").each( ($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
        cy.url().should('include', '/TimeAttendance/HolidayList'); 
     });
});
