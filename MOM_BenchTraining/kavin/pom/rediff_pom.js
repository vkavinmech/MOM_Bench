class Rediff{

    txtUsername="[width='200'] > input";
    txtEmail="[valign='bottom'] > [type='text']";
    BtnCheckAvail=".btn_checkavail";
    verifyExpcheckAvail="div[id='check_availability'] b:nth-child(1)";
    txtPassword="#newpasswd";
    txtCnfmpassword="#newpasswd1";
    checkAltEmailBtn=".nomargin";
    selectSecQue=":nth-child(2) > [colspan='3'] > select";
    txtSecqueAns="#div_hintQS > .f14 > tbody > :nth-child(4) > [width='185'] > input";
    txtMotherName=":nth-child(6) > :nth-child(3) > input";
    txtMobile="#mobno";
    selectDay="select[name='DOB_Day']";
    selectMonth="select[name='DOB_Month']";
    selectYear="select[name='DOB_Year']";
    radioBtnMale="[value='m']";
    selectCountry="#country";
    selectCity=":nth-child(1) > [colspan='3'] > select";
    btnRegister="#Register";
    verifyOtp="#tblcrtac > :nth-child(1) > :nth-child(1) > .f22";

    setUsername(username) {
        cy.get(this.txtUsername).type(username);
    }
    
    setEmail(email) {
        cy.get(this.txtEmail).type(email);
    }
    
    checkAvailability() {
        cy.get(this.BtnCheckAvail).click();
    }
    
    verifyCheckAvailability() {
        cy.get(this.verifyExpcheckAvail).should('be.visible');
    }
    
    setPassword(password) {
        cy.get(this.txtPassword).type(password);
    }
    
    setConfirmPassword(password) {
        cy.get(this.txtCnfmpassword).type(password);
    }
    
    checkAlternateEmail() {
        cy.get(this.checkAltEmailBtn).click();
    }
    
    selectSecQue(questionIndex) {
        cy.get(this.selectSecQue).select(questionIndex);
    }
    
    setSecQueAns(answer) {
        cy.get(this.txtSecqueAns).type(answer);
    }
    
    setMotherName(motherName) {
        cy.get(this.txtMotherName).type(motherName);
    }
    
    setMobileNumber(mobileNumber) {
        cy.get(this.txtMobile).type(mobileNumber);
    }
    
    selectDate(day) {
        cy.get(this.selectDay).select(day);
    }
    selectMonth(month) {
        cy.get(this.selectMonth).select(month);
    }
    selectYear(year) {
        cy.get(this.selectYear).select(year);
    }
    
    selectGenderBtn() {
        cy.get(this.radioBtnMale).check();
    }
    
    selectCountry(country) {
        cy.get(this.selectCountry).select(country);
    }
    
    selectCity(city) {
        cy.get(this.selectCity).select(city);
    }
    
    clkregister() {
        cy.get(this.btnRegister).click();
    }
    
    verifyOtp() {
        cy.get(this.verifyOtp).should('be.visible');
    }
   
}
export default Rediff;