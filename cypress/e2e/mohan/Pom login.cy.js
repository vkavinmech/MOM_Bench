
import loginpage from "../Page object/Login.js";

describe("Page object model",()=>{
    it("For login page",()=>{
        const page=new loginpage();
        page.url();
        page.fillUsername("student");
        page.fillPassword("Password123");
        page.submit();
    })
})