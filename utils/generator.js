function createBadge(license){
    if (license === "Apache 2.0 License"){
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
}
module.exports=function(data){
    return `
# ${data.title}
${createBadge(data.license)}
    `
}