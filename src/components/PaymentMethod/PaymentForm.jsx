import React from 'react';

export default function PaymentForm() {
  return (
    <div className="mb-6 ml-4">
      <h3 className="text-sm font-medium mb-2">Card information:</h3>

      <div className="mb-4">
        <label className="block text-xs text-gray-500 mb-1">Card number</label>
        <div className="relative">
          <input
            type="text"
            className="w-[30%] p-2 border rounded-md"
            placeholder="123 456 6548"
          />
          <div className=" left-0 pt-2 pb-2 flex space-x-2">
            <div className="w-6 h-4 bg-blue-500 rounded"></div>
            <div className="w-6 h-4 bg-red-500 rounded"></div>
          </div> 
        </div>
      </div>

      <div className="flex w-[30%] space-x-5">
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Expiration date</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="MM/YY"
          />
        </div>
        <div className="flex-1">
          <label className="block text-xs text-gray-500 mb-1">Security code</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            placeholder="CVV"
          />
        </div>
      </div>


      <button className="w-[30%] bg-amber-200 py-3 rounded-md text-gray-700 font-medium mt-4">
        Pay $52.00
      </button>
    </div>
  );
}

