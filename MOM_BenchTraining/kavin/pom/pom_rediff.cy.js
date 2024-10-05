import Rediff from "../pom/rediff_pom";
let data;
describe('perform Page object model', () => {
before(()=>{
    cy.fixture('rediff').then( (userdata)=>{
        data=userdata;
    })
})
it('Should automate using pom', () => {
    cy.visit('http://register.rediff.com/register/register.php?FormName=user_details');
    const demo= new Rediff();
    demo.setUsername(data.username);
    demo.setEmail(data.email)
    demo.checkAvailability();
    demo.verifyCheckAvailability(data.expcheckAvail);
    demo.setPassword(data.password);
    demo.setConfirmPassword(data.cnfmpassword);
    demo.checkAlternateEmail();
    demo.selectSecQue(data.secQue);
    demo.setSecQueAns(data.secQueAns);
    demo.setMotherName(data.motherName);
    demo.setMobile(data.mobile);
    demo.selectDate(data.day);
    demo.selectMonth(data.month);
    demo.selectYear(data.year);
    demo.selectGenderBtn();
    demo.selectCountry(data.country);
    demo.selectCity(data.city);
    cy.pause();
    demo.clkregister();
    demo.verifyOtp(data.verifyOtp)
  });
}); 