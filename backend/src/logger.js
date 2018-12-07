let consola = require("consola");
let logger = (logtype, data) => {
    if (logtype == "copyright") {
        logger("info", {
            name: "Platforma",
            copyright: "(c) Misha Marinenko  2018",
            description: "A school project for make in-school life easier..."
        });
    } else {
        eval("consola." + logtype)("🎓 :", data);
    }
};
module.exports = logger;