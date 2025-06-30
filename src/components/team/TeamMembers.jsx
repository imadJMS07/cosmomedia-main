import React from 'react';
import { motion } from 'framer-motion';

const TeamMember = ({ image, name, role, socials }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative"
  >
    {/* Image Container */}
    <div className="relative overflow-hidden aspect-[3/4]">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
    </div>

    {/* Social Links */}
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-[#00F5CC] flex items-center justify-center hover:scale-110 transition-transform"
        >
          {social.name === 'linkedin' && (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          )}
          {social.name === 'instagram' && (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black">
              <path d="M16.98 0a6.9 6.9 0 015.08 1.98A6.94 6.94 0 0124 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0116.94 24H7.06a7.06 7.06 0 01-5.03-1.89A6.96 6.96 0 010 17.04V7.02C0 4.94.68 3.15 1.98 1.89A7.06 7.06 0 017.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 00-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 003.53 1.25h9.88a5 5 0 003.53-1.25 4.73 4.73 0 001.4-3.54V7.02a5 5 0 00-1.3-3.49 4.82 4.82 0 00-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 01-12.4 0 6.2 6.2 0 016.2-6.2zm0 2.22a3.99 3.99 0 00-3.97 3.97A3.99 3.99 0 0012 15.92a3.99 3.99 0 003.97-3.97A3.99 3.99 0 0012 7.98z"/>
            </svg>
          )}
          {social.name === 'discord' && (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          )}
        </a>
      ))}
    </div>

    {/* Info */}
    <div className="mt-4">
      <h3 className="text-lg font-medium text-white">{name}</h3>
      <p className="text-sm text-[#00F5CC]">{role}</p>
    </div>
  </motion.div>
);

const TeamMembers = () => {
  const team = [
    {
      name: 'Najib EL Mechmachi',
      role: 'General Manager',
      image: '/images/team/najib.webp',
      socials: [
        { name: 'discord', url: 'https://discordapp.com/users/Najib EL Mechmachi' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/najib-el-mechmachi-3569518b/' },
        { name: 'instagram', url: 'https://instagram.com/najib.elmechmachi' }
      ]
    },
    {
      name: 'Anas Fanani',
      role: 'Project Manager',
      image: '/images/team/me.jpg',
      socials: [
        { name: 'discord', url: 'https://discordapp.com/users/_orin_theonly' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/anas-fanani/' },
        { name: 'instagram', url: 'https://www.instagram.com/_orin_theonly/' }
      ]
    },
    {
      name: 'Youssef Salih',
      role: 'Lead Developer',
      image: '/images/team/youssef2.png',
      socials: [
        { name: 'discord', url: 'https://discordapp.com/users/YOUSSEF-SH' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/youssef-salih-16a357204/' },
        { name: 'instagram', url: 'https://www.instagram.com/_youssefsalih/' }
      ]
    },
    {
      name: 'Imad Jamoussi',
      role: 'Marketing Manager',
      image: '/images/team/imad.webp',
      socials: [
        { name: 'discord', url: 'https://discordapp.com/users/IMAD_JMS' },
        { name: 'linkedin', url: 'https://www.linkedin.com/in/imad-jamoussi-0b16b631b/' },
        { name: 'instagram', url: 'https://instagram.com/imad_jamoussi' }
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-wider uppercase"
            style={{ color: '#00F5CC' }}
          >
            TEAM MEMBERS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl font-bold text-white"
          >
            Experience Team Member
          </motion.h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamMember
              key={member.name}
              {...member}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;