import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../../services/authService';
import Navbar from '../../components/Home/Navbar';
import Footer from '../../components/Home/Footer';

const VerifyCode = () => {
  const navigate = useNavigate();
  const { verificationCode: code = '', email = '' } = useParams();
  const [verificationCode, setVerificationCode] = useState(new Array(6).fill(''));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (code) {
      setVerificationCode(code.split('').map(digit => digit));
    }
  }, [code]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();

    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split('');
      const newCode = [...verificationCode];
      
      digits.forEach((digit, index) => {
        if (index < 6) {
          newCode[index] = digit;
        }
      });

      setVerificationCode(newCode);
      
      if (inputRefs.current[5]) {
        inputRefs.current[5].focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const code = verificationCode.join('');
    if (code.length !== 6) {
      return setError('Please enter the complete 6-digit verification code');
    }

    setLoading(true);
    setError('');
    
    try {
      await API.post('/auth/verify', { otp:code, email });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setResendLoading(true);
    setError('');
    
    try {
      await API.post('/auth/resend-otp', { email });
      alert('A new verification code has been sent to your email');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to resend code. Please try again.');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-12 px-6 bg-white min-h-screen">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-sm">
          <h2 className="text-xl font-bold text-center mb-6">Verification code</h2>
          <p className="text-gray-500 text-center text-sm mb-8">
            We sent a reset link to {email}, 
            enter a digit code that is mentioned in the email
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-2 mb-6">
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  maxLength={1}
                  className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

            <button 
              type="submit" 
              className="bg-[#e0d1af] text-black py-2 px-6 rounded w-full font-semibold mb-4"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify Code'}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">
              You have not received the email? {' '}
              <button 
                onClick={handleResendCode} 
                className="text-blue-600 font-semibold"
                disabled={resendLoading}
              >
                {resendLoading ? 'Resending...' : 'Resend'}
              </button>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyCode;

