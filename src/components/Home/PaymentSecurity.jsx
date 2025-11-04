import React from "react";
import bank from '../../assets/bank.png';
const PaymentSecurity = () => {
  return (
    <div className="py-6 px-32 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Payment security
      </h1>


      <div className="flex justify-center mb-4">
        <img src={bank} alt="icon"  />
      </div>
      <div className="prose max-w-none text-gray-600">
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur. Veli tat magna donee pharetra. Magna purus sem auctor faucibus id ut velit dui quisque. Nisi eleifend pellentesque velit ullamcorper nisus pretium cursus scelerisque vulputate. Diam porttitor tincidunt posuere tellus aliquam diam felis.
          Ett consequat ut id nunc sit tellus ultricies. Quam tortor pellentesque orci pharetra consectetur id. Nec aenean donee eget quis. Id eleifend augue bibendum mattis ultricies aliquet velit nihil voluptat. Omare faucibus egestas nisi mattis nec elit etiam.
          Lorem ipsum dolor sit amet consectetur. Veli tat magna donee pharetra. Magna purus sem auctor faucibus id ut velit dui quisque. Nisi eleifend pellentesque velit ullamcorper nisus pretium cursus scelerisque vulputate. Diam porttitor tincidunt posuere tellus aliquam diam felis.
          Ett consequat ut id nunc sit tellus ultricies. Quam tortor pellentesque orci pharetra consectetur id. Nec aenean donee eget quis. Id eleifend augue bibendum mattis ultricies aliquet velit nihil voluptat. Omare faucibus egestas nisi mattis nec elit etiam.
        </p>
      </div>
    </div>
  );
};

export default PaymentSecurity;