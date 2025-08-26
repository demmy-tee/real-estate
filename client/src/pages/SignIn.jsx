import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {signInStart,signInSuccess, signInFailure} from '../redux/user/userSlice.js';

export default function SignIn() {
  const [formData, setFormData] = React.useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      } else {
        // Handle successful signup
        setTimeout(() => {
          dispatch(signInSuccess(data.user));
          navigate('/');
        }, 3000);
      }

    } catch (error) {
      dispatch(signInFailure(error.message));
   
    }
  };

  return (
    <div className='flex flex-col items-center justify-center p-12 h-screen mx-auto font-mono '>
      <h1 className='text-3xl font-bold text-slate-800'>Sign In</h1>
      <p className='mb-6 text-slate-800'>Login to your account here</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-center p-6 bg-slate-800 w-lg sm:w-2/5 rounded-[20px]'>
        <input type="email" placeholder="Email" className='p-4 rounded' id='email' autoComplete='email' onChange={handleChange} />
        <input type="password" placeholder="Password" className='p-4 rounded' id='password' autoComplete='new-password' onChange={handleChange} />
        <button type="submit" className='bg-soft text-white p-4 rounded-3xl mt-2 hover:opacity-70 disabled:opacity-60'>{loading ? 'Loading...' : 'Sign in'}</button>
        <h3 className='text-white border-double'>or</h3>
        <button type="submit" className='bg-white text-soft p-4 rounded-3xl hover:bg-soft hover:text-white'>Continue with Google</button>
      </form>
      <div>
        <p> <Link to="/sign-up" className='text-soft'>Create Your account here</Link></p>
        <div>{error && <p className='text-red-500'>{error}</p>}</div>
      </div>

    </div>
  )
}
