/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
const inquirer = require("inquirer");
const qr = require("qr-image");
const fs = require("fs");


inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Ingresa una URL para generar un código QR:",
    },
  ])
  .then((answers) => {
    const url = answers.url;


    const qr_png = qr.image(url, { type: "png" });
    const qr_filename = "qr_code.png";

    qr_png.pipe(fs.createWriteStream(qr_filename));

    console.log(`Código QR guardado como ${qr_filename}`);


    fs.writeFile("url.txt", url, (err) => {
      if (err) throw err;
      console.log("URL guardada en url.txt");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
