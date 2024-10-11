const { defineConfig } = require("cypress");

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
            generateJSONFromExcel: generateJSONFromExcel,
          })
          return config;
        },
    },
  chromeWebSecurity: false, 
});
