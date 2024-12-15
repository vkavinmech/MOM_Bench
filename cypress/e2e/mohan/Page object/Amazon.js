class amazonapplication{
    url(){
        cy.visit("https://www.amazon.in/");
    }
    login(value){
        cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click();
        cy.get('#ap_email').type(value);
        cy.get('.a-button-inner > #continue').click();
        cy.get('#continue').click();
        cy.pause();
        cy.get('#cvf-submit-otp-button > .a-button-inner > .a-button-input').click();
    }
  
    search(value){
        cy.xpath("(//input[@id='twotabsearchtextbox'])[1]").type(value);
        cy.get("#nav-search-submit-button").click();
    }
    updateLocation(value){
       cy.get('#glow-ingress-line2').click();
       const loc=cy.get('#GLUXZipUpdateInput');
       loc.clear();
       loc.type(value);
        cy.get("input[aria-labelledby='GLUXZipUpdate-announce']").type("{enter}");
    }
   
    TodaysDeals(){
        cy.wait(2000);
        cy.get('[href="/deals?ref_=nav_cs_gb"]').click();
        cy.go("back");
    }
    AmazonPay(){
        cy.get('[href="/gp/sva/dashboard?ref_=nav_cs_apay"]').click();
        cy.get("div[class='a-row']").should("be.visible");
        cy.get("img[src='https://m.media-amazon.com/images/G/31/apay/dashboard/apay-sticker-desktop-t1._CB433219863_.png']").and("be.visible");
        cy.go("back");
    }
    prime(){
        cy.get("div[id='nav-main'] div[class='nav-fill'] span:nth-child(1)").click();
        cy.go("back");
        //cy.get("div[class='primeDetailPage-content-hero-right'] h1[class='a-spacing-base a-spacing-top-medium']").and("have.text","Welcome to Prime");
    }
    mxplayer(value){
        cy.get('[href="/minitv?ref_=nav_avod_desktop_topnav"]').click();
        cy.get("img[alt='minitv logo'][data-testid='appnavbar_brandlogo']").and("be.visible");
        cy.get("span[data-testid='appnavbar-menuitem-ct-tamil']").click();
        cy.get("img[alt='Click to Search']").click();
        cy.get("input[placeholder='Shows, genres, movies and more']").type(value)
    }
    newrelease(){
        cy.get(".nav-a[href='/gp/new-releases/?ref_=nav_cs_newreleases']").click();
        cy.get("#zg_banner_text").and("have.text","Amazon Hot New Releases");
        cy.go("back");
    }
    HomeKitchen(){
        cy.get("#zg_banner_text").click();
    }
    sell(){
        cy.get(".nav-a[href='/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3']").click();
        cy.go("back");
    }
    customerservice(){
        cy.get(".nav-a[href='/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help']").click();
        cy.get("div[class='a-section a-spacing-extra-large a-spacing-top-extra-large ss-landing-container'] h1").and("be.visible");
        cy.go("back");
    }
    Electronics(){
        cy.get(".nav-a[href='/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics']").click();

    }
   
}


export default amazonapplication;