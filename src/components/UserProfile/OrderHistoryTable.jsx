
// File: src/components/OrderHistoryTable.jsx
import React from 'react';

const OrderHistoryTable = () => {
  // Sample order data
  const orders = [
    { id: '12345', date: '2023-04-15', total: '$129.99', status: 'Delivered' },
    { id: '12346', date: '2023-03-22', total: '$79.49', status: 'Delivered' },
    { id: '12347', date: '2023-02-10', total: '$214.50', status: 'Delivered' },
    { id: '12348', date: '2023-01-05', total: '$45.00', status: 'Delivered' }
  ];

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Order History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{order.total}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-600 font-medium">
                  <button>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistoryTable;