let logger = require("./src/logger");
const http = require('http');
let port = process.env.PORT || 3000;
logger("copyright");
logger("info", "Starting backend self-test...");
logger("info", "Requiring the backend");
let incomplete = () => {
    logger("error", "Test failed!");
    process.exitCode = -1;
    process.exit();
}
if (require("./index") !== undefined) {
    logger("info", "All in-set backend required!");
} else {
    logger("error", "Backend is undefiend!");
    incomplete();
}

http.get('http://localhost:' + port, (resp) => {
    logger("info", "testing get: " + 'http://localhost:' + port);
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        logger("success", {
            resp: data
        })
    });

}).on("error", (err) => {
    logger("error", "Cannot get " + 'http://localhost:' + port);
    logger("error", err);
    incomplete();
});