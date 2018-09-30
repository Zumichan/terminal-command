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

//touch creates a new file
module.exports.touch = () => {
  fs.writeFile('message.txt', 'This is a new file.', 'utf8', (err) => {
    if (err) {
      console.log(`You have an error: ${err}`)
    } else {
      console.log('file created successfully')
    }
  });
};

//mkdir creates a new directory
module.exports.mkdir = () => {
  fs.mkdir('./terminal-commands',(err, dir)=>{
    if(err) {
      console.log(`You have an error: ${err}`)
    } else {
      console.log('directory created successfully!')
    }
  });
};
