import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div 
        className="h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2015, Ray Fitness has grown to become Pakistan's premier fitness destination. 
              Our journey began with a simple mission: to provide a world-class fitness experience that's 
              accessible to everyone.
            </p>
            <p className="text-gray-300">
              Today, we're proud to serve thousands of members across multiple locations, helping them 
              achieve their fitness goals through expert guidance, state-of-the-art equipment, and a 
              supportive community.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Gym interior" 
              className="rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1548932238-bd3e5e94c314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Training session" 
              className="rounded-lg mt-8"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">5+</div>
            <div className="mt-2">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">1000+</div>
            <div className="mt-2">Happy Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">20+</div>
            <div className="mt-2">Expert Trainers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">50+</div>
            <div className="mt-2">Fitness Classes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;