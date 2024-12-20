import amazonapplication from "../Page object/Amazon";

describe("Amazon",()=>{
    it("Amazon page",()=>{
    const page=new amazonapplication();
       page.url();
       page.login("8072250341");
       page.search("realme mobiles");
       page.updateLocation("638315");
       page.TodaysDeals();
       page.prime();
       page.AmazonPay();
       page.newrelease();
       //page.HomeKitchen();
       page.sell();
       page.customerservice();
       page.Electronics();
       page.mxplayer("new movies");
      
       
    })
})