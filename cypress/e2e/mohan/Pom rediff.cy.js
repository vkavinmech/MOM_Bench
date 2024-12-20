
import Registerpage from "../Page object/rediff.js";

describe("rediff page",()=>{
    it("filling the form",()=>{
  const form=new Registerpage();
        form.url();
        form.fullname("Mohan raj");
        form.mailid("skmohan7471");
        form.password("Raja@7471");
        form.confirmpassword("Raja@7471");
        form.email("skmohanraj7471@gmail.com");
        form.mobno("8072250341");
        cy.wait(3000);
        form.day("05");
        form.month("MAR");
        form.year("2000");
        form.male();
        form.country("India");
        form.city("Chennai");
        cy.pause();
        form.submit();
})
})