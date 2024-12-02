describe("Automate Desicrew HRMS", () =>{
    beforeEach( () =>{

        cy.on('uncaught:exception', (err) => {
            // Ignore the specific 'parent.$ is not a function' error
            if (err.message.includes("parent.$ is not a function")) {
                return false; // Prevents Cypress from failing the test
            }
            // Let other errors fail the test
            return true;
        })

        cy.fixture("hrmslogin").then(function(data){
                    this.data=data[0]; 
                    cy.visit(this.data.url);  
                    cy.get('#frmLogin > fieldset > :nth-child(2) > .block > #Username').should('be.visible').type(this.data.username)
                    cy.get('#Password').type(this.data.password)
                    cy.get('#btnLogin').click()
                })

    })

    it('should verify home page', () => {
        cy.url().should('include', '/Home/Index'); 
        cy.get("span[class='user-info initPageDone'] small").should('contain','Welcome');
    });

    it("Verify Home icon", () =>{

        cy.get(".active > a > .menu-icon").trigger("mouseover")
        cy.get(".active > a > .menu-text").click()
        cy.url().should('include', '/Home/Index'); 
        cy.get("span[class='user-info initPageDone'] small").should('contain','Welcome');
    })

    it("Should verify calendar icon", () =>{

        cy.get('[data-menuid="da13b99a-2ec2-4a57-96a1-0ceca15613ac"] > a > .menu-icon').trigger("mouseover")
        cy.get(".hover-show > a > .menu-text").click()
        cy.url().should('include', '/Home/Calendar'); 
    })

    it("Should verify calendar icon", () =>{

        cy.get('[data-menuid="0e00871c-84f2-4c00-998b-9d0e5917676b"] > .dropdown-toggle > .menu-icon').trigger("mouseover")
        cy.get(".hover-show > .submenu > .open > a > .menu-text").click({ multiple: true })
        cy.url().should('include', 'Modules/CoreHR/AssociateMaster'); 
        cy.get('.widget-title').should("have.text", "\nMy Profile                    ")

        // verify tabs present in the page

        //Company Details
        cy.get('.tabbable > :nth-child(1) > .active > a').click()
        cy.get('#AssociateName').should("have.text", " Vidyashree Devadiga ")


        //Statutory Details
        cy.get(".tabbable > :nth-child(1) > :nth-child(2) > a").click()
        cy.get('#tabstatutorydetail > .row > :nth-child(1) > .profile-user-info > :nth-child(1) > .profile-info-name > label').should("have.text", "PF Number")

        //Bank Details

        cy.get(".tabbable > :nth-child(1) > :nth-child(3) > a").click()
        cy.get('.col-sm-offset-3 > .profile-user-info > :nth-child(1) > .profile-info-name > label').should("have.text", "Bank Name")

        //Salary Details

        cy.get(".tabbable > :nth-child(1) > :nth-child(4) > a").click()
        cy.get('.salaryComponents > .nav > .active > a').should("have.text", '\n                    Earnings\n                ')

        //Documents Upload

        cy.get(":nth-child(1) > :nth-child(7) > a").click()

    })

   
    it("Should verify Tasks icon", () =>{

        cy.get('[data-menuid="9189935f-9e4f-46ac-8269-fe3a1a2e1be0"] > .dropdown-toggle > .menu-icon').trigger("mouseover")
        cy.get('.hover-show > .submenu > .open > a > .menu-text').click()

        cy.url().should('include', 'Modules/TaskManager/Home/Index'); 
        cy.get('.widget-title').should("have.text", "TaskTask")
    })

    it("Should verify ResignationEntry icon", () =>{

        cy.get('[data-menuid="2b9cdecf-f018-4c14-9b37-358f1ff59b00"] > .dropdown-toggle > .menu-icon').trigger("mouseover")
        cy.get('.hover-show > .submenu > .open > a > .menu-text').click()

        cy.url().should('include', 'Modules/ExitManagement/ResignationEntry/ResignationEntry'); 
        cy.get('.widget-title').should("have.text", "Resignation Entry")
    })

    it("Should verify Grievance Entry icon", () =>{

        cy.get('[data-menuid="c4511443-ad55-4e84-bdec-eaa4d6e8e4a5"] > .dropdown-toggle > .menu-icon').trigger("mouseover")
        cy.get('.hover-show > .submenu > .open > a > .menu-text').click()

        cy.url().should('include', 'Modules/Grievance/GrievanceEntry'); 
        cy.get('#idmainwidget > .widget-header > .widget-title').should("have.text", "Grievance Entry")
    })

    it("Should verify Tickets icon", () =>{

        cy.get('[data-menuid="4b1925f9-759b-436e-9c6c-b632121f004b"] > .dropdown-toggle > .menu-icon').trigger("mouseover")
        cy.get('.hover-show > .submenu > .open > a > .menu-text').click()

        cy.url().should('include', 'Modules/HelpDesk/RaiseTicket'); 
        cy.get('#idmainwidget > .widget-header > .widget-title').should("have.text", "Raise Ticket")
    })

    it("Should verify Attendance icon", () =>{

        cy.get('[data-menuid="ff1c1a44-2cf6-4335-9c76-4c9fea003a8e"] > .dropdown-toggle > .menu-icon').trigger("mouseover")
        cy.get('.hover-show > .submenu > [data-menuid="fa30f856-ecda-4d8b-87d0-eb18de8dbaa5"] > a').click()

        cy.url().should('include', 'Modules/TimeAttendance/EmployeeEvent/Entry'); 
    
    })

    it("Should verify collapase button", () => {

        cy.get("#sidebar-toggle-icon").click()

        cy.get("#sidebar-toggle-icon").click()
    })

    after( ()=>{
        cy.get(".dropdown-toggle > .ace-icon").click()
        cy.get(".user-menu > :nth-child(7) > a").click()
    })
})