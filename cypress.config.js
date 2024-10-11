const { defineConfig } = require("cypress");
const pg= require("pg")

module.exports = defineConfig({
  e2e: { 
       
     video: true,
     videoCompression: 32,
     videoUploadOnPasses: false,
     screenshotOnRunFailure: false,
     screenshotsFolder: "cypress/screenshots",
     
    setupNodeEvents(on, config) {
      const xlsx = require("xlsx"); 
      
      function generateJSONFromExcel(agrs) {
        const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
        const ws = wb.Sheets[agrs.sheetName];
        return xlsx.utils.sheet_to_json(ws, { raw: false });
      }
      on("task", {
        generateJSONFromExcel: generateJSONFromExcel,
        READFROMDB({dbConfig, sql})
        {
          const client=new pg.Pool(dbConfig);
          return client.query(sql);
        },
        INSERTINTODB({ dbConfig, sql }) {
          const client = new pg.Pool(dbConfig);
          return client.query(sql)
            .then(res => {
              client.end();
              return res;
            })
            .catch(err => {
              client.end();
              throw err; 
            });
        },
        UPDATEINDB({ dbConfig, sql }) {
          const client = new pg.Pool(dbConfig);
          return client.query(sql)
            .then(res => {
              client.end();
              return res;
            })
            .catch(err => {
              client.end();
              throw err; 
            });
        },
        DELETEFROMDB({ dbConfig, sql }) {
          const client = new pg.Pool(dbConfig);
          return client.query(sql)
            .then(res => {
              client.end();
              return res;
            })
            .catch(err => {
              client.end();
              throw err; 
            });
        },
      })
      return config;
    },

       // for specified chrome profile launch
      /* e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
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
      });
    },
  },  */
      DB: {
        user: "postgres",
        host: "localhost",
        database: "postgres",
        password: "root",
        port: "5432"
      },
    },
    chromeWebSecurity: false, // Disable Chrome's web security  
  });

