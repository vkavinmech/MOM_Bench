import meesho from "../Page object/Meesho"
import instagram from "../Page object/Insta"
import foodorder from "../Page object/Swiggy"

import ticket from "../Page object/TNSTC"

describe("meesho app",()=>{
    it.skip("meesho app",()=>{
        const app=new meesho();
        app.url();
        app.downloadApp();
        app.profile();
        app.cart();
        app.back();
        app.login();
        app.username();
        app.password();
        app.submit();
    })
    it.skip("insta",()=>{
        const insta=new instagram();
        insta.url();
        insta.signup();
        insta.mobno("8072250341");
        insta.pass("mohanraj7471");
        insta.fullname("mohan");
        insta.username("mohan7471");
    })
    it.skip("order food",()=>{
        const food=new foodorder();
        food.url();
        food.location("erode");
        food.restuarant("adayar anandha bhavan");
        food.selectrestaurant();
        food.serachdish("veg fried ");
        food.viewcart();
        food.login("8072250341");

        
    })
    it("ticket booking",()=>{
        const tkt=new ticket();
        tkt.url();
        tkt.From("SALEM");
        tkt.to("CHENNAI");
        tkt.onward();
        tkt.return();
        tkt.submit();
       

    })
})