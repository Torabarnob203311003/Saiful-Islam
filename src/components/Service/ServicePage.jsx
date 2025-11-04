import React, { useEffect, useState } from 'react';
import API from '../../services/authService';
import { Link } from 'react-router-dom';

const ServicePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await API.get('/get-all-services');
        if (res.data.status && res.data.data?.data) {
          setServices(res.data.data.data);
        } else {
          setError('Failed to load services.');
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching services.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold my-12 text-left">Services we are provided</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services-details/${service.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col h-full"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicePage;

