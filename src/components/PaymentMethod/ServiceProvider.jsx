import React from 'react';
import image from '../../assets/cf1.png';
import ava from '../../assets/Ava.png';


const ServiceProvider = () => {
  return (
    <div className="py-6 px-32 border-t mb-6 bg-white border-radius-50 border-gray-200 w-1/2">
      <div className="h-48 bg-gray-200 relative">
        <img src={image} alt="Service" className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex flex-col ">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
            <img src={ava} alt="Provider avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-medium">Liam Carter</h3>
            
          </div>
          <div className="ml-auto flex items-center">
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="text-sm text-gray-700 ml-1">4.9</span>
                <span className="text-xs text-gray-500 ml-1">(235)</span>
              </div>
            </div>
        </div>
        

        <div className="mb-6 text-sm text-gray-500">
          <p className="line-clamp-3">
            Lorem ipsum dolor sit amet consectetur. Nulla volutpat dictum varius
            auctor dictum. Vitae egestas nisl in consectetur commodo amet viverra
            integer eros. Eam id placerat duis egestas superdiam enim amet amet
            integer. Nam scelerisque arcu fermentum id sed mattis et egestas
            phasellus. Turpis praesent turpis quam justo lobortis tortor quis elit.
            At id cum sit aliquam tempus tellus gravida a eros. Interdum volutpat
            nulla odio tristique et non commodo risus. Amet eget sit interdum nulla
            eget. Purus id tincidunt ornare egestas pharetra dictum tempus amet.
            Purus enim facilisis semper quis. Amet nibh mauris rhoncus viverra
            quis...
          </p>
        </div>
      </div>

      <div className="mb-6 font-medium ml-4">
        <span className="text-gray-700">From $52.00</span>
      </div>
    </div>
  );
};

export default ServiceProvider;

