import React from 'react';

const testimonials = [
  {
    image: 'https://i.pravatar.cc/100?img=1',
    name: 'Md. Abid Hasan',
    location: 'Dhaka, Bangladesh',
    message: 'Lorem ipsum dolor sit amet consectetur. Proin pellentesque nisl volutpat mattis sed vitae. Tellus nunc turpis arcu sagittis massa volutpat vel consequat. Aliquet laoreet senectus feugiat tellus maecenas auctor maecenas quis tristique. At mattis amet nec ullamcorper vestibulum ut libero. Vel facilisi tortor viverra sit maecenas odio tristique. Turpis massa adipiscing quis aliquam at fames. Quisque non vulputate porttitor dignissim in id velit lectus. Ipsum velit leo neque fermentum. Scelerisque leo tristique sed nunc urna porttitor in faucibus..',
    rating: 4
  },
  {
    image: 'https://i.pravatar.cc/100?img=2',
    name: 'Md. Abid Hasan',
    location: 'Dhaka, Bangladesh',
    message: 'Lorem ipsum dolor sit amet consectetur. Proin pellentesque nisl volutpat mattis sed vitae. Tellus nunc turpis arcu sagittis massa volutpat vel consequat. Aliquet laoreet senectus feugiat tellus maecenas auctor maecenas quis tristique. At mattis amet nec ullamcorper vestibulum ut libero. Vel facilisi tortor viverra sit maecenas odio tristique. Turpis massa adipiscing quis aliquam at fames. Quisque non vulputate porttitor dignissim in id velit lectus. Ipsum velit leo neque fermentum. Scelerisque leo tristique sed nunc urna porttitor in faucibus..',
    rating: 5
  },
  {
    image: 'https://i.pravatar.cc/100?img=3',
    name: 'Md. Abid Hasan',
    location: 'Dhaka, Bangladesh',
    message: 'Lorem ipsum dolor sit amet consectetur. Proin pellentesque nisl volutpat mattis sed vitae. Tellus nunc turpis arcu sagittis massa volutpat vel consequat. Aliquet laoreet senectus feugiat tellus maecenas auctor maecenas quis tristique. At mattis amet nec ullamcorper vestibulum ut libero. Vel facilisi tortor viverra sit maecenas odio tristique. Turpis massa adipiscing quis aliquam at fames. Quisque non vulputate porttitor dignissim in id velit lectus. Ipsum velit leo neque fermentum. Scelerisque leo tristique sed nunc urna porttitor in faucibus..',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="pt-6 px-32 pb-52">
      <h2 className="text-3xl font-bold mb-8">What our customers say?</h2>
      <div className="flex flex-wrap justify-between gap-6">
        {testimonials.map((testi, index) => (
          <div key={index} className="bg-white shadow p-6 rounded-lg w-full md:w-1/3 lg:w-1/4 py-8">
            <div className="flex items-center justify-center">
              <img src={testi.image} alt={testi.name} className="rounded-full w-16 h-16" />
              <div className="ml-4">
                <h4 className="font-bold mb-1">{testi.name}</h4>
                <p className="text-gray-500 mb-1">{testi.location}</p>
              </div>
            </div>
            <p className="text-gray-600 mt-4 pb-4">{testi.message}</p>
            <div className="flex items-center justify-center mt-4">
              {[...Array(testi.rating)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.417 8.253L12 18.897l-7.417 4.626L6 15.27 0 9.423l8.332-1.268z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

