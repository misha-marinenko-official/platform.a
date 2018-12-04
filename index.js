#!/usr/bin/env node
var program = require('commander');
var consola = require('consola');
var package = require("./package");
var childProcess = require('child_process');

function runScript(scriptPath, callback) {
    var invoked = false;
    var process = childProcess.fork(scriptPath);
    process.on('error', function (err) {
        if (invoked) return;
        invoked = true;
        callback(err);
    });
    process.on('exit', function (code) {
        if (invoked) return;
        invoked = true;
        var err = code === 0 ? null : new Error('exit code ' + code);
        callback(err);
    });

}

program
  .version(package.version)
  .option('-b, --backend', 'Start Backend Server')
  .option('-f, --frontend', 'Start Frontend Server')
  .parse(process.argv);

if (program.backend) {
    runScript("./backend/"+require("./backend/package").main, function (err) {
        if (err) consola.error(err);
        consola.info('finished running Backend Server.');
    });
}
if (program.frontend) {
    runScript("./backend/"+require("./backend/package").main, function (err) {
        if (err) consola.error(err);
        consola.info('finished running Frontend Server.');
    });
}