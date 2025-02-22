import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const coaches = [
  {
    name: 'Sarah Ahmed',
    specialty: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1611675427564-44d27b4b6f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    social: {
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Ali Khan',
    specialty: 'CrossFit Expert',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    social: {
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Fatima Zahra',
    specialty: 'Yoga & Flexibility',
    image: 'https://images.unsplash.com/photo-1609899537878-39f6f593b5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    social: {
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Hassan Malik',
    specialty: 'Bodybuilding Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    social: {
      instagram: '#',
      linkedin: '#'
    }
  }
];

const Coaches = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold">Our Expert Coaches</h1>
        </div>
      </div>

      {/* Coaches Grid */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden group">
              <div className="relative">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold">{coach.name}</h3>
                  <p className="text-gray-300">{coach.specialty}</p>
                </div>
              </div>
              <div className="p-4 flex justify-center space-x-4">
                <a href={coach.social.instagram} className="text-gray-400 hover:text-red-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href={coach.social.linkedin} className="text-gray-400 hover:text-red-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coaches;