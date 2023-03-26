const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./app/config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
