import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = React.useState({});
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        
      } else {
        // Handle successful signup
        setTimeout(() => {
          setError(null);
        }, 3000);
        navigate('/sign-in');
      }
      setLoading(false);
      
    } catch (error) {
      setLoading(false);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center p-12 h-screen mx-auto font-mono '>
      <h1 className='text-3xl font-bold text-slate-800'>Sign Up</h1>
      <p className='mb-6 text-slate-800'>Create an account here</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 text-center p-6 bg-slate-800 w-lg sm:w-2/5 rounded-[20px]'>

        <input type="text" placeholder="Username" className='p-4 rounded' id='username' autoComplete='username' onChange={handleChange} />
        <input type="email" placeholder="Email" className='p-4 rounded' id='email' autoComplete='email' onChange={handleChange} />
        <input type="password" placeholder="Password" className='p-4 rounded' id='password' autoComplete='new-password' onChange={handleChange} />
        <button type="submit" className='bg-soft text-white p-4 rounded-3xl mt-2 hover:opacity-70 disabled:opacity-60'>{loading ? 'Loading...' : 'Sign Up'}</button>
        <h3 className='text-white border-double'>or</h3>
        <button type="submit" className='bg-white text-soft p-4 rounded-3xl hover:bg-soft hover:text-white'>Continue with Google</button>
      </form>
      <div>
        <p>Already have an account? <Link to="/sign-in" className='text-soft'>Log in</Link></p>
        <div>{error && <p className='text-red-500'>{error}</p>}</div>
      </div>

    </div>
  )
}
