import TestThought from "../pom/testingThoughts_pom";
let data;
describe('perform Page object model', () => {
before(()=>{
    cy.fixture('testThought').then( (userdata)=>{
        data=userdata;
    })
})
it('Should automate using pom', () => {
    cy.visit('http://mytestingthoughts.com/Sample/home.html');
    const demo= new TestThought();
    demo.setFrstname(data.firstname);
    demo.setLastname(data.lastname)
    demo.selectGender();
    demo.selectHobby();
    demo.selectDepartment(data.depart);
    demo.setUsername(data.userName);
    demo.verifyUsername();
    demo.setPassword(data.password);
    demo.setConfirmPassword(data.cnfmpassword);
    demo.setEmail(data.email);
    demo.setMobile(data.mobile);
    demo.setAddInfo(data.addInfo);
    demo.submitForm();
    demo.verifySuccessMsg(data.expMsgSucc);
  });
}); 