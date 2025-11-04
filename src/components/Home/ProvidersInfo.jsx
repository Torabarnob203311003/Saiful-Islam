// ProviderPayment.js
import React from 'react';
import visa from '../../assets/visa.png';
import currency from '../../assets/currency.png';

const ProviderPayment = () => {
  return (
    <div className="py-6 px-[15%]">
      <h1 className="text-4xl font-bold mb-8">How providers get paid ?</h1>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-2/3 pr-0 md:pr-12 mb-6 md:mb-0">
          <p className="text-gray-800 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nulla mattis consequat tempus tellus neque.
            Facilisi tellus diam adipiscing gravida quisque sapien tempus egestas. Integer sed
            faucibus cursus integer platea scelerisque. Sed eget in maecenas non. Enim consectetur
            blandit faucibus amet ut arcu rutrum aenean facilisis. Suspendisse pharetra tincidunt
            tincidunt enim eget lectus fringilla dui. Netus lectus feugiat dolor lobortis mattis
            convallis. Orci malesuada amet volutpat nisl sagittis. Tincidunt suspendisse eu nunc at
            dignissim imperdiet a odio tellus.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <img 
              src={visa} 
              alt="Credit Cards" 
              className="w-full max-w-md transform rotate-6" 
              style={{
                filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.1))"
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-12">
        <div className="w-full md:w-1/3 flex justify-end md:justify-start">
          <div className="relative">
            <img 
              src={currency} 
              alt="Credit Cards" 
              className="w-full max-w-md " 
              style={{
                filter: "drop-shadow(0px -10px 15px rgba(0,0,0,0.1))"
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 pl-0 md:pl-12 mt-6 md:mt-0">
          <p className="text-gray-800 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Nulla mattis consequat tempus tellus neque.
            Facilisi tellus diam adipiscing gravida quisque sapien tempus egestas. Integer sed
            faucibus cursus integer platea scelerisque. Sed eget in maecenas non. Enim consectetur
            blandit faucibus amet ut arcu rutrum aenean facilisis. Suspendisse pharetra tincidunt
            tincidunt enim eget lectus fringilla dui. Netus lectus feugiat dolor lobortis mattis
            convallis. Orci malesuada amet volutpat nisl sagittis. Tincidunt suspendisse eu nunc at
            dignissim imperdiet a odio tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProviderPayment;
