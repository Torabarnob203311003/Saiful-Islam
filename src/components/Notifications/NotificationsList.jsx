import { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "accepted",
      service: "Cleaning",
      provider: "Md. Abid",
      date: "11-01-2025",
      amount: 500,
      completed: false
    },
    {
      id: 2,
      type: "completed",
      service: "Cleaning",
      provider: "Md. Abid",
      date: "11-01-2025",
      amount: 500,
      completed: true
    },
    {
      id: 3,
      type: "accepted",
      service: "Cleaning",
      provider: "Md. Abid",
      date: "11-01-2025",
      amount: 500,
      completed: false
    },
    {
      id: 4,
      type: "completed",
      service: "Cleaning",
      provider: "Md. Abid",
      date: "11-01-2025",
      amount: 500,
      completed: true
    },
  ]);

  return (
    <div className=" p-4  py-8 px-4 pb-24 md:px-8 max-w-7xl mx-auto mb-16">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <div className="space-y-2">
        {notifications.map(notification => (
          <div key={notification.id} className="border rounded-lg p-4 flex justify-between items-center bg-gray-50 ">
            <div className="flex-1">
              <p className="text-orange-500 font-medium mb-1">
                {notification.type === "accepted" ? "Your custom offer is accepted." : "Order completed"}
              </p>
              <div className="text-gray-700">
                <p className="font-medium">{notification.service}</p>
                <p className="text-sm">Provider: {notification.provider}</p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between h-full">
              <div className="text-right mb-2">
                <p className="font-medium">Today</p>
                <p className="text-sm text-gray-600">{notification.date}</p>
              </div>
              <div className="text-right">
                <p className="text-green-500 font-semibold text-lg">${notification.amount}</p>
                {!notification.completed && (
                  <button className="text-sm text-gray-500">
                    Tap to continue your order
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
