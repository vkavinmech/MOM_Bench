describe("Automate QaOncloud page",()=>{
    let data;
    before(()=>{
        cy.fixture('orange').then( (userdata)=>{
            data=userdata;
        })
    })
    beforeEach('Should navigate to Qaoncloud page',() => {
        cy.visit('https://www.qaoncloud.com/');
      });
    
    it("Test the qaoncloud solutions",()=>{
        cy.get(".elementor-button-text").click();
        cy.get('#navbarDropdown2').click();
        cy.wait(1000)
        cy.get("body > nav:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").click();
        cy.url().should('eq','https://www.qaoncloud.com/cross-browser-testing-services');
    })
    
    it("Should test the qaoncloud contact us page ",()=>{
        cy.get(".elementor-button-text").click();
        cy.get("input[placeholder='Name'][title='Alphabetic characters only']").type(data.fullname)
        cy.get("input[placeholder='E-mail']").type(data.email)
        cy.get("input[placeholder='Phone']").type(data.mobile) 
        cy.get("form[name='form2'] input[placeholder='Company Name']").type(data.comName);
        cy.get("body > div:nth-child(3) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(3) > input:nth-child(11)").type(data.jobTitle);
        cy.get("textarea[placeholder='Requirements']").type(data.comments)
        cy.pause();
        cy.get("input[value='Send']").click();
    })            
    it('Should checks the header', () => {
        cy.get('.elementor-section.elementor-top-section.elementor-element.elementor-element-9814d64.elementor-section-content-middle.elementor-section-full_width.elementor-section-height-default.elementor-section-stretched.elementor-hidden-mobile.elementor-section-height-default').should('be.visible');
        cy.get("img[title='QAonCloud Logo']").should('be.visible');
        cy.get(".elementor-button-text").should('have.text','Contact Us')
    });
    
    it('Should checks the banner section', () => {
        cy.get(".elementor-button-text").click();
        cy.get("section[data-aos='fade-up']").should('be.visible');
        cy.get('.title >div').should('contain','Get in Touch ');
    });
   
    it('Should checks We Love To Help Craft Quality Software section', () => {
        cy.get("div[class='elementor-element elementor-element-9202b96 elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']")
        .should('have.text','We Love To Help Craft Quality Software');
        cy.get("section[class='elementor-section elementor-top-section elementor-element elementor-element-a93589e elementor-section-full_width elementor-section-height-min-height elementor-section-stretched elementor-section-height-default elementor-section-items-middle'] div[class='elementor-container elementor-column-gap-default']")
        .should('be.visible');
    });
    
    it('Should checks Why QAonCloud section', () => {
        cy.get("a[class='elementor-repeater-item-5245ae1 ekit_badge_left'] span[class='ekit_page_list_title_title']").click();
        cy.get("h2.heading > span").should('contain','QAonCloud');
        cy.get('.banner_section.container-fluid.gx-0.aos-init.aos-animate').should('be.visible');
    });
    
    it('Should checks How It Works section', () => {
        cy.get("body > div:nth-child(16) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)")
        .click();
        cy.get('.card-body').each(($el) => {
            const title = $el.text();
              cy.log(title); 
        });
    });
    
    it('Should checks terms and conditions', () => {
        cy.get("body > div:nth-child(16) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)")
        .click();
        cy.get("h2").each(($el) => {
            const title = $el.text();
              cy.log(title); 
        })
    });
    
    it('Should checks privacy policy section', () => {
        cy.get("body > div:nth-child(16) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)").click();
        cy.get("div[class='title'] div").contains('Privacy Policy').should('exist');
        cy.get("h2").each(($el) => {
            const title = $el.text();
              cy.log(title); 
        })
    });
    
    it('Should checks the resources section', () => {
        cy.get("[data-tippy-arrowtype='round']").should('be.visible');
        cy.url().should('eq','https://www.qaoncloud.com/')
    });
    
    it('Should checks the footer', () => {
        cy.get('.elementor-section.elementor-top-section.elementor-element.elementor-element-b046965.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default')
        .scrollIntoView({duration:2000});
        cy.get('.elementor-section.elementor-top-section.elementor-element.elementor-element-b046965.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default').should('be.visible');
        cy.get("div[class='elementor-element elementor-element-08d8eeb elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']")
        .should('have.text', '@QAonCloud 2024. All Rights Reserved');
        cy.get("h5[class='elementor-heading-title elementor-size-default']").should('have.text', 'QAonCloud is a business unit of Desicrew Solutions Pvt.Ltd');
    });
});   