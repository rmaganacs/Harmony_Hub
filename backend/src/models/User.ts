import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { 
    type: String,
    required: true 
  },
}, { collection: 'Users' });

// Create the user model
const UserModel = mongoose.model('user', userSchema);

export default UserModel;
