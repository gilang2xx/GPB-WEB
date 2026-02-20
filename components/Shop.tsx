import React from 'react';
import { SectionHeader } from './UI/SectionHeader';
import { SkewButton } from './UI/SkewButton';

export const Shop: React.FC = () => {
  // Only Jersey Products
  const products = [
    {
      id: 1,
      name: 'GPB KIT 2026',
      price: 'IDR 100.000',
      category: 'JERSEY',
      image: '/images/jersey-1.jpg'
    },
    {
      id: 2,
      name: 'GPB AWAY KIT 2026',
      price: 'IDR 100.000',
      category: 'JERSEY',
      image: '/images/jersey-2.jpg'
    },
    {
      id: 3,
      name: 'GPB KIT AWAY 2 2026',
      price: 'IDR 100.000',
      category: 'JERSEY',
      image: '/images/jersey-3.jpg'
    }
  ];

  const handleOrder = (productName: string) => {
    // Replace with actual phone number
    const phoneNumber = '6281806333337'; 
    const message = `Hi GPB Team, I am interested in ordering the ${productName}. Is it available?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader title="GPB OFFICIAL KIT" subtitle="SEASON 2025/2026" align="center" />
        
        {/* Intro Text */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="font-satoshi text-xl text-gray-600 dark:text-gray-400">
                Exclusive launch of our new season jersey. Engineered for performance, designed for dominance. 
                <br/>Orders are processed directly via our official WhatsApp line.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-gray-50 dark:bg-neutral-900 overflow-hidden transform transition-all hover:-translate-y-2">
               
               {/* Image Container with Diagonal Cut */}
               <div className="relative h-96 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" /> {/* Placeholder */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 group-hover:grayscale-0"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gpb-blue text-white px-3 py-1 font-teko uppercase text-lg transform -skew-x-12">
                     <span className="transform skew-x-12 block">{product.category}</span>
                  </div>
                  
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <SkewButton onClick={() => handleOrder(product.name)} variant="primary">
                        <i className="fab fa-whatsapp mr-2"></i> Order Now
                     </SkewButton>
                  </div>
               </div>

               {/* Product Info */}
               <div className="p-6 border-b-4 border-transparent group-hover:border-gpb-orange transition-colors bg-white dark:bg-neutral-900 relative z-10">
                  <h3 className="text-3xl font-teko font-bold uppercase text-black dark:text-white mb-1 leading-none">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                     <span className="text-xl font-satoshi font-bold text-gray-500 dark:text-gray-400">{product.price}</span>
                  </div>
                  
                  {/* Mobile Button (Visible always on mobile since hover doesn't exist) */}
                  <div className="mt-4 md:hidden">
                    <button 
                        onClick={() => handleOrder(product.name)}
                        className="w-full bg-gpb-blue text-white font-teko uppercase text-xl py-2"
                    >
                        Buy on WhatsApp
                    </button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};