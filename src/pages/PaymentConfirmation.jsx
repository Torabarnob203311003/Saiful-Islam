import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

export default function PaymentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [confirmationDetails, setConfirmationDetails] = useState(null);
  const [countdown, setCountdown] = useState(5);
  
  // Get payment details from location state
  useEffect(() => {
    if (location.state?.service) {
      setConfirmationDetails({
        service: location.state.service,
        appointmentDate: location.state.appointmentDate,
        appointmentTime: location.state.appointmentTime,
        confirmationNumber: generateConfirmationNumber(),
        transactionDate: new Date()
      });
    } else {
      // If no state, redirect to home
      navigate('/');
    }
  }, [location, navigate]);
  
  // Countdown timer to auto-redirect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/dashboard');
    }
  }, [countdown, navigate]);
  
  // Generate a random confirmation number
  const generateConfirmationNumber = () => {
    return 'CONF-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  };
  
  // Format date
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  if (!confirmationDetails) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }
  
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-6 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} className="text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-amber-800 mb-2">Payment Successful!</h1>
          <p className="text-amber-700">
            Thank you for your purchase. Your appointment has been confirmed.
          </p>
        </div>
        
        {/* Confirmation Details */}
        <div className="p-6">
          <div className="border-b pb-4 mb-4">
            <h2 className="text-lg font-semibold mb-4">Appointment Details</h2>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Calendar size={20} className="text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">{formatDate(confirmationDetails.appointmentDate)}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={20} className="text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">{confirmationDetails.appointmentTime}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin size={20} className="text-gray-500 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">
                    {confirmationDetails.service.provider.full_name}'s location
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-b pb-4 mb-4">
            <h2 className="text-lg font-semibold mb-4">Payment Summary</h2>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">{confirmationDetails.service.title}</span>
                <span>${confirmationDetails.service.price.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Service Fee</span>
                <span>$2.00</span>
              </div>
              
              <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>${(confirmationDetails.service.price + 2).toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="bg-gray-50 rounded-md p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Confirmation #</span>
                <span className="font-mono text-sm">{confirmationDetails.confirmationNumber}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Transaction Date</span>
                <span className="text-sm">
                  {confirmationDetails.transactionDate.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => navigate('/dashboard')}
              className="w-full py-3 bg-amber-100 text-amber-800 rounded-md font-medium hover:bg-amber-200 transition-colors"
            >
              Go to Dashboard
            </button>
            
            <button 
              onClick={() => window.print()}
              className="w-full py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Print Receipt
            </button>
          </div>
          
          <div className="text-center mt-6 text-sm text-gray-500">
            Redirecting to dashboard in {countdown} seconds...
          </div>
        </div>
      </div>
    </div>
  );
}