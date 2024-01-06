import express from 'express';
import UserModel from '../models/User';
import jwt from 'jsonwebtoken';

const router = express.Router();
const secretKey = process.env.JWT_SECRET || '1234';

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username });

    if (user) {
      const result = password === user.password;
      
      if(result) {
        // Generate a token and send it in the response
        const token = jwt.sign({ username: user.username, role: user.role }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ Status: 'Success', role: user.role, token });
      } else {
        res.status(200).json({ Status: 'Failure' });
      }
    
    } else {
      return res.status(401).json({ message: 'User not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export const AuthRoute = router;
