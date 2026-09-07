import { motion } from 'motion/react';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      // EmailJS configuration - replace these with your actual keys
      await emailjs.sendForm(
        'service_e998xan',      // Replace with your EmailJS Service ID
        'template_r8xt8dp',     // Replace with your EmailJS Template ID
        form,
        'EYRZXqxatb58FAwN4'       // Replace with your EmailJS Public Key
      );

      toast.success('Thank you for your message! I will get back to you soon.', {
        duration: 5000,
        style: {
          background: '#10B981',
          color: '#fff',
          border: 'none',
        },
      });

      form.reset();
    } catch (error) {
      console.error('Email send error:', error);
      toast.error('Failed to send message. Please try again or email me directly.', {
        duration: 5000,
        style: {
          background: '#EF4444',
          color: '#fff',
          border: 'none',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 transition-colors duration-300">
      <Toaster position="top-center" richColors />
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4">
            <span className="text-[#888888]">Get in </span>
            <span className="text-[#111111]">touch</span>
          </h2>
          <p className="text-center text-[#9CA3AF] text-sm mb-12 md:mb-16">
            Have a question or want to work together? Send me a message!
          </p>
        </motion.div>

        {/* Contact Form - macOS Window Style Light Theme */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-[12px] shadow-lg overflow-hidden">
            {/* macOS Window Header */}
            <div className="bg-[#F3F4F6] px-4 py-3 flex items-center border-b border-[#E5E7EB]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 text-center">
                <p className="text-sm font-medium text-[#111111]">New message</p>
              </div>
              <div className="w-[52px]"></div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="divide-y divide-[#E5E7EB]">
              <div className="px-4 py-3 flex items-center gap-3">
                <label className="text-sm text-[#111111] font-medium w-24">Name :</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                  className="flex-1 text-sm text-[#111111] placeholder:text-[#9CA3AF] outline-none bg-transparent"
                />
              </div>
              <div className="px-4 py-3 flex items-center gap-3">
                <label className="text-sm text-[#111111] font-medium w-24">Email :</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 text-sm text-[#111111] placeholder:text-[#9CA3AF] outline-none bg-transparent"
                  style={{
                    backgroundColor: 'transparent',
                    backgroundImage: 'none'
                  }}
                />
              </div>
              <div className="px-4 py-3 flex items-start gap-3">
                <label className="text-sm text-[#111111] font-medium w-24 pt-1">Message :</label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  required
                  className="flex-1 text-sm text-[#111111] placeholder:text-[#9CA3AF] outline-none bg-transparent resize-none min-h-[120px]"
                />
              </div>
              <div className="px-4 py-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#111111] text-white py-3 rounded-lg hover:bg-black transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}