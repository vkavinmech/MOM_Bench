import Register from "../pageObject/register.js"

describe("POM",()=>{
    const reg = new Register();
    it("rediff register",()=>
    {
       cy.fixture("reddifffixture.json").then((data)=>
    {
        reg.visit();
        reg. setfullName(data.name);
        reg.setRedffillId(data.id);
        reg. availability();
        reg.setPassword(data.password);
        reg.eyeToggle();
        reg.setRetypePassword(data.repassword);
        reg. eyeToggle1();
        reg.alternateEmail(data.altemail);
        reg.mobile(data.mobno);
        reg. genderMale();
        reg.genderFemale();
       cy.get("#country").select(data.country);
})
   })

    })
