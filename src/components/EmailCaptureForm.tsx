import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EmailCaptureForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          email: email, // This should match the template variable in EmailJS
        }
      );

      // Show success message
      toast.success('Thank you for joining our waitlist! We\'ll notify you when we launch.');
      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('There was an error joining the waitlist. Please try again.');
    }
  };

  return (
    <div className="max-w-xl mx-auto relative z-10">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow bg-[#2d2d4a] border-none text-white placeholder-gray-400"
        />
        <Button type="submit" className="bg-white text-black hover:bg-gray-200">
          Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default EmailCaptureForm;