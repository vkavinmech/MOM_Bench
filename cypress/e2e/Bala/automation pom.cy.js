import Automation from "../pageObject/automation.js";

describe("form login and contact",()=>
{
    it("automation form",()=>
    {
        const form = new Automation();
        form.visitUrl();
        form.setUsername(" student");
        form. setPassword("Password123")
        form. submit();
        form.checkurl();
        form.homeLink();
        form. practiceLink();
        form.coursesLink();
        form. blogLink();
        form.contactLink();
        form. checkcontactUrl();
        form.setName("bala");
        form.setLastname("aadhi");
        form.setEmail("bala02aadhi@gmail.com");
        form.setComment("no comment");
        form.submitForm();
    })
})