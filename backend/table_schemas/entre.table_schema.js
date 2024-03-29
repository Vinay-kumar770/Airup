import mongoose from 'mongoose';

const { Schema } = mongoose;

const usersSchema = new Schema({
  sessionUUID: {
    type: String,
    required: false, // This field is not required because it will only be set after login
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true, //this is to be changed
    unique: false,//this is to be changed
  },
  password: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: false,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
},
{
  timestamps: true,
});

export default mongoose.model("Users", usersSchema);
