import { useState } from 'react';
// import PhishingMan from '../assets/EmailPhishing4.png';
import { Modal } from 'antd';
import { motion } from 'framer-motion';
import appHardening from '../../../assets/img/appHardening.png';
import applicationWhitelisting from '../../../assets/img/applicationWhitelisting.png';
import backupManagement from '../../../assets/img/backupManagement.png';
import multifactorAuthentication from '../../../assets/img/multifactorAuthentication.png';
import officeMacroManagement from '../../../assets/img/officeMacroManagement.png';
import patchApplication from '../../../assets/img/patchApplication.png';
import patchingOperatingSystem from '../../../assets/img/patchingOperatingSystem.png';
import privilegedAccess from '../../../assets/img/privilegedAccess.png';

/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPageAttackingTypes = () => {
  const preVettedTalent = [
    {
      title: 'Patch Application',
      description: 'Patch application updates software to fix bugs and improve security.',
      image: patchApplication
    },
    {
      title: 'Privileged Access',
      description:
        'Privileged access grants elevated permissions to users for critical system functions, requiring stricter security controls.',
      image: privilegedAccess
    },
    {
      title: 'Application Hardening',
      description: 'Application hardening strengthens software by reducing vulnerabilities.',
      image: appHardening
    },
    {
      title: 'Backup Management',
      description:
        'Backup management ensures data is regularly saved and securely stored for recovery in case of loss or failure.',
      image: backupManagement
    },

    {
      title: 'Multi-Factor Authentication',
      description:
        'Multi-Factor Authentication (MFA) adds extra security by requiring multiple forms of verification, like a password and a code, to access an account.',
      image: multifactorAuthentication
    },
    {
      title: 'Application Whitelisting',
      description:
        'Application whitelisting allows only approved software to run, blocking unauthorized applications.',
      image: applicationWhitelisting
    },

    {
      title: 'Patching Operating System',
      description:
        'Patching an operating system updates it to fix security flaws and improve performance.',
      image: patchingOperatingSystem
    },
    {
      title: 'Office Macro Management',
      description: 'Office Macro Management controls macros in documents to reduce security risks.',
      image: officeMacroManagement
    }
  ];
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-secondary rounded-3xl">
      <Modal
        centered
        maskClosable
        destroyOnClose
        title={<div className="text-center text-lg">{preVettedTalent[activeIndex]?.title}</div>}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}>
        <div>
          <p className="text-xl leading-[25px] text-secondary text-center">
            {preVettedTalent[activeIndex]?.description}
          </p>
        </div>
      </Modal>
      <div className="container py-10">
        <h1 className=" mb-2 text-4xl max-md:text-2xl max-lg:text-3xl text-center font-bold leading-[60px] text-primary">
          Apply Cyber - Essential Eight
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center justify-center md:gap-12 gap-4">
          {preVettedTalent.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: index % 2 === 0 ? -100 + 20 * index : 100 - 20 * index
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  y: 0,
                  transition: {
                    duration: 2 // Animation duration
                  }
                }}>
                <div
                  className={`flex gap-4 my-4 p-4 max-md:p-2 rounded-xl shadow-sm w-full cursor-pointer`}
                  onClick={() => {
                    setIsModalOpen(true);
                    setActiveIndex(index);
                  }}>
                  <div>
                    <div className="flex items-center justify-center bg-primary rounded-full p-4 size-20 max-md:size-20">
                      <img src={item.image} className="" />
                    </div>
                  </div>
                  <div className={`flex flex-col w-full text-primary`}>
                    <div className="flex justify-between flex-nowrap items-center w-full ">
                      <h1
                        className={`text-2xl font-semibold w-full max-md:text-sm text-primary ${
                          index % 2 === 0 ? 'text-left' : 'text-left'
                        }`}>
                        {item.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPageAttackingTypes;
