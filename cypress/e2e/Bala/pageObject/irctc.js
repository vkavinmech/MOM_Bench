class TrainTicket{
    url(){
        cy.visit("https://www.irctc.co.in/nget/train-search");
    }
    From(city){
        cy.get(".ng-tns-c57-8.ui-inputtext.ui-widget.ui-state-default.ui-corner-all.ui-autocomplete-input.ng-star-inserted").type(city);
        cy.get('#p-highlighted-option > :nth-child(1)').click();
    }
    to(city){
        cy.get('.ui-autocomplete > .ng-tns-c57-9').type(city);
        cy.get('#pr_id_2_list > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
    }
    quota(){
        cy.get(".ui-dropdown-trigger-icon.ui-clickable.ng-tns-c65-12.pi.pi-chevron-down").click();
        cy.get("li[aria-label='LADIES']").click();
    }
    date(){
        cy.get('.ui-calendar > .ng-tns-c58-10').click();
        cy.get(':nth-child(3) > :nth-child(3) > .ui-state-default').click();
    }
    class(){
        cy.get('#journeyClass > .ui-dropdown > .ui-dropdown-trigger > .ui-dropdown-trigger-icon').click();
        cy.get(':nth-child(3) > .ui-dropdown-item > .ng-star-inserted').click();
    }
    submitform(){
        cy.xpath("(//button[normalize-space()='Search'])[1]").click();
    }
}
export default TrainTicket;