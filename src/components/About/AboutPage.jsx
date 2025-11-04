import ab1 from "../../assets/ab-1.png";
import ab2 from "../../assets/ab-2.png";
import ab3 from "../../assets/ab-3.png";
import ab4 from "../../assets/ab-4.png";


const AboutPage = () => {
  return (
    <div className="py-6 px-32">

      {/* Hero Section */}
      <div className="rounded-2xl overflow-hidden relative">
        <img 
          src={ab1}
          alt="Marketplace" 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Empowering your marketplace</h1>
          <p className="max-w-2xl text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Vulputate orci elementum mauris pellentesque semper non imperdiet in...
          </p>
        </div>
      </div>

      {/* Middle Section: Experience + About */}
      <div className="grid md:grid-cols-3 gap-6 pt-12">
        {/* Left 2 images with experience */}
        <div className="flex flex-col space-y-6 md:col-span-2">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-md">
              <img src={ab2} alt="Experience 1" className="w-full h-72 object-cover" />
            </div>
            <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-md">
              <img src={ab3}  alt="Experience 2" className="w-full h-72 object-cover" />
            </div>
          </div>
          <div className="bg-[#4E3B27] text-white text-center rounded-2xl p-6 shadow-md">
            <h2 className="text-3xl font-bold">25+</h2>
            <p className="mt-2 text-sm">Years of experience</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#F9F2E8] rounded-2xl p-8 shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-sm text-gray-600 mb-2">About Tawun</h3>
            <h2 className="text-xl font-bold mb-4">
              The best e-commerce platform in town since 2022
            </h2>
            <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur. Varius vel pharetra lobortis nulla. Imperdiet mattis nam velit urna auctor quis nullam pellentesque in. Eu condimentum pulvinar scelerisque dolor volutpat. Platea eget vestibulum velit in. Lorem ipsum dolor sit amet consectetur. Varius vel pharetra lobortis nulla. Imperdiet mattis nam velit urna auctor quis nullam pellentesque in. Eu condimentum pulvinar scelerisque dolor volutpat. Platea eget vestibulum velit in. Lorem ipsum dolor sit amet consectetur. Varius vel pharetra lobortis nulla. Imperdiet mattis nam velit urna auctor quis nullam pellentesque in. Eu condimentum pulvinar scelerisque dolor volutpat. 
            </p>
          </div>
          <button className="bg-[#D5AE7F] text-white font-semibold mt-6 px-4 py-2 rounded-lg hover:bg-[#c39d71]">
            Our categories
          </button>
        </div>
      </div>

      {/* Vision / Mission / Plan Sections */}
      <div className="grid md:grid-cols-3 gap-6 py-16">
        {/* Vision */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-4 bg-white">Our Vision</h3>
          <p className="text-gray-600 text-sm">
           Lorem ipsum dolor sit amet consectetur. Molestie nibh nibh porttitor pulvinar nisl vestibulum. Ultricies augue semper eu pulvinar adipiscing et. Pharetra ultrices elit orci amet. Duis hac quis tellus leo augue donec in quam sem. Lorem ipsum dolor sit amet consectetur. Molestie nibh nibh porttitor pulvinar nisl vestibulum. Ultricies augue semper eu pulvinar adipiscing et. Pharetra ultrices elit orci amet. Duis hac quis tellus leo augue donec in quam sem. orttitor pulvinar nisl vestibulum. Ultricies augue semper eu pulvinar adipiscing et. Pharetra ultrices elit orci amet. Duis hac quis tellus leo augue donec in quam sem.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-semibold text-lg mb-4">Our Mission</h3>
          <p className="text-gray-600 text-sm">
           Lorem ipsum dolor sit amet consectetur. Molestie nibh nibh porttitor pulvinar nisl vestibulum. Ultricies augue semper eu pulvinar adipiscing et. Pharetra ultrices elit orci amet. Duis hac quis tellus leo augue donec in quam sem. Lorem ipsum dolor sit amet consectetur. Molestie nibh nibh porttitor pulvinar nisl vestibulum. Ultricies augue semper eu pulvinar adipiscing et. Pharetra ultrices elit orci amet. Duis hac quis tellus leo augue donec in quam sem. orttitor pulvinar nisl vestibulum. Ultricies augue semper eu pulvinar adipiscing et. Pharetra ultrices elit orci amet. Duis hac quis tellus leo augue donec in quam sem.
          </p>
        </div>

        {/* Plan + Contact */}
        <div className="rounded-2xl overflow-hidden shadow-md flex flex-col justify-between">
          <img src={ab4} alt="Plan" className="w-full h-48 object-cover" />
          <div className="bg-[#4E3B27] text-white p-6 flex flex-col flex-1">
            <h3 className="font-semibold text-lg mb-2">
              Our plan makes you feel more comfortable in ecommerce business
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Lorem ipsum dolor sit amet consectetur. Curabitur viverra egestas dignissim...
            </p>
            <button className="bg-[#D5AE7F] text-white font-semibold mt-auto px-4 py-2 rounded-lg hover:bg-[#c39d71]">
              Contact Us
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
