const { defineConfig } = require("cypress");
const addPlugin = require('cypress-downloadfile/lib/addPlugin');
const { Client } = require('pg');

const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const xlsx = require('xlsx');
const mysql = require('mysql2/promise');
const sqlite3 = require('sqlite3').verbose();

module.exports = defineConfig({
      e2e: { 

        reporter: 'cypress-mochawesome-reporter',
  projectId: "jqjvdf",
  videosFolder: 'C:\\cypress\\cypress\\support\\Videos',
  video: true,
        setupNodeEvents(on, config) {

          require('cypress-mochawesome-reporter/plugin')(on);

          
          const xlsx = require("xlsx");
          
          function generateJSONFromExcel(agrs) {
            const wb = xlsx.readFile(agrs.excelFilePath, { dateNF: "mm/dd/yyyy" });
            const ws = wb.Sheets[agrs.sheetName];
            return xlsx.utils.sheet_to_json(ws, { raw: false });
          }
          on("task", {
            parseXlsx({filePath}){
              return new Promise((resolve,reject)=>{
                try{
                  const jsonData =xlsx.parse(fs.readFileSync(filePath))
                  resolve(jsonData);
                }catch(e){
                  reject(e)
                }
              })
            },

            async queryDb(query) {
              const db = new sqlite3.Database('./mydb.sqlite');
              return new Promise((resolve, reject) => {
                db.all(query, [], (err, rows) => {
                  if (err) {
                    console.error(err);
                    db.close();
                    return reject(err);
                  }
                  db.close();
                  return resolve(rows);
                });
              });
            },

            readExcel(filePath) {
              const workbook = xlsx.readFile(filePath);
              const sheetName = workbook.SheetNames[0];
              const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
              return data;
            },
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
            generateJSONFromExcel: generateJSONFromExcel,
          })
          return config;
        },
        "baseUrl": "https://reqres.in/api/", 
      "env": {
        "search":"QA"
      }
    },
  chromeWebSecurity: false, 
});

