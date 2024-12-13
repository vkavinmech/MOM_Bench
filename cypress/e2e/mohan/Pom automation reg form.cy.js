import AutomationForm from "../Page object/Html form"
describe("reg form",()=>{
    const field=new AutomationForm();
    it("reg form",()=>{
        field.url();
        field.firstname("mohan");
        field.lastname("raj");
        field.male();
        field.department("MCR");
        field.username("mohan7471");
        field.password("mohanraj7471");
        field.confirmPassword("mohanraj7471");
        field.email("skmohanraj7471@gmail.com");
        field.contactno("9629007471");
        field.Additionalinfo("testing");
        field.submit();

    })
})