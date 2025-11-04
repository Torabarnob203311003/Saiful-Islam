import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../services/authService';
import Navbar from '../../components/Home/Navbar';
import Footer from '../../components/Home/Footer';
import forgotPasswordImage from '../../assets/forget.png';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setError('Please enter your email address');

    setLoading(true);
    setError('');
    
    try {
      await API.post('/auth/forgot-password', { email });
      setSuccess('Reset link sent! Please check your email.');
      setTimeout(() => {
        navigate('/auth/verify');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center py-6 px-32 bg-white h-screen">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-2">Forget password</h2>
          <p className="text-gray-500 mb-8">Enter valid information to update a new password</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Please enter your email"
                className="w-full border px-4 py-2 rounded bg-[#f3ebdd]"
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}
            {success && <p className="text-green-600 text-sm">{success}</p>}

            <button 
              type="submit" 
              className="bg-[#e0d1af] text-black py-2 px-6 rounded w-full font-semibold"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Enter'}
            </button>
          </form>
        </div>

        <div className="w-1/2 flex justify-center">
          <img src={forgotPasswordImage} alt="Forgot Password Illustration" className="w-4/5" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;