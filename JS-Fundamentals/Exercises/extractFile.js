// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak
// should be the file name, while pptx is the extension).

function extractFile(text) {
    let file = text.split('\\').pop();

    let lastDotIndx = file.lastIndexOf('.');
    let fileName = file.substring(0, lastDotIndx);
    let extension = file.substring(lastDotIndx + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');