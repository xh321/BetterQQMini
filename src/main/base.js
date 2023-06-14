const path = require("path");
const package = require("../../package.json");


// BetterQQNT小程序的数据目录
let BETTERQQNT_PROFILE = process.env["BETTERQQMINI_PROFILE"];
if (!BETTERQQNT_PROFILE) {
    BETTERQQNT_PROFILE = (process.platform === "win32")
        ? "C:\\BetterQQMini"
        : "~/Documents/BetterQQMini";
}


const betterQQNT = {
    path: {
        root: path.join(__dirname, "../../"),
        profile: BETTERQQNT_PROFILE,
        config: path.join(BETTERQQNT_PROFILE, "config.json"),
        plugins: path.join(BETTERQQNT_PROFILE, "plugins"),
        plugins_dev: path.join(BETTERQQNT_PROFILE, "plugins_dev"),
        plugins_data: path.join(BETTERQQNT_PROFILE, "plugins_data"),
        plugins_cache: path.join(BETTERQQNT_PROFILE, "plugins_cache")
    },
    versions: {
        betterQQNT: package.version,
        node: process.versions.node,
        chrome: process.versions.chrome,
        electron: process.versions.electron
    },
    package: package
}


function output(...args) {
    console.log("\x1b[32m%s\x1b[0m", "BetterQQMini:", ...args);
}


module.exports = {
    betterQQNT,
    output
}
