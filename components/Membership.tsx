import React from 'react';

export const Membership: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://www.instagram.com/globalprivatebadminton', color: 'hover:text-pink-600' },
    { name: 'TikTok', icon: 'fa-tiktok', url: 'https://www.tiktok.com/@globalprivatebadminton', color: 'hover:text-cyan-400' },
    { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://www.facebook.com/profile.php?id=61566181196732', color: 'hover:text-blue-600' }
  ];

  // Simulating Instagram Reels/Video thumbnails
    const socialVideos = [
  { 
    id: 1, 
    // Ganti dengan path gambar thumbnail yang sudah kamu simpan di folder public/images
    image: '/images/reels-cover-1.jpg', 
    // Ini link menuju video aslinya
    link: 'https://www.instagram.com/p/DUS3mXZE3f_/', 
    views: '205K' 
  },
  { 
    id: 2, 
    image: '/images/reels-cover-2.jpg', 
    link: 'https://www.instagram.com/reel/Cs1A1vIOfLn/', 
    views: '723K'
  },
  { 
    id: 3, 
    image: '/images/reels-cover-3.jpg', 
    link: 'https://www.instagram.com/reel/DNVdGEQyCzN/', 
    views: '1M'
  },
  { 
    id: 4, 
    image: '/images/reels-cover-4.jpg', 
    link: 'https://www.instagram.com/reel/DGiNahKy89y/', 
    views: '5.4M'
  },
  { 
    id: 5, 
    image: '/images/reels-cover-5.jpg', 
    link: 'https://www.instagram.com/reel/DE2M_pIytJ9/', 
    views: '1M'
  },
  { 
    id: 6, 
    image: '/images/reels-cover-6.jpg', 
    link: 'https://www.instagram.com/reel/CiFPl9rp46P/', 
    views: '5.4M'
  }
  ];

  return (
    <section className="py-24 relative bg-white dark:bg-black transition-colors duration-300 border-t border-gray-200 dark:border-white/10">
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-7xl md:text-9xl font-teko font-bold uppercase tracking-tighter leading-none text-black dark:text-white mb-6">
            Let's Get <span className="text-gpb-blue">Social</span>
          </h2>
          
          <p className="font-satoshi text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10">
            Join the conversation. Follow the daily grind, match highlights, and exclusive behind-the-scenes content from the GPB squad.
          </p>

          {/* Social Icons Row */}
          <div className="flex gap-8 md:gap-12">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className={`group flex flex-col items-center gap-2 text-black dark:text-white transition-colors duration-300 ${social.color}`}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-black dark:border-white/20 flex items-center justify-center transform -skew-x-12 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                  <i className={`fab ${social.icon} text-3xl md:text-4xl transform skew-x-12`}></i>
                </div>
                <span className="font-teko uppercase tracking-widest text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Video Grid (Reels Style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialVideos.map((video) => (
            <a
  key={video.id}
  // Ganti jadi pakai kurung kurawal seperti ini:
  href={video.link} 
  target="_blank"
  rel="noreferrer"
  className="group relative aspect-[9/16] overflow-hidden bg-gray-900 cursor-pointer"
>
              {/* Thumbnail */}
              <img 
                src={video.image} 
                alt="GPB Social Video" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 filter grayscale group-hover:grayscale-0"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>

              {/* Play Icon (Centered) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                 <div className="w-12 h-12 bg-gpb-blue/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <i className="fas fa-play text-white ml-1"></i>
                 </div>
              </div>

              {/* Top Right Icon */}
              <div className="absolute top-3 right-3 text-white opacity-80">
                <i className="fab fa-instagram text-xl"></i>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4">
                 <div className="flex items-center gap-2 text-white/90 text-sm font-satoshi font-bold">
                    <i className="fas fa-eye text-gpb-orange"></i>
                    <span>{video.views}</span>
                 </div>
                 <div className="h-0.5 w-0 group-hover:w-full bg-gpb-blue mt-2 transition-all duration-500 ease-out"></div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};