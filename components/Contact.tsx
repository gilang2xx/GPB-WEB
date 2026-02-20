import React, { useState } from 'react';
import { SectionHeader } from './UI/SectionHeader';
import { SkewButton } from './UI/SkewButton';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // Construct the WhatsApp message
    const text = `Hi GPB Team,\n\nI am interested in joining/inquiry.\n\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
    
    // WhatsApp API URL (Phone: +62 818-0633-3337)
    const phoneNumber = '6281806333337';
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Open in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Contact Us" subtitle="Get in Touch" align="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Info Section */}
          <div className="space-y-8 h-full flex flex-col">
            <div className="bg-gray-50 dark:bg-neutral-900 p-8 border-l-4 border-gpb-blue transition-colors duration-300">
               <h3 className="text-3xl font-teko font-bold uppercase mb-2 text-black dark:text-white">Headquarters</h3>
               <p className="font-satoshi text-gray-600 dark:text-gray-400">
                 <strong>Global Private Badminton</strong><br/>
                 Operational Base: Depok, West Java<br/>
                 Expansion Zone: South Jakarta
               </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-neutral-900 p-8 border-l-4 border-gpb-orange transition-colors duration-300">
               <h3 className="text-3xl font-teko font-bold uppercase mb-2 text-black dark:text-white">Direct Line</h3>
               <p className="font-satoshi text-gray-600 dark:text-gray-400">
                 <span className="block mb-1"><i className="fab fa-whatsapp w-6"></i> +62 818-0633-3337</span>
                 <span className="block"><i className="fas fa-envelope w-6"></i> globalprivateb@gmail.com</span>
               </p>
            </div>

            {/* Google Maps Embed */}
            <div className="flex-grow min-h-[300px] w-full bg-gray-200 dark:bg-gray-800 relative overflow-hidden group">
               {/* Map Styling Overlay for Dark Mode Effect (CSS Filter) */}
               <div className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay bg-gpb-blue/10"></div>
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.931324730123!2d106.84643731241688!3d-6.4028497625991045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb97a875b9cd%3A0x1aaa72d41fc79504!2sGOR%20Tirta%20Sari!5e0!3m2!1sid!2sid!4v1771614407563!5m2!1sid!2sid" 
                 width="100%" 
                 height="100%" 
                 style={{border:0, filter: 'grayscale(100%) invert(90%) contrast(1.2)'}} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="w-full h-full absolute inset-0 dark:filter dark:invert-[0.9] dark:grayscale"
                 title="GPB Operational Map"
               ></iframe>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-gray-50 dark:bg-neutral-900 p-8 md:p-12 transform skew-x-3 border border-gray-200 dark:border-white/5 transition-colors duration-300">
             <form onSubmit={handleWhatsAppSubmit} className="space-y-6 transform -skew-x-3">
               <div>
                 <label className="block font-teko text-xl uppercase mb-2 text-black dark:text-white">Name</label>
                 <input 
                   type="text" 
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                   className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 p-3 focus:border-gpb-blue outline-none transition-colors text-black dark:text-white" 
                   placeholder="ENTER YOUR NAME" 
                 />
               </div>
               <div>
                 <label className="block font-teko text-xl uppercase mb-2 text-black dark:text-white">Email</label>
                 <input 
                   type="email" 
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   required
                   className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 p-3 focus:border-gpb-blue outline-none transition-colors text-black dark:text-white" 
                   placeholder="ENTER YOUR EMAIL" 
                 />
               </div>
               <div>
                 <label className="block font-teko text-xl uppercase mb-2 text-black dark:text-white">Message</label>
                 <textarea 
                   rows={4} 
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                   className="w-full bg-white dark:bg-black border border-gray-300 dark:border-white/20 p-3 focus:border-gpb-blue outline-none transition-colors text-black dark:text-white" 
                   placeholder="HOW CAN WE HELP? (e.g., Private Session Inquiry)"
                 ></textarea>
               </div>
               <SkewButton type="submit" variant="primary" className="w-full">
                 <i className="fab fa-whatsapp mr-2"></i> Send via WhatsApp
               </SkewButton>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};