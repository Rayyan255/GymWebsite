import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all hover:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all hover:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-gray-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all hover:bg-gray-700"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-red-600 text-white py-3 rounded-md text-lg font-semibold transition-all flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-red-700 hover:scale-105 transform'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Success Message */}
              {showSuccess && (
                <div className="mt-4 p-4 bg-green-600 text-white rounded-md text-center animate-fade-in">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all cursor-pointer">
                <MapPin className="h-6 w-6 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">123 Fitness Street, Gulberg III<br />Lahore, Pakistan</p>
                </div>
              </div>
              <a href="tel:+923001234567" className="flex items-start space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all cursor-pointer">
                <Phone className="h-6 w-6 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+92 300 1234567</p>
                </div>
              </a>
              <a href="mailto:info@rayfitness.com" className="flex items-start space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all cursor-pointer">
                <Mail className="h-6 w-6 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">info@rayfitness.com</p>
                </div>
              </a>
              <div className="flex items-start space-x-4 group hover:bg-gray-800 p-4 rounded-lg transition-all cursor-pointer">
                <Clock className="h-6 w-6 text-red-600 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 6:00 AM - 10:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;