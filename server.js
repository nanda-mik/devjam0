const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoConnect = require('./util/database').mongoConnect;
const adminRoutes = require("./routes/admin");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const dotenv = require('dotenv');
dotenv.config();

const URI = process.env.MONGODB_URI;

const app = express();
const store = new MongoDBStore({
    uri:URI,
    collection: 'sessions'
});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret:'mysecret',
    resave:'false',
    saveUninitialized: false,
    store: store
    })
);

app.use('/admin',adminRoutes);

mongoConnect(()=>{
    app.listen(5000);
})
