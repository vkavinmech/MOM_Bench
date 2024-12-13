import contactus from "../Page object/qaoncloud"
import Registerpage from "../Page object/rediff.js";
describe("qaoncloud",()=>{
    const form1=new contactus();
    let form2=new Registerpage();
   
   // beforeEach("url",()=>{
     //   form1.url();
    //})
    it("contact us",()=>{
        form1.url();
        form1.name("Mohan");
        form1.email("skmohan@gmail.com");
        form1.phone("80722250341");
        form1.companyname("desicrew")
        form1.role("intern");
        form1.requirements("need login page");
        })
    it("dropdown",()=>{
        form1.url();
        form1.services();
        form1.solutions();
        form1.industries();
        form1.insights();

    })
    it("using different website locator in qaoncloud scripts",()=>{
        form2.url();
        form2.fullname("vijay");
        form2.password("mohan");
        form2.mobno("8975646565");
        form2.male();
    })
})