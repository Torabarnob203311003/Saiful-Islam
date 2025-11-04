import { useState } from "react";
import { Mail, MapPin, Users } from "lucide-react";

export default function SupportTeamContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-10">We have a support team</h2>
      
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-12">
        {/* Help & Support Card */}
        <div className="bg-white p-6 flex-1 flex flex-col items-center text-center shadow-sm">
          <div className="p-4 mb-2">
            <Mail className="w-8 h-8 text-amber-200" />
          </div>
          <h3 className="font-medium mb-2">Help & support</h3>
          <p className="text-sm text-gray-500 mb-1">teamsupport@gmail.com</p>
          <p className="text-sm text-gray-500">team@support@gmail.com</p>
        </div>
        
        {/* Location Card */}
        <div className="bg-white p-6 flex-1 flex flex-col items-center text-center shadow-sm">
          <div className="p-4 mb-2">
            <MapPin className="w-8 h-8 text-amber-200" />
          </div>
          <h3 className="font-medium mb-2">Location</h3>
          <p className="text-sm text-gray-500">121 King Street Melbourne,</p>
          <p className="text-sm text-gray-500">3000, Australia</p>
        </div>
        
        {/* Live Support Card */}
        <div className="bg-white p-6 flex-1 flex flex-col items-center text-center shadow-sm">
          <div className="p-4 mb-2">
            <Users className="w-8 h-8 text-amber-200" />
          </div>
          <h3 className="font-medium mb-2">Live support</h3>
          <p className="text-sm text-gray-500">+123 456 542 87456</p>
          <p className="text-sm text-gray-500">+123 456 543 23453</p>
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-center mb-8">Contact with us for any enquiry</h2>
      
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your name:"
            className="p-3 border border-gray-200 w-full focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email:"
            className="p-3 border border-gray-200 w-full focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone:"
            className="p-3 border border-gray-200 w-full focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject:"
            className="p-3 border border-gray-200 w-full focus:outline-none"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        
        <textarea
          name="message"
          placeholder="Message:"
          rows="6"
          className="p-3 border border-gray-200 w-full mb-4 focus:outline-none"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-amber-200 text-gray-800 px-8 py-3 font-medium hover:bg-amber-300 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}