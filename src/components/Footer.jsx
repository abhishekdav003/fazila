import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send, CheckCircle, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const formRef = useRef(null);

  // Google Form configuration - replace these with your actual form details
  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf0zVct_xhvP_WDt-RM2yuXoXAL4Vu5bqmnUXte4C29ad40ng/formResponse";
  const FORM_FIELD_MAPPING = {
    name: "entry.2140892361",      // Replace with your actual entry ID
    email: "entry.241001052",     // Replace with your actual entry ID
    phone: "entry.1334581108",     // Replace with your actual entry ID
    // subject: "entry.456789123",   // Replace with your actual entry ID
    message: "entry.1544276135"    // Replace with your actual entry ID
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Valid email is required";
    if (!formData.message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    setSubmitStatus('submitting');

    try {
      // Create form data for submission
      const formSubmitData = new FormData();

      // Map your form fields to Google Form entry IDs
      Object.keys(formData).forEach(field => {
        if (FORM_FIELD_MAPPING[field]) {
          formSubmitData.append(FORM_FIELD_MAPPING[field], formData[field]);
        }
      });

      // Using a hidden iframe to submit the form without page navigation
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Set up the form to submit to the iframe
      formRef.current.target = 'hidden_iframe';
      formRef.current.action = GOOGLE_FORM_ACTION;
      formRef.current.method = 'post';

      // Submit the form
      formRef.current.submit();

      // Show success message after a brief delay
      setTimeout(() => {
        setSubmitStatus('success');

        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          // subject: '',
          message: ''
        });

        // Reset status after showing success message
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);

        // Clean up the iframe
        document.body.removeChild(iframe);
      }, 1000);

    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus('error');

      // Reset status after showing error message
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const renderFormStatus = () => {
    switch (submitStatus) {
      case 'submitting':
        return (
          <div className="flex items-center justify-center space-x-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-6 rounded animate-pulse">
            <Loader className="w-6 h-6 animate-spin" />
            <p className="font-medium">Submitting your message...</p>
          </div>
        );
      case 'success':
        return (
          <div className="flex items-center justify-center space-x-2 bg-green-50 border border-green-200 text-green-700 px-4 py-6 rounded animate-fadeIn">
            <CheckCircle className="w-6 h-6" />
            <p className="font-medium">Message sent successfully!</p>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center justify-center space-x-2 bg-red-50 border border-red-200 text-red-700 px-4 py-6 rounded">
            <p className="font-medium">Failed to send message. Please try again.</p>
          </div>
        );
      default:
        return (
          <form ref={formRef} className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            />
            {/* <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            /> */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="3"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded transition-all duration-300 font-semibold flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
        );
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-700 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-16 after:bg-indigo-500">
              Fazilat Enterprises
            </h3>
            <p className="text-gray-300">Your Trusted Partner in Fashion & Apparel Manufacturing.</p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-300">FM5V+HCV Sikandrabad, Uttar Pradesh</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0" />
                <a href="tel:+917300924300" className="text-sm text-gray-300 hover:text-indigo-300 transition-colors duration-300">
                  +91 7300924300
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-indigo-400 flex-shrink-0" />
                <a href="mailto:contact@fazilatenterprises.in" className="text-sm text-gray-300 hover:text-indigo-300 transition-colors duration-300">
                  contact@fazilatenterprises.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-indigo-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Product', 'Sustainability', 'Contact'].map((item) => (
                <li key={item} className="transition-all duration-300 hover:translate-x-2">
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="flex items-center text-gray-300 hover:text-indigo-300 transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-indigo-400" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-indigo-500">
              Get In Touch
            </h3>
            <div className="transition-all duration-500 ease-in-out">
              {renderFormStatus()}
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()}
              <a
                href="https://febtech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 hover:underline ml-1 transition-colors duration-300"
              >
                Febtech IT Solution Pvt. Ltd.
              </a>. All Rights Reserved.
            </div>
            <div className="flex space-x-5">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" }
              ].map(({ Icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={label}
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