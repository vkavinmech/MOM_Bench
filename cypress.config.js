const { defineConfig } = require("cypress");
const { Client } = require('pg');

module.exports = defineConfig({
      e2e: { 
        setupNodeEvents(on, config) {

          
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
