import TicketBooking from "../pageObject/Ticket.js";

describe("meesho pom",()=>
{
    it("ordering a product",()=>
    {
        const meesho = new TicketBooking();
        meesho.visitUrl();
        meesho.signup();
        meesho.login();
        meesho.enterMobile("9150794431");
        meesho.clickSubmit();
        meesho.securityPin("0987654");
        meesho. bookTicket("Delhi");
        meesho.bookTicketToCity("Mumbai");
        meesho.FromDate();
        meesho.searchBus();
        
    })
  
})