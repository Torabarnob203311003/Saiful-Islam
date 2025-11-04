import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowLeft, Calendar, Clock, CreditCard, CheckCircle } from 'lucide-react';

import visa from '../../src/assets/visacart.png';
import mastercard from '../../src/assets/mastercard.png';
import API from '../services/authService';


export default function PaymentPage({ service }) {
  const navigate = useNavigate();

  // Demo service data if not provided through props
  const defaultService = {
    id: '1',
    title: 'Laundry Service',
    price: 52.00,
    provider: {
      id: '1',
      full_name: 'Liam Carter',
      image: 'https://via.placeholder.com/40',
      rating: 4.9,
      reviews_count: 225,
      description: 'Lorem ipsum dolor sit amet consectetur. Nulla volutpat donec velit auctor dictum. Vitae adipiscing varius, semper porttitor erat amet sodales integer vel. Cum id placerat lectus metus scelerisque non. Interdum imperdiet augue lacinia volutpat. Elementum volutpat in posuere orae.Bibendum. Pulvinar sagittis facilisis magna turpis viverra urna amet proin sit. Hendrerit sed fermentum sed. Sed integer tortor venenatis habitant et vero cursus egestas amet...'
    }
  };

  // Use provided service or default to demo data
  const serviceData = service || defaultService;

  // State variables
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showCalendar, setShowCalendar] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTimeSelection, setActiveTimeSelection] = useState('start'); // 'start' or 'end'

  // Calculate total amount (base price with tax or fees could be added here)
  const totalAmount = serviceData.price;

  // Available time slots
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Format the current month and year for display
  const formatMonthYear = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Get days in month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get the first day of the month
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = value.replace(/[^\d]/g, '');

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter(group => !!group).join(' ')
    );
  };

  // Format expiry date with slash
  const formatExpiryDate = (value) => {
    const onlyNumbers = value.replace(/[^\d]/g, '');

    if (onlyNumbers.length <= 2) {
      return onlyNumbers;
    }

    return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}`;
  };

  // Handle card number change
  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  // Handle expiry date change
  const handleExpiryDateChange = (e) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setExpiryDate(formattedValue);
  };

  // Check if the payment button should be enabled
  const isPaymentEnabled = () => {
    return selectedDate &&
      selectedStartTime &&
      selectedEndTime &&
      cardNumber.replace(/\s/g, '').length === 16 &&
      expiryDate.length === 5 &&
      securityCode.length >= 3;
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Handle date selection
  const handleDateSelect = (day) => {
    if (!day) return;

    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Only allow dates from today onwards
    if (newDate >= today) {
      setSelectedDate(newDate);
    }
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    if (activeTimeSelection === 'start') {
      setSelectedStartTime(time);
      // If end time is not set or is earlier than start time, reset it
      if (!selectedEndTime || getTimeValue(time) >= getTimeValue(selectedEndTime)) {
        setSelectedEndTime(null);
      }
      // Switch to end time selection if we just set the start time
      setActiveTimeSelection('end');
    } else {
      // Only allow end times that are after the start time
      if (getTimeValue(time) > getTimeValue(selectedStartTime)) {
        setSelectedEndTime(time);
      }
    }
  };

  // Helper function to get numerical value of time for comparison
  const getTimeValue = (timeString) => {
    if (!timeString) return 0;
    
    let [hours, minutes] = timeString.split(':');
    const isPM = timeString.includes('PM');
    
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    
    if (isPM && hours !== 12) {
      hours += 12;
    } else if (!isPM && hours === 12) {
      hours = 0;
    }
    
    return hours * 60 + minutes;
  };
  // Process payment
  const handlePayment = async () => {
    setIsProcessing(true);

    const paymentData={
      amount: 52.00,
    payment_method: 'pm_card_visa',
    platform_fee: 8,
    service_id: 1
    }

    try {
      const response = await API.post('/order-payment', paymentData);

      if (response.ok) {
        setIsProcessing(false);
        setPaymentSuccess(true);
        
        // Redirect after payment success
        setTimeout(() => {
          navigate('/payment-confirmation', { 
            state: { 
              service: serviceData,
              appointmentDate: selectedDate,
              appointmentStartTime: selectedStartTime,
              appointmentEndTime: selectedEndTime
            } 
          });
        }, 2000);
      } else {
        setIsProcessing(false);
        alert('Payment failed!');
      }
    } catch (error) {
      setIsProcessing(false);
      console.error(error);
    }
  };

  // Determine if a date is in the past
  const isPastDate = (day) => {
    if (!day) return false;

    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date < today;
  };

  // Determine if a date is selected
  const isSelectedDate = (day) => {
    if (!selectedDate || !day) return false;

    return day === selectedDate.getDate() && 
           currentMonth.getMonth() === selectedDate.getMonth() && 
           currentMonth.getFullYear() === selectedDate.getFullYear();
  };

  // Get days of the week
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        <span>Payment procedure</span>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Service information */}
        <div>
          <div className="rounded-lg overflow-hidden mb-4">
            <img
              src="https://via.placeholder.com/600x400"
              alt={serviceData.title}
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="flex items-center mb-6">
            <img
              src={serviceData.provider.image}
              alt={serviceData.provider.full_name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="font-medium">{serviceData.provider.full_name}</h3>
              <div className="flex items-center text-sm">
                <span className="text-yellow-500">★</span>
                <span>{serviceData.provider.rating}</span>
                <span className="text-gray-500 ml-1">({serviceData.provider.reviews_count})</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-6 line-clamp-6">
            {serviceData.provider.description}
          </p>
          
          <div className="flex items-center font-medium mb-2">
            <span>From ${serviceData.price.toFixed(2)}</span>
          </div>
        </div>
        
        {/* Payment form */}
        <div>
          {paymentSuccess ? (
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h2 className="text-xl font-bold mb-2">Payment Successful!</h2>
              <p className="text-gray-600 mb-4">
                Your appointment has been scheduled for {selectedDate?.toLocaleDateString()} from {selectedStartTime} to {selectedEndTime}.
              </p>
              <p className="text-gray-500 text-sm">Redirecting to confirmation page...</p>
            </div>
          ) : (
            <>
              {/* Date and Time Selection */}
              <div className="mb-8">
                <div className="flex space-x-4 mb-4">
                  <div className="w-full">
                    <button 
                      className={`w-full p-3 border rounded-md flex items-center justify-between ${
                        selectedDate ? 'border-amber-500' : 'border-gray-300'
                      }`}
                      onClick={() => setShowCalendar(true)}
                    >
                      <div className="flex items-center">
                        <Calendar size={18} className="text-gray-500 mr-2" />
                        <span className="text-sm">
                          {selectedDate 
                            ? selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) 
                            : 'Select Date'}
                        </span>
                      </div>
                      <ChevronRight size={18} className="text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <button 
                      className={`w-full p-3 border rounded-md flex items-center justify-between ${
                        selectedStartTime ? 'border-amber-500' : 'border-gray-300'
                      } ${activeTimeSelection === 'start' && showCalendar === false ? 'bg-amber-50' : ''}`}
                      onClick={() => {
                        setShowCalendar(false);
                        setActiveTimeSelection('start');
                      }}
                      disabled={!selectedDate}
                    >
                      <div className="flex items-center">
                        <Clock size={18} className="text-gray-500 mr-2" />
                        <span className="text-sm">
                          {selectedStartTime || 'Start Time'}
                        </span>
                      </div>
                      <ChevronRight size={18} className="text-gray-400" />
                    </button>
                  </div>
                  
                  <div className="w-1/2">
                    <button 
                      className={`w-full p-3 border rounded-md flex items-center justify-between ${
                        selectedEndTime ? 'border-amber-500' : 'border-gray-300'
                      } ${activeTimeSelection === 'end' && showCalendar === false ? 'bg-amber-50' : ''}`}
                      onClick={() => {
                        setShowCalendar(false);
                        setActiveTimeSelection('end');
                      }}
                      disabled={!selectedDate || !selectedStartTime}
                    >
                      <div className="flex items-center">
                        <Clock size={18} className="text-gray-500 mr-2" />
                        <span className="text-sm">
                          {selectedEndTime || 'End Time'}
                        </span>
                      </div>
                      <ChevronRight size={18} className="text-gray-400" />
                    </button>
                  </div>
                </div>
                
                {/* Calendar or Time slots */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  {showCalendar ? (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-medium">
                          {formatMonthYear(currentMonth)}
                        </span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={goToPreviousMonth}
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button 
                            onClick={goToNextMonth}
                            className="p-1 rounded-full hover:bg-gray-200"
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2 mb-2">
                        {daysOfWeek.map(day => (
                          <div 
                            key={day} 
                            className="text-center text-xs text-gray-500"
                          >
                            {day}
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-7 gap-2">
                        {getDaysInMonth(currentMonth).map((day, index) => (
                          <button
                            key={index}
                            disabled={!day || isPastDate(day)}
                            onClick={() => handleDateSelect(day)}
                            className={`
                              h-9 w-full flex items-center justify-center rounded-full text-sm
                              ${!day ? 'invisible' : ''}
                              ${isPastDate(day) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-200'}
                              ${isSelectedDate(day) ? 'bg-amber-200 text-amber-800 font-medium' : ''}
                            `}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-medium mb-3">
                        {activeTimeSelection === 'start' ? 'Select Start Time' : 'Select End Time'}
                      </h3>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(time => {
                          // For end time selection, disable times that are earlier than or equal to start time
                          const isDisabled = activeTimeSelection === 'end' && 
                                            getTimeValue(time) <= getTimeValue(selectedStartTime);
                          
                          return (
                            <button
                              key={time}
                              onClick={() => handleTimeSelect(time)}
                              disabled={isDisabled}
                              className={`
                                py-2 px-3 text-sm rounded-md
                                ${activeTimeSelection === 'start' && selectedStartTime === time 
                                  ? 'bg-amber-200 text-amber-800 font-medium' 
                                  : activeTimeSelection === 'end' && selectedEndTime === time
                                  ? 'bg-amber-200 text-amber-800 font-medium'
                                  : isDisabled
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                  : 'bg-white border hover:bg-gray-100'}
                              `}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Payment Information */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Card information:</h3>
                
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1">Card number</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full p-2 border rounded-md pl-3 pr-12"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                      <img src={visa} alt="visa" className="h-5" />
                      {/* <img src={mastercard} alt="mastercard" className="h-5" /> */}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Expiration date</label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Security code</label>
                    <input
                      type="text"
                      value={securityCode}
                      onChange={(e) => setSecurityCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="CVV"
                      maxLength={4}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              </div>
              
              {/* Pay Button */}
              <button
                onClick={handlePayment}
                disabled={!isPaymentEnabled() || isProcessing}
                className={`
                  w-full py-3 rounded-md font-medium transition-colors
                  ${isPaymentEnabled() && !isProcessing
                    ? 'bg-amber-200 text-amber-800 hover:bg-amber-300'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}
                `}
              >
                {isProcessing 
                  ? 'Processing...' 
                  : `Pay $${totalAmount.toFixed(2)}`}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}