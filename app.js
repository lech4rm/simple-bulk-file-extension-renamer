const fs = require('fs');



fs.readdir('./files', (err , filesArray) => {

  err ? console.log(err) : rename_files_yo (filesArray, process.argv[2])

})


function rename_files_yo (inputArray , ext) {
  inputArray.forEach((file) => {
    let fileNameArray = file.split('.');
    fileNameArray.pop()
    fileNameArray.push(ext)
    let newFileName = fileNameArray.join('.')
    fs.rename('./files/' + file, './files/' + newFileName, (err) => {
      if(err)
        console.log(err)
    })
    console.log(file + ' changed to -> ' + newFileName)
  })

}
