import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your Google Form
    // For example using fetch to post to your form response endpoint
    
    // Simulating form submission
    setSubmitStatus('success');
    setTimeout(() => setSubmitStatus(''), 3000);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <footer className="bg-gradient-to-r bg-gray-700 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Fazilat Enterprises</h3>
            <p className="text-gray-300">Your Trusted Partner in Fashion & Apparel Manufacturing.</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <p className="text-sm">FM5V+HCV Sikandrabad, Uttar Pradesh</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <p className="text-sm">+91-7300924300</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <p className="text-sm">designs.can@gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Products', 'Sustainability', 'Contact'].map((item) => (
                <li key={item} className="transition-transform hover:translate-x-2">
                  <a href={`#${item.toLowerCase()}`} className="flex items-center text-gray-300 hover:text-blue-400">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Get In Touch</h3>
            {submitStatus === 'success' ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Message sent successfully!
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="3"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors font-semibold"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Social Media Links */}
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
  &copy; {new Date().getFullYear()} 
  <a 
    href="https://febtech.in/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-blue-400 hover:underline ml-1"
  >
    Febtech IT Solution Pvt. Ltd.
  </a>. All Rights Reserved.
</div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}