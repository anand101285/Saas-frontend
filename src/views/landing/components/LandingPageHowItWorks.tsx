import { motion } from 'framer-motion';
import { useState } from 'react';
import StartArrow from '../../../assets/img/startArrrow.png';
/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPageHowItWorks = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);
  const whyChooseUs = [
    {
      title: 'Temporary',
      description: 'Organization use Adhoc and Temporary Control',
      color: '#FF754C'
    },
    {
      title: 'Develop',
      description: 'Organizations Develop Cyber Capabilities and Systems',
      color: '#065B69'
    },
    {
      title: 'Manage',
      description: 'Businesses manage their systems and cyber security capabilities',
      color: '#2F2F2F'
    },
    {
      title: 'Prepare',
      description: 'Orgabizations Start to be pro-active and prepare for the future',
      color: '#2F2F2F'
    }
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-12 container">
      <h1 className="text-4xl max-md:text-2xl font-bold text-center text-secondary">
        Cyber Security Maturity Levels
      </h1>
      <p className="text-lg max-md:text-sm leading-[30px] mx-20 text-center text-secondary">
        Maturity Levels are designed for simple understanding
      </p>
      <div className="flex flex-wrap items-center justify-center my-4 gap-8">
        {whyChooseUs.map((item, index) => {
          return (
            <div className="flex items-center rounded-xl gap-8" key={index}>
              {/* <div
                    className={`w-[72px] h-[72px] max-md:w-[50px] max-md:h-[50px] flex items-center justify-center rounded-xl bg-primary`}>
                    <h1 className="text-secondary text-3xl">{index + 1}</h1>
                  </div> */}
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: index === 0 ? -100 : index === 3 ? 100 : '',
                  y: index === 1 ? -50 : index === 2 ? 50 : ''
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  y: 0,
                  transition: {
                    duration: 2 // Animation duration
                  }
                }}>
                <img src={StartArrow} alt="curvedArrow" className={'w-20'} />
              </motion.div>

              <h1
                className="text-4xl max-md:text-lg font-bold text-primary shadow-secondary cursor-pointer hover:scale-110 transition-transform ease-in "
                onClick={() => {
                  setShow(true);
                  setActive(index);
                }}>
                {item.title}
              </h1>
            </div>
          );
        })}
        {show && (
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: active === 0 ? -100 : active === 3 ? 100 : '',
              y: active === 1 ? -50 : active === 2 ? 50 : ''
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              y: 0,
              transition: {
                duration: 2 // Animation duration
              }
            }}>
            <p className="text-secondary text-xl text-center mt-4">
              {whyChooseUs[active].description} -{' '}
              <span className="text-primary">{whyChooseUs[active].title}</span>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LandingPageHowItWorks;
