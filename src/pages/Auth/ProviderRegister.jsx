import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../services/authService';
import Navbar from '../../components/Home/Navbar';
import Footer from '../../components/Home/Footer';
import registerImage from '../../assets/login.png';

const ProviderRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', email: '', password: '', terms: false, provider_description: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.terms) return setError('You must agree to the Terms of Use.');

    try {
      await API.post('/auth/register', {
        full_name: form.fullName,
        email: form.email,
        password: form.password,
        provider_description: form.provider_description
      });
      navigate(`/login`);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  return (
    <div>
      <Navbar />
    <div className="flex justify-between items-center py-6 px-32 bg-white h-screen">
      <form onSubmit={handleSubmit} className="w-1/2 space-y-5">
       <div className="text-center pb-24">
         <h2 className="text-2xl font-bold">Register as a provider</h2>
        <p className="text-gray-500">Fill out the form to create a new account</p>
       </div>

        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Please enter your full name"
          className="w-full border px-4 py-2 rounded bg-[#f3ebdd]"
        />

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

        <input
          type="text"
          name="provider_description"
          value={form.provider_description}
          onChange={handleChange}
          placeholder="Please enter your provider description"
          className="w-full border px-4 py-2 rounded bg-[#f3ebdd]"
        />

        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
          <span>I declare that I agree to all <a href="/terms-service" className="text-blue-600">Terms of use</a></span>
        </label>

        {error && <p className="text-red-600">{error}</p>}

        <button className="bg-[#e0d1af] text-black py-2 px-6 rounded w-full font-semibold">Register</button>

        <p className="text-center text-sm">
          Have an account? <Link to="/login" className="font-semibold">Login</Link>
        </p>
      </form>

      <img src={registerImage} alt="Register Illustration" className="w-1/2" />
    </div>
    <Footer />
    </div>
  );
};

export default ProviderRegister;

