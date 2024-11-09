import React from 'react';
import EmailCaptureForm from '@/components/EmailCaptureForm';

const Index = () => {
  return (
    <div className="min-h-screen flex items-start pt-20 justify-center bg-[#1a1a2e] text-white">
      <div className="max-w-4xl w-full px-6 py-8">
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#2d2d4a] rounded-full text-sm mb-12">
            Launching Soon!
          </span>
          <h1 className="text-5xl font-bold mb-4">Join our Waitlist!</h1>
          <br></br><br></br>
          <p className="text-lg mb-6">
            Discover how creators bring their digital products to life! &nbsp;&nbsp;From websites and apps to designs 
            and videos, we showcase the unique creative processes behind the scenes. <br></br><br></br>
            Join us to explore how different creators build and shape the digital world.
          </p>
        </div>
        <br></br>
        <EmailCaptureForm />
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            For those who would like to be featured,{' '}
            <a 
              href="mailto:pricedigitalventures@gmail.com?subject=Watch%20Me%20Build%20It%20Creator%20Request&body=Please%20describe%20your%20project%20with%20as%20much%20detail%20as%20you%20can%20or%20provide%20a%20link%20to%20your%20app%2C%20website%2C%20design%2C%20video%2C%20etc.%20so%20we%20can%20verify%20your%20project.%0A%0AWe%20will%20get%20back%20to%20you%20shortly!"
              className="text-blue-400 underline cursor-pointer hover:text-blue-300 font-medium"
            >
              drop us an email
            </a>{' '}
            so we can get you scheduled.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/network-bg.png')] opacity-10 z-0"></div>
    </div>
  );
};

export default Index;