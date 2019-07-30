const express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    env = require('dotenv/config'),
    userRoute = require('./route/user')


const app = express();


const URL = process.env.URL;
mongoose.connect(URL, {useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
mongoose.set('useFindAndModify', false);


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/api/v1', cors(), userRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`server is starting and running at port ${PORT}`);

});

module.exports = app;