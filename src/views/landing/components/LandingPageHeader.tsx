import { ReactTyped } from 'react-typed';
import HeroImage from '../../../assets/img/cybersecurity3.png';
import { Button } from 'antd';
import { useState } from 'react';
import { motion } from 'framer-motion';
/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPageHeader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    // <div>
    //   <div
    //     className="relative blur-[2px]"
    //     style={{
    //       backgroundImage: `url(${HeroImage})`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //       width: '100%',
    //       height: '100vh',
    //       backgroundAttachment: 'fixed'
    //     }}></div>
    //   <div className="p-8 absolute inset-0 flex items-center justify-center">
    //     <div className="container items-center md:gap-8 p-2">
    //       <div className="flex flex-col justify-center items-center gap-6">
    //         <div className="flex flex-col gap-0 font-semibold text-[70px] leading-[90px] text-center max-md:text-[50px] max-md:leading-[65px]  max-sm:text-[40px] max-sm:leading-[55px] text-tertiary">
    //           <span className="text-primary">
    //             <span className="text-tertiary text-[100px] font-serif max-md:text-[70px] max-sm:text-[50px]">
    //               Y
    //             </span>
    //             our Cyber Security
    //           </span>{' '}
    //           <span className="text-primary">Compliance</span>
    //           <span className="text-tertiary font-serif">&</span>
    //           <span className="text-primary">Maturity Tool</span>
    //         </div>
    //         <p className="text-[36px] text-center max-md:text-[30px] max-sm:text-[20px] text-white">
    //           One Stop Application for{' '}
    //           <span className="text-primary">Cyber Security Compliance </span> and{' '}
    //           <span className="text-primary">Maturity Levels</span>
    //           <ReactTyped strings={['..!', '.!!']} loop typeSpeed={200} />
    //         </p>
    //         <Button type="primary" size="large" className="bg-primary text-secondary rounded-lg">
    //           Get Started
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-secondary p-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-4 container">
        <div className="space-y-4">
          <div className="flex flex-col gap-0 font-semibold text-[65px] leading-[90px] max-md:text-[50px] max-md:leading-[65px]  max-sm:text-[40px] max-sm:leading-[55px] text-tertiary">
            <motion.div
              className="card"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: isInView ? -100 : 100
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 2 // Animation duration
                }
              }}>
              <span className="text-primary">
                <span className="text-tertiary text-[80px] font-serif max-md:text-[70px] max-sm:text-[50px]">
                  Y
                </span>
                our Cyber Security
              </span>{' '}
            </motion.div>
            <span className="text-primary">Compliance</span>

            <motion.div
              className="card"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: isInView ? 100 : -100
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 2 // Animation duration
                }
              }}>
              <span>
                <span className="text-tertiary font-serif">&</span>{' '}
                <span className="text-primary">Maturity Tool</span>
              </span>
            </motion.div>
          </div>
          <motion.div
            className="card"
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: isInView ? -20 : 20
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 2 // Animation duration
              }
            }}>
            <p className="text-[36px] max-md:text-[30px] max-sm:text-[20px] text-white">
              One Stop Application for{' '}
              <span className="text-primary">Cyber Security Compliance </span> &{' '}
              <span className="text-primary">Maturity Levels!..</span>
              <ReactTyped strings={['.', '']} loop typeSpeed={100} />
            </p>
          </motion.div>
          <Button type="primary" size="large" className="bg-primary text-secondary rounded-lg">
            Get Started
          </Button>{' '}
        </div>
        <div>
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: isInView ? -100 : 100
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 2 // Animation duration
              }
            }}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onViewportEnter={() => {
              setIsInView(true);
            }}>
            <img
              className="animate-pulse-3 scale-75"
              src={HeroImage}
              alt="HeroImage"
              onLoad={() => {
                setIsLoaded(true);
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHeader;
