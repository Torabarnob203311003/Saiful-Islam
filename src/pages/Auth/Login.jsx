import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import API from '../../services/authService';
import loginImage from '../../assets/register.png';
import Navbar from '../../components/Home/Navbar';
import Footer from '../../components/Home/Footer';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);

      login(res?.data); // Assuming user object returned
      navigate('/user/dashboard'); // Redirect as needed
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div>
      <Navbar />
    
    <div className="flex justify-between items-center bg-white py-6 px-32 h-screen">
      <form onSubmit={handleSubmit} className="w-1/2 space-y-5">
       <div className='text-center pb-24'> <h2 className="text-2xl font-bold">Login as a user</h2>
        <p className="text-gray-500">Log in by registered email & password</p></div>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Please enter your email"
          className="w-full border px-4 py-2 rounded bg-[#f3ebdd]"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Please enter your password"
          className="w-full border px-4 py-2 rounded bg-[#f3ebdd]"
        />

        <div className="text-right text-sm">
          <Link to="/forgot-password" className="text-blue-600">Forget password?</Link>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button className="bg-[#e0d1af] text-black py-2 px-6 rounded w-full font-semibold">Log in</button>

        <p className="text-center text-sm">
          New user? <Link to="/register" className="font-semibold">Register</Link>
        </p>
      </form>

      <img src={loginImage} alt="Login Illustration" className="w-1/2" />
    </div>
    <Footer />
     </div> 
  );
};

export default Login;
