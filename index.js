const inquirer=require("inquirer")
const prompt=inquirer.createPromptModule()
const fs=require("fs")
const path=require("path")
const generator=require("./utils/generator")
prompt([
    {
        type:"input",
        name:"title",
        message:"Enter project title",
    }, {
        type:"list",
        name:"license",
        message:"Select license from list",
        choices: ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "Creative Commons","other","none"]
    }, {
        type: "input",
        name: "description",
        message: "Enter project description",
    }, {
        type: "input",
        name: "installation",
        message: "Enter installation instructions",
        default:"Clone the repository to your local machine, run npm i to download dependecies"
    }, {
        type: "input",
        name: "usage",
        message: "Enter intended use",
    }, {
        type:"input",
        name:"GitHubUser",
        message:"Enter the GitHub username for primary author",
    },
    {
        type: "input",
        name: "email",
        message: "Enter the email for primary author",
    },
    {
        type: "input",
        name: "contributor",
        message: "Enter the primary author's name",
    },
    {
        type:"confirm",
        name:"otherContributors",
        message:"Are there any other contributors?",
    },
    {
        type:"input",
        name:"otherAuthor",
        message:"Enter the names of other authors",
        when:(answer=>answer.otherContributors===true)
    }
]).then(answers => {
    console.log(answers)
    fs.writeFile(path.join(__dirname,"README.md"),generator(answers),function(err){
        if(err) throw err;
        console.log("File generated successfully")
    })
})