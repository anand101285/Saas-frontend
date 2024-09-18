import { useState } from 'react';
/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPageActionsAgainstPhishing = () => {
  const points = [
    {
      name: 'Offensive Security',
      point: [
        'Penetration Testing',
        'Social Engineering',
        'Application Security Testing',
        'Real Teaming',
        'System Hardening'
      ]
    },
    {
      name: 'Integrated Security',
      point: [
        'GRC',
        'Disaster Recovery Planning',
        'Incident Response Planning',
        'Security Awareness Training',
        'Vunderability Managemennt'
      ]
    },
    {
      name: 'Defensive Security',
      point: [
        'Firewall Implementation',
        'Intrusion Detection',
        'Encryption',
        'Antivirus/Antimalware',
        'Access Control',
        'Data Loss Prevention'
      ]
    }
  ];
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl border-b-2 border-primary max-lg:text-3xl max-md:text-2xl max-lg:text-center font-bold leading-[60px] text-secondary">
          Cyber Security Services Catalog
        </h1>
      </div>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 container my-8 gap-12 p-4">
        <div className="flex flex-col gap-8">
          {points.map((point, index) => {
            return (
              <div
                key={index}
                className={` p-6 max-md:p-4 rounded-md cursor-pointer ${
                  activeIndex === index ? 'bg-tertiary mr-10 shadow-xl' : 'bg-secondary ml-10'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                }}>
                <div className="flex gap-4">
                  <div className="min-w-14 min-h-14 text-3xl rounded-full bg-secondary text-primary flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex items-center">
                    <h1
                      className={`text-lg max-md:text-sm font-semibold ${
                        activeIndex === index ? 'text-secondary' : 'text-tertiary'
                      }`}>
                      {point.name}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ul className="mt-4">
          {points[activeIndex].point.map((item, index) => {
            return (
              <li key={index} className={`text-lg max-md:text-sm font-semibold`}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LandingPageActionsAgainstPhishing;
