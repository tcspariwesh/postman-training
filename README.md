# postman-training
22-Dec
-------
https://www.jenkins.io/download/thank-you-downloading-windows-installer-stable

{
    "item":"iPhone 17 Pro",
    "price": 4000
}

newman commands
----------------
install git client
install nodejs

open new Git bash CLI

npm i –g newman
script_folder>> newman run <script_file_name>

npm install newman-reporter-html -g
newman run Day1.postman_collection.json --env-var "baseURL=https://api.restful-api.dev" --reporters html
 
