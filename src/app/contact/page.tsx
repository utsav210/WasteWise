'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert('Your message has been sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-10 px-6 mx-auto max-w-6xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch with WasteWise</h2>
        <p className="text-gray-600">Have a question or need assistance? Reach out to us!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Write your message here..."
              required
            />
          </div>

          <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-800">
            Send Message
          </Button>
        </form>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="flex items-center gap-2 text-indigo-500"><FaEnvelope /> Email: support@wastewise.com</p>
          <p className="flex items-center gap-2 text-indigo-500"><FaPhone /> Phone: +1 234 567 890</p>
          <p className="flex items-center gap-2 text-indigo-500"><FaMapMarkerAlt /> Address: 123 Food Drive, Green City, USA</p>
          <p className="flex items-center gap-2 text-indigo-500"><FaClock /> Working Hours: Mon-Fri, 9 AM - 6 PM</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-center text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions (FAQ)</h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="faq1">
            <AccordionTrigger>How does WasteWise work?</AccordionTrigger>
            <AccordionContent>
              WasteWise connects food donors with charities and individuals in need, ensuring surplus food is redistributed efficiently.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq2">
            <AccordionTrigger>Is WasteWise free to use?</AccordionTrigger>
            <AccordionContent>
              Yes! Our platform is completely free for both donors and recipients to ensure food reaches those who need it most.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq3">
            <AccordionTrigger>What kind of food can I donate?</AccordionTrigger>
            <AccordionContent>
              You can donate fresh, packaged, and cooked food, as long as it is safe to eat and properly stored.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq4">
            <AccordionTrigger>How can I contact support?</AccordionTrigger>
            <AccordionContent>
              You can reach us via email at support@wastewise.com or call us at +1 234 567 890.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Contact;
