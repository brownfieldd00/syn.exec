# syn.exec
This function takes a string as input (the command to be executed) and returns:
```json
{
    "data": "COMMAND OUTPUT",
    "err": null,
    "stderr": null
}
```
(node-cmd is used to execute commands. See the documentation here: https://www.npmjs.com/package/node-cmd)
# How to install?
Click __Code__ > __Download Zip__

Extract the archive

Copy __Client/main.lua__ to your Autoexec folder

(!) Install Node JS from: https://nodejs.org/en/download/

Install the dependancies:
```cmd
npm install -g express
```
```cmd
npm install -g node-cmd
```

Run __Server/deploy_server.cmd__