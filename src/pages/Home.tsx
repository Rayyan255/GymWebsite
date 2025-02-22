import React, { useState } from 'react';
import { ArrowRight, Check, Star, Trophy, Users, Activity } from 'lucide-react';
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

  const membershipPlans = [
    {
      name: 'Basic',
      price: '5,000',
      features: [
        'Access to gym equipment',
        'Basic fitness assessment',
        'Locker room access',
        '2 Group classes per week'
      ]
    },
    {
      name: 'Premium',
      price: '8,000',
      features: [
        'All Basic features',
        'Unlimited group classes',
        'Personal trainer (2 sessions/month)',
        'Nutrition consultation'
      ]
    },
    {
      name: 'Elite',
      price: '12,000',
      features: [
        'All Premium features',
        'Personal trainer (8 sessions/month)',
        'Monthly body composition analysis',
        'Premium locker with amenities'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Khan',
      role: 'Professional Athlete',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      quote: 'Ray Fitness has transformed my training routine. The facilities and trainers are world-class!'
    },
    {
      name: 'Ahmed Ali',
      role: 'Business Executive',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      quote: 'The flexible hours and expert guidance helped me maintain my fitness despite my busy schedule.'
    },
    {
      name: 'Fatima Zahra',
      role: 'Yoga Enthusiast',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      quote: 'The yoga classes and mindfulness sessions have brought balance to my life. Highly recommended!'
    }
  ];

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

      {/* Stats Section */}
      <div className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-gray-400">Happy Members</div>
            </div>
            <div className="text-center">
              <Trophy className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-3xl font-bold">50+</div>
              <div className="text-gray-400">Expert Trainers</div>
            </div>
            <div className="text-center">
              <Activity className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-3xl font-bold">100+</div>
              <div className="text-gray-400">Fitness Classes</div>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <div className="text-3xl font-bold">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Membership Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div key={index} className="bg-black p-8 rounded-lg transform hover:scale-105 transition-all">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-red-600 mb-6">
                  Rs. {plan.price}
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-red-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition-colors">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
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

          {showSuccess && (
            <div className="mt-4 p-4 bg-green-600 text-white rounded-md text-center animate-fade-in">
              Thank you for your interest! We'll contact you shortly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;