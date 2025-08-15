import User from '../userModel/user.model.js';
import bcrypt from 'bcryptjs';
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  await newUser.save()

  // Here you would typically handle user registration logic, such as saving the user to a database.
  try {
    await newUser.save();
    res.status(201).json({
      message: "Sign Up Successful",
      receivedData: { username, email, password: password ? '***' : 'not provided' }
    });
  } catch (error) {
    console.error( error);
    res.status(500).json({ message: error.message });
  }
}

