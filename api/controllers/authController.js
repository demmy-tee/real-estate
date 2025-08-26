import User from '../userModel/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/utils.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save()

  // Here you would typically handle user registration logic, such as saving the user to a database.
  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "Sign Up Successful",
      receivedData: { username, email, password: password ? '***' : 'not provided' }
    });

  } catch (error) {
   next(error); // Pass the error to the error handling middleware
  }
}

export const signin = async (req, res, next) => { 
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email })
    if (!validUser) return next(errorHandler(404, 'user not found'));
    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'Wrong Credentials'));
    const { password: pass, ...userData } = validUser._doc;
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    res.cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({
        success: true,
        user: userData,
        token
      });
  } catch (error) {
   next(error);
  }
}
