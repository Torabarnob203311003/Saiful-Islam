import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import API from '../../utils/authService'; // Assumes axios instance
import API from '../../services/authService';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await API.get('/get-all-category');
        // console.log(response.data);
        if (response.data.status && response.data.data?.data) {
          setCategories(response.data.data.data);
        } else {
          setError('Failed to load categories.');
        }
      } catch (err) {
        console.error(err);
        setError('An error occurred while fetching categories.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="py-6 px-32">
      <h2 className="text-left text-3xl font-bold mb-8">Categories</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.name}`}
              style={{ height: '120px', width: '120px' }}
            >
              <button className="bg-white shadow p-4 rounded-lg h-full w-full text-center flex flex-col items-center">
                <img src={cat.icon} alt={cat.name} className="w-8 h-8 object-contain" />
                <span className="mt-2 text-sm text-center">{cat.name}</span>
              </button>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Categories;
