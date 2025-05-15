import { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Send, ChevronRight, Check, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ContactSection() {
  // Create refs for form and iframe
  const formRef = useRef(null);
  const iframeRef = useRef(null);

  // Form states
  const [formState, setFormState] = useState({
    status: 'idle', // idle, submitting, success, error
    message: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Animation states
  const [animationClass, setAnimationClass] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start submission animation
    setFormState({
      status: 'submitting',
      message: 'Sending your message...'
    });
    setAnimationClass('animate-pulse');

    try {
      // Replace with your actual Google Form details
      const googleFormActionUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf0zVct_xhvP_WDt-RM2yuXoXAL4Vu5bqmnUXte4C29ad40ng/formResponse";

      // Define your entry IDs (replace these with your actual entry IDs from your Google Form)
      const nameEntryId = "entry.2140892361";
      const emailEntryId = "entry.241001052";
      const subjectEntryId = "entry.1334581108";
      const messageEntryId = "entry.1544276135";

      // Create form data for submission
      const googleFormData = new FormData();
      googleFormData.append(nameEntryId, formData.name);
      googleFormData.append(emailEntryId, formData.email);
      googleFormData.append(subjectEntryId, formData.subject);
      googleFormData.append(messageEntryId, formData.message);

      // Using the hidden iframe to submit the form without page redirection
      // Create a temporary form element
      const tempForm = document.createElement('form');
      tempForm.action = googleFormActionUrl;
      tempForm.method = 'POST';
      tempForm.target = 'hidden-iframe';
      tempForm.style.display = 'none';

      // Add all form data as hidden inputs
      for (const [key, value] of googleFormData.entries()) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        tempForm.appendChild(input);
      }

      // Append the form to the body, submit it, and remove it
      document.body.appendChild(tempForm);
      tempForm.submit();
      document.body.removeChild(tempForm);

      // Wait a moment before showing success to allow the iframe submission to complete
      setTimeout(() => {
        setFormState({
          status: 'success',
          message: 'Your message has been sent successfully! We\'ll get back to you soon.'
        });
        setAnimationClass('');
        resetForm();

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormState({
            status: 'idle',
            message: ''
          });
        }, 5000);
      }, 1500);
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Something went wrong. Please try again later.'
      });
      setAnimationClass('');

      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormState({
          status: 'idle',
          message: ''
        });
      }, 5000);
    }
  };

  return (
    <>
      <Header />

      {/* Hidden iframe for Google Form submission */}
      <iframe
        name="hidden-iframe"
        id="hidden-iframe"
        ref={iframeRef}
        style={{ display: 'none' }}
        title="Google Form Submission Frame"
      />

      <div className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-800 mb-3">Our Office</h1>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Contact Info */}
              <div className="bg-indigo-500 text-white p-10">
                <h2 className="text-xl font-bold mb-10 uppercase tracking-wider">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-indigo-700 p-3 rounded-lg mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-100">Our Location</h3>
                      <p className="mt-1 text-gray-200">FM5V+HCV Sikandrabad uttar pradesh</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-indigo-700 p-3 rounded-lg mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-100">Phone Number</h3>
                      <p className="mt-1 text-gray-200">+91 7300924300</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-indigo-700 p-3 rounded-lg mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-100">Email Address</h3>
                      <p className="mt-1 text-gray-200">contact@fazilatenterprises.in</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-indigo-500">
                  <h3 className="font-medium mb-5 text-gray-100">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-indigo-700 p-3 rounded-lg hover:bg-indigo-800 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-indigo-700 p-3 rounded-lg hover:bg-indigo-800 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-indigo-700 p-3 rounded-lg hover:bg-indigo-800 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-indigo-700 p-3 rounded-lg hover:bg-indigo-800 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="h-96 lg:h-auto lg:col-span-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1342.9448331011042!2d77.6930907715869!3d28.45838970472395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbd39971800af%3A0xcc7fbe083b15b266!2sFazilat%20Enterprises!5e0!3m2!1sen!2sin!4v1747136159574!5m2!1sen!2sin"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4 md:mb-0">Get In Touch</h2>
                <div className="inline-flex items-center text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full">
                  <span>Home</span>
                  <ChevronRight className="h-4 w-4 mx-2" />
                  <span className="text-indigo-600 font-medium">Contact</span>
                </div>
              </div>

              {/* Form status message */}
              {formState.status !== 'idle' && (
                <div className={`mb-6 p-6 rounded-lg flex items-center transition-all duration-300 ${animationClass} ${formState.status === 'success'
                    ? 'bg-green-50 border-l-4 border-green-500'
                    : formState.status === 'error'
                      ? 'bg-red-50 border-l-4 border-red-500'
                      : 'bg-slate-50 border-l-4 border-indigo-500'
                  }`}>
                  <div className="flex-shrink-0 mr-4">
                    <div className={`p-2 rounded-full ${formState.status === 'success'
                        ? 'bg-green-100'
                        : formState.status === 'error'
                          ? 'bg-red-100'
                          : 'bg-indigo-100'
                      }`}>
                      {formState.status === 'success' ? (
                        <Check className={`h-6 w-6 ${formState.status === 'success'
                            ? 'text-green-600'
                            : formState.status === 'error'
                              ? 'text-red-600'
                              : 'text-indigo-600'
                          }`} />
                      ) : formState.status === 'error' ? (
                        <AlertCircle className="h-6 w-6 text-red-600" />
                      ) : (
                        <svg className="animate-spin h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium ${formState.status === 'success'
                        ? 'text-green-800'
                        : formState.status === 'error'
                          ? 'text-red-800'
                          : 'text-slate-800'
                      }`}>
                      {formState.status === 'success'
                        ? 'Message Sent!'
                        : formState.status === 'error'
                          ? 'Error'
                          : 'Sending...'}
                    </h3>
                    <p className={`mt-1 ${formState.status === 'success'
                        ? 'text-green-700'
                        : formState.status === 'error'
                          ? 'text-red-700'
                          : 'text-slate-700'
                      }`}>
                      {formState.message}
                    </p>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name <span className="text-slate-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                      placeholder="Your name"
                      disabled={formState.status === 'submitting'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email <span className="text-slate-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                      placeholder="Your email address"
                      disabled={formState.status === 'submitting'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    placeholder="Your Phone number"
                    disabled={formState.status === 'submitting'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                    placeholder="Your message..."
                    disabled={formState.status === 'submitting'}
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={formState.status === 'submitting'}
                    className={`px-8 py-3 text-white font-medium rounded-lg transition-all duration-300 flex items-center ${formState.status === 'submitting'
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                      }`}
                  >
                    {formState.status === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}