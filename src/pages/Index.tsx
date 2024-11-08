import React from 'react';
import EmailCaptureForm from '@/components/EmailCaptureForm';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a2e] text-white">
      <div className="max-w-2xl w-full px-6 py-8">
        <div className="mb-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#2d2d4a] rounded-full text-sm mb-6">
            Launching Soon!
          </span>
          <h1 className="text-5xl font-bold mb-4">Join our Waitlist!</h1>
          <p className="text-lg mb-6">
            Discover how creators bring their digital products to life! From websites and apps to designs 
            and videos, we showcase the unique creative processes behind the scenes. <br></br>
            Join us to explore how different creators build and shape their digital world.
          </p>
          <p className="text-sm">
            For those who would like to be featured, drop us an{' '}
            <a href="mailto:pricedigitalventures@gmail.com" className="underline">
              email
            </a>{' '}
            so we can get you scheduled.
          </p>
        </div>
        <EmailCaptureForm />
      </div>
      <div className="absolute inset-0 bg-[url('/network-bg.png')] opacity-10 z-0"></div>
    </div>
  );
};

export default Index;
