import bookTicket from "../pageObject/bookTicket.js";

describe("book a ticket",()=>
{
    it("searching a bus",()=>
    {
        const ticket = new bookTicket();
        ticket.visitUrl();
        ticket.formLocation("chennai");
        ticket.toLocation("delhi");
        ticket. onwardsDate();
        ticket. retrunDate();
        ticket.searchbus();
    })
})