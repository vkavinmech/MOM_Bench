const { defineConfig } = require("cypress");

module.exports = defineConfig({
   
      projectId: "b3ccj3",

      e2e: { 
        setupNodeEvents(on, config) {
        
         
        },
     /* on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          // Path to your Chrome user data directory
          const userDataDir = 'C:\\Users\\Dell\\AppData\\Local\\Google\\Chrome\\User Data'; // Update this path to your actual directory
          const profileDirectory = 'Profile 9'; // Replace with your actual profile directory

          // Add Chrome launch arguments
          launchOptions.args.push(`--user-data-dir=${userDataDir}`);
          launchOptions.args.push(`--profile-directory=${profileDirectory}`);
          launchOptions.args.push('--no-sandbox');
          launchOptions.args.push('--disable-dev-shm-usage');
          
          return launchOptions;
        }
      }); */
    },
  chromeWebSecurity: false, 
});
