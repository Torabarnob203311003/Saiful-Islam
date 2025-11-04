import React, { useEffect, useState } from 'react';
import API from '../../services/authService';
import { Link } from 'react-router-dom';

const TopServices = () => {
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
     <section className="py-6 px-32">
          <h2 className="text-left text-3xl font-bold mb-8">Top Services</h2>
    
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <div className="flex flex-wrap gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`services-details/${service.id}`}
                  style={{ height: '120px', width: '120px' }}
                >
                  <button className="bg-white shadow p-4 rounded-lg h-full w-full text-center flex flex-col items-center">
                    <img src={service.image} alt={service.name} className="w-8 h-8 object-contain" />
                    <span className="mt-2 text-sm text-center">{service.title}</span>
                  </button>
                </Link>
              ))}
            </div>
          )}
        </section>
    // <div className="max-w-7xl mx-auto px-4 py-12">
    //   <h2 className="text-3xl font-bold my-12 text-left">Top Services</h2>

    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : error ? (
    //     <p className="text-red-600">{error}</p>
    //   ) : (
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {services.map((service) => (
    //         <Link
    //           key={service.id}
    //           to={`/services-details/${service.id}`}
    //           style={{ height: '120px', width: '120px' }}
    //         >
    //           <img
    //             src={service.image}
    //             alt={service.title}
    //             className="h-48 w-full object-cover"
    //           />
    //           <div className="p-4 flex flex-col flex-1">
    //             <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
               
    //           </div>
    //         </Link>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
};

export default TopServices;

