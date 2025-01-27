describe('Rediffmail Account Creation', () => {

    before(()=> {
        // Load fixture file
        cy.readFile('C:/Users/jayas/OneDrive/Desktop/MOM_Bench/rediffmailAccountDetails.json').then(function(data){
          this.data = data; 
        })
    })

    it('Fills the form using fixture data', function() {
      cy.visit('https://register.rediff.com/register/register.php?FormName=user_details'); 
      
      cy.fixture('rediffmailAccountDetails').then((data) => {
        cy.get('input[name="FullName"]').type(data.fullName);
        cy.get('input[name="RediffmailID"]').type(data.rediffmailID);
        cy.get('button#CheckAvailability').click();
        cy.get('input[name="Password"]').type(data.password);
        cy.get('input[name="RetypePassword"]').type(data.password);
        cy.get('input[name="AlternateEmail"]').type(data.alternateEmail);
        cy.get('input[name="MobileNumber"]').type(data.mobileNumber);
        cy.get('select[name="Day"]').select(data.dateOfBirth.day);
        cy.get('select[name="Month"]').select(data.dateOfBirth.month);
        cy.get('select[name="Year"]').select(data.dateOfBirth.year);
        cy.get(`input[value="${data.gender}"]`).check();
        cy.get('select[name="Country"]').select(data.country);
        cy.get('select[name="City"]').select(data.city);
        // Add CAPTCHA handling if necessary
      });
    });
})
