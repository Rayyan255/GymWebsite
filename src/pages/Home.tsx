import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    goal: '',
    locality: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        contact: '',
        goal: '',
        locality: ''
      });
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Join the Best Gym in Pakistan</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Transform your body and mind with our state-of-the-art facilities and expert trainers</p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 transform"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Membership Form */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Your Free Trial Today</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your Name"
                required
                className="bg-gray-800 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all hover:bg-gray-700"
              />
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="Contact Information"
                required
                className="bg-gray-800 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all hover:bg-gray-700"
              />
              <input
                type="text"
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                placeholder="Primary Fitness Goal"
                required
                className="bg-gray-800 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all hover:bg-gray-700"
              />
              <input
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleInputChange}
                placeholder="Locality"
                required
                className="bg-gray-800 w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 transition-all hover:bg-gray-700"
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-red-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center space-x-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105 transform'}`}
            >
              <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
              <ArrowRight className={`h-5 w-5 ${isSubmitting ? 'animate-spin' : ''}`} />
            </button>
          </form>

          {/* Success Message */}
          {showSuccess && (
            <div className="mt-4 p-4 bg-green-600 text-white rounded-md text-center animate-fade-in">
              Thank you for your interest! We'll contact you shortly.
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Ray Fitness?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all hover:bg-gray-800">
              <h3 className="text-xl font-bold mb-4">State-of-the-art Equipment</h3>
              <p className="text-gray-300">Access to the latest fitness equipment and technology to help you achieve your goals effectively.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all hover:bg-gray-800">
              <h3 className="text-xl font-bold mb-4">Expert Trainers</h3>
              <p className="text-gray-300">Our certified trainers provide personalized guidance and support throughout your fitness journey.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-all hover:bg-gray-800">
              <h3 className="text-xl font-bold mb-4">Flexible Schedule</h3>
              <p className="text-gray-300">Open 24/7 with various class timings to fit your busy lifestyle and training preferences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;