import desicrew from "../Page object/Desicrew"
import contactus from "../Page object/qaoncloud"

describe("desicrew website",()=>{
    const data=new desicrew();
    const file=new contactus();
    it("contact us page",()=>{
         data.urlcontactus();
        //data.firstname("mohan");
        data.email("mohan@gmail.com");
        data.phonenumber("8976543290");
        data.message("login page");

    })
    it("homepage dropdown",()=>{
        data.url();
        data.Managed();
        data.ManagedSecurity();
        data.Resources();
        data.OtherServices();
    })
    it("visiting qaoncloud contactus page",()=>{
        file.url();
        file.name("mohan");
        file.phone("897654232");
      
    })
})