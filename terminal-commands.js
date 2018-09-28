const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    //acc=accumulator. acc file file file
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);
  });
};
