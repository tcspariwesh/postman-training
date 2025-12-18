# postman-training

newman commands
----------------
install git client
install nodejs
open new Git bash CLI
npm i –g newman
script_folder>> newman run <script_file_name>

npm install newman-reporter-html -g
newman run Day1.postman_collection.json --env-var "baseURL=https://api.restful-api.dev" --reporters html
 
