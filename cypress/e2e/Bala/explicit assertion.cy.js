describe("expilicit assertion",()=>
{
    it("handling explicit assertion",()=>
    {
        //launching the url
        cy.visit("https://www.desicrew.in/")

        //validating the text 
        let expname="Managed IT"

        cy.get("#accountDropdown").then((x)=>
        {
            let actname=x.text()
            expect(actname).to.eq(expname)
        })

        //clicking the managed it dropdown
        cy.get("#accountDropdown").click()

        //validating database and application management option is there 
        let expoption="Database and Application Management"

        cy.xpath(" //a[normalize-space()='Database and Application Management']").then((y)=>
        {
            let actoption=y.text()
            expect(actoption).to.eq(expoption)
        })

        //clicking the database and application management option
        cy.xpath(" //a[normalize-space()='Database and Application Management']").click()

        //after clicking redirected to the database and application management page checking the url
        cy.url().should('eq',"https://www.desicrew.in/managed-aiops-it-service/database-and-application-management.html")

        //clciking thr managed it dropdown
        cy.get("#accountDropdown").click()

        //verifying the correct option text is present in the managed it dropdown
        let exptopt="Managed Cloud Infrastructure"

        cy.xpath("//a[normalize-space()='Managed Cloud Infrastructure']").then((c)=>
        {
            let actopt=c.text()
            expect(actopt).to.eq( exptopt)
        })

        //click the managed cloud infrastructue option
        cy.xpath("//a[normalize-space()='Managed Cloud Infrastructure']").click()

        //after clicking the managed cloud infrastructure it will redirected to that page (check the url)
        cy.url().should('eq',"https://www.desicrew.in/managed-aiops-it-service/managed-cloud-infrastructure.html")
    })
})