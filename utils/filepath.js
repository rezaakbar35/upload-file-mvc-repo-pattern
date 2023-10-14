const multer = require('multer');
const path = require('path');

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const directoryFile = __dirname.replace('utils', '')
    cb(null, path.join(directoryFile, 'upload'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);
    cb(null, filename.replace(/\\/g, '/')); 
    },
});

module.exports = () => multer({ storage: diskStorage });