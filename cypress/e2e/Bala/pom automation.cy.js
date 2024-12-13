import FormName from "../pageObject/automationform.js"

describe("POM",()=>
{
    const form = new FormName();
    it("Automation form",()=>
    {
        cy.fixture("testblog.json").then((data)=>
        {
            form.visit();
            form.setFirstname(data.Name)
            form.setEmail(data.Email)
            form.setPhone(data.Phone)
            form.setAdress(data.Adress)
            form.genderMale()
            form. genderFemale()
            form.checkbox()
            form.uncheckcheckbox()
            form.selectCountry()
            form.selectColours()
            form.selectSortedList()
        })
    })
})