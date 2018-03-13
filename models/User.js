const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
   firstname:{
       type: String,
       required: true,
       default: 'Undefined'
   },
   lastname:{
       type: String,
       required: true,
       default: 'Undefined'
   },
    age:{
       type: Number,
        required: true,
        default: 0
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
