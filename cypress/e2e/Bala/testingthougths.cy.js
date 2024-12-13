import Testingthoughts from "../pageObject/testing.js"

describe("reg form",()=>{
    const form = new Testingthoughts();
    it("reg form",()=>{
        form.url();
        form.firstname("bala");
        form.lastname("aadhi");
        form.female();
        form.department("MPDC");
        form.username("bala789");
        form.password("bala02aadhi@18");
        form.confirmPassword("bala02aadhi@18");
        form.email("bala02aadhi@gmail.com");
        form.contactno("9150794431");
        form.Additionalinfo("QA");
        form.submit();

    })
})