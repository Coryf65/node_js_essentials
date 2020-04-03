const fs = require("fs");
const colorData = require("./assets/colors.json");

// loop through json colors file and create or append to a file colors.md
colorData.colorList.forEach(c => {
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err => {
        if (err) {
            throw err;
        }
    });
});