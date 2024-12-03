const { defineConfig } = require("cypress");
const pg= require("pg");
const { Client } = require('pg');

module.exports = defineConfig({
  
  reporter: 'cypress-mochawesome-reporter' ,
  e2e: { 
       
     video: true,
     videoCompression: 32,
     screenshotOnRunFailure: false,
     screenshotsFolder: "cypress/screenshots",

    /*env: {
      RETOOL_URL: "https://maniqa.retool.com/apps/a97250a4-5878-11ef-a6d7-53b353796ab1/Response%20Data%20for%20CustomerDetails%20",
      EMAIL: "divyar@qaoncloud.com",
      PASSWORD: "Dheera@0608",
      SUCCESS_URL: "https://maniqa.retool.com/apps/a97250a4-5878-11ef-a6d7-53b353796ab1/Response%20Data%20for%20CustomerDetails%20"
    }, */
    setupNodeEvents(on, config) {
      const xlsx = require("xlsx");
      require('cypress-mochawesome-reporter/plugin')(on); 
      
      function generateJSONFromExcel(agrs) {
        const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
        const ws = wb.Sheets[agrs.sheetName];
        return xlsx.utils.sheet_to_json(ws, { raw: false });
      }
      on("task", {
        generateJSONFromExcel: generateJSONFromExcel,
        async queryDatabase(query) {
          const client = new Client({
            user: "postgres",
            host: "localhost",
            database: "postgres",
            password: "root",
            port: "5432"
          });
          await client.connect();
          try {
            const res = await client.query(query);
            return res.rows; 
          } catch (err) {
            console.error(err);
            throw err; 
          } finally {
            await client.end();
          }
        },
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