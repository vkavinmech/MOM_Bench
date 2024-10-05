class TestThought{

    txtFrstname="input[placeholder='First Name']";
    txtLastname="input[placeholder='Last Name']";
    BtnGender="#inlineRadioMale";
    selectHobbies="#exampleFormControlSelect2 > :nth-child(5)";
    selectDepart="select[name='department']";
    txtUsername="input[placeholder='Username']";
    VerifyUsername="i[data-bv-icon-for='user_name']";
    txtpassword="input[placeholder='Password']";
    txtCnfmpassword="input[placeholder='Confirm Password']";
    txtEmail="input[placeholder='E-Mail Address']";
    txtMobile="input[placeholder='(639)']";
    txtAddInfo="#exampleFormControlTextarea1";
    btnSubmit="button[type='submit']";
    msgSuccess="#success_message";

    setFrstname(firstname) {
        cy.get(this.txtFrstname).type(firstname);
    }
    setLastname(lastname) {
        cy.get(this.txtLastname).type(lastname);
    }
    selectGender() {
        cy.get(this.BtnGender).check();
    }
    selectHobby() {
        cy.get(this.selectHobbies).type('{enter}');
    }
    selectDepartment(department) {
        cy.get(this.selectDepart).select(department);
    }
    setUsername(username) {
        cy.get(this.txtUsername).type(username);
    }
    verifyUsername() {
        cy.get(this.VerifyUsername).should('be.visible'); 
    }
    setPassword(password) {
        cy.get(this.txtpassword).type(password);
    }
    setConfirmPassword(confirmPassword) {
        cy.get(this.txtCnfmpassword).type(confirmPassword);
    }
    setEmail(email) {
        cy.get(this.txtEmail).type(email);
    }
    setMobile(mobile) {
        cy.get(this.txtMobile).type(mobile);
    }
    setAddInfo(info) {
        cy.get(this.txtAddInfo).type(info);
    }
    submitForm() {
        cy.get(this.btnSubmit).click();
    }
    verifySuccessMsg(expMsg) {
        cy.get(this.msgSuccess).should('contain', expMsg)
    }
}
export default TestThought;