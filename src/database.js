const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/movies';

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
})
.then(db => console.log("DB is connected"))
.catch(err => console.log(err));

module.exports = mongoose;
