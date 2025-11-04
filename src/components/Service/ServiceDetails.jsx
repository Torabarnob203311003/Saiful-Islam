import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, CheckCircle, X } from 'lucide-react';
import API from '../../services/authService';
import { AuthContext } from '../../context/AuthContext';

// Report Modal Component
function ReportModal({ isOpen, onClose, providerName }) {
  const [selectedReason, setSelectedReason] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [description, setDescription] = useState('');
  const { user } = useContext(AuthContext);

  const reasons = [
    'Fraud',
    'Spreading misinformation',
    'Illegal goods or services',
    'Sexually explicit content',
    'Promoting violence',
    'Hate group contents'
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectReason = (reason) => {
    setSelectedReason(reason);
    setIsDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log('Submitting report with reason:', selectedReason, 'and description:', description);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
              <span className="text-red-500 text-sm">!</span>
            </div>
            <h2 className="text-base font-medium">Report {providerName}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="px-6 py-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Reason</label>
            <div className="relative">
              <button
                type="button"
                onClick={toggleDropdown}
                className="w-full bg-gray-100 text-left px-3 py-2 rounded-md flex items-center justify-between text-gray-500"
              >
                <span>{selectedReason || '-select-'}</span>
                <ChevronLeft size={16} className="transform rotate-90" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                 <div className="max-h-36 overflow-y-scroll py-1">
                    {reasons.map((reason) => (
                      <button
                        key={reason}
                        onClick={() => selectReason(reason)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Describe</label>
            <textarea
              placeholder="type here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-24 bg-gray-100 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-amber-200 text-amber-800 rounded-md py-2 font-medium hover:bg-amber-300 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Service Details Component
export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showReportModal, setShowReportModal] = useState(false);
  const { user } = useContext(AuthContext);
  const reviewsPerPage = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/get-services-details/${id}`);
        const result = response.data;
        if (result.status) {
          setServiceData(result.data);
        } else {
          throw new Error('Failed to fetch service details');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleReportClick = () => {
    if (user) {
      setShowReportModal(true);
    } else {
      navigate('/login');
    }
  };

  const handleSendMessageClick = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    // Navigate to chat page with seller information
    if (serviceData && serviceData.service && serviceData.service.provider) {
      const sellerId = serviceData.service.provider.id;
      navigate(`/chat/${sellerId}`, {
        state: {
          seller: serviceData.service.provider,
          serviceId: id,
          serviceTitle: serviceData.service.title
        }
      });
    }
  };

  const closeReportModal = () => {
    setShowReportModal(false);
  };

  if (loading) return <div className="flex justify-center items-center h-64">Loading...</div>;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
  if (!serviceData) return <div className="text-center p-4">No service data available</div>;

  const { service, reviews, average_rating, total_reviews, recommended, formatted_details } = serviceData;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const RatingStars = ({ rating }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={index < Math.floor(rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <ReportModal 
        isOpen={showReportModal} 
        onClose={closeReportModal} 
        providerName={service?.provider?.full_name || 'Service Provider'}
      />

      <div className="flex items-center text-sm text-gray-500 mb-6 space-x-2">
        <a href="/" className="hover:text-gray-700">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
        </a>
        <span>/</span>
        {formatted_details.split(' / ').map((item, index, array) => (
          <div key={index} className="flex items-center">
            <a href="#" className="hover:text-gray-700">{item}</a>
            {index < array.length - 1 && <span className="mx-2">/</span>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="rounded-lg overflow-hidden mb-4">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="mb-4 flex items-center">
            <div className="mr-4">
              <img
                src={service.provider.image}
                alt={service.provider.full_name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-medium mr-2">{service.provider.full_name}</h3>
                <CheckCircle size={16} className="text-blue-500" />
              </div>
              <div className="flex items-center">
                <RatingStars rating={average_rating} />
                <span className="ml-1 text-sm">{average_rating} ({total_reviews})</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button 
                className="py-2 px-4 border border-gray-300 rounded-md text-sm"
                onClick={handleReportClick}
              >
                Report Listing
              </button>
              <button 
                className="py-2 px-4 bg-amber-100 text-amber-800 rounded-md text-sm"
                onClick={handleSendMessageClick}
              >
                Send message
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-1">{service.title}</h1>
          <p className="text-gray-500 text-sm mb-4">60 mins in person</p>

          <p className="text-gray-700 mb-6">{service.description}</p>

          <div className="text-2xl font-bold mb-6">${service.price}</div>

          <div className="flex space-x-4 mb-8">
            <button className="flex-1 py-3 px-4 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-md text-center">
              Purchase in person
            </button>
            <button className="flex-1 py-3 px-4 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-md text-center">
              Purchase virtual
            </button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Reviews</h2>
            <div className="flex items-center">
              <RatingStars rating={average_rating} />
              <span className="ml-1">{average_rating} ({total_reviews})</span>
            </div>
          </div>

          <div className="space-y-8">
            {currentReviews.map((review) => (
              <div key={review.id} className="border-t pt-6">
                <div className="flex items-center mb-2">
                  <img
                    src={review.user.image}
                    alt={review.user.full_name}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span className="font-medium mr-2">{review.user.full_name}</span>
                  <div className="flex items-center ml-auto">
                    <Star size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                    <span>{review.rating}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>

          {reviews.length > reviewsPerPage && (
            <div className="flex justify-center items-center mt-6 space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-1 rounded-full border disabled:text-gray-300"
              >
                <ChevronLeft size={16} />
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-2 h-2 rounded-full ${currentPage === index + 1 ? 'bg-gray-800' : 'bg-gray-300'}`}
                />
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-1 rounded-full border disabled:text-gray-300"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-6">Recommended for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommended.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden bg-white">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <img
                    src={item.provider.image}
                    alt={item.provider.full_name}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span className="font-medium">{item.provider.full_name}</span>
                  <div className="flex items-center ml-auto">
                    <Star size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                    <span>4.9</span>
                    <span className="text-gray-500 text-xs ml-1">(225)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <div className="font-medium">From ${item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="py-2 px-4 border border-gray-300 rounded-md">
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}