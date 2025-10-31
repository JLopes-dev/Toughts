const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
const conn = require('./db/conn')

const app = express();
const PORT = 8081;

conn.sync()
    .then(() => app.listen(PORT))
    .catch(err => console.error(err.message));