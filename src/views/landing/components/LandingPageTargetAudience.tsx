import React from 'react';
import Auditor from '../../../assets/img/Auditor.png';
import Business from '../../../assets/img/Business.png';
import Government from '../../../assets/img/Government.png';
import ServiceProvider from '../../../assets/img/ServiceProvider.png';
import { motion } from 'framer-motion';
/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPageTargetAudience = () => {
  const targetAudience = [
    {
      title: 'Bussiness',
      description: 'Empowers Businesses and Government agencies',
      image: Business
    },
    {
      title: 'Government',
      description: 'Simplifies reporting for Government agencies',
      image: Government
    },
    {
      title: 'Service Providers',
      description: 'Share Assesment information service providers',
      image: ServiceProvider
    },
    {
      title: 'Auditors',
      description: 'Seemless share your data with auditors',
      image: Auditor
    }
  ];
  return (
    <div className="container p-8">
      <h1 className="text-4xl max-md:text-2xl max-lg:text-3xl text-center font-bold mb-8">
        Target Audience
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 items-center justify-center">
        {targetAudience.map((item, index) => {
          return (
            <div className="flex items-center justify-center" key={index}>
              <div className="max-lg:w-72 h-80 flex flex-col ring-1 ring-secondary rounded-xl bg-primary hover:shadow-2xl">
                <div className="h-40 bg-tertiary w-full flex items-center justify-center rounded-t-xl">
                  <img src={item.image} className="h-40 p-3" alt="targetAudience" />
                </div>
                <div className="flex flex-col gap-2 p-4 text-secondary">
                  <motion.div
                    initial={{
                      opacity: 0,
                      // if odd index card,slide from right instead of left
                      x: -20
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0, // Slide in to its original position
                      transition: {
                        duration: 1 // Animation duration
                      }
                    }}>
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                  </motion.div>
                  <p className="text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPageTargetAudience;
