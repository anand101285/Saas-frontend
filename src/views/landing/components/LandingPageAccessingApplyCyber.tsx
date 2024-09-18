import React from 'react';
import Desktop from '../../../assets/img/Desktop.png';
import Responsive from '../../../assets/img/Responsive.png';
import Saas from '../../../assets/img/Saas.png';
import Server from '../../../assets/img/Server.png';
import comingSoon from '../../../assets/img/comingSoon.png';
/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPageAccessingApplyCyber = () => {
  const features = [
    {
      title: 'Responsive Web App',
      description:
        'Apply Cyber is designed for optimal viewing and interacrtion experince across all devices',
      image: Responsive
    },
    {
      title: 'Desktop Applications',
      description:
        'Apply Cyber can be intalled on desktop or laptop computers for a richer user experience',
      image: Desktop
    },
    {
      title: 'Saas Web-Portals',
      description:
        'Customer can access Apply Cyber through a web browser, Chrome, Edge, Firefox, etc. via a specific URL',
      image: Saas
    },
    {
      title: 'Server-Hosted Apps',
      description:
        'Installable on a central server. Users can access the application via client software or a web interface',
      image: Server
    }
  ];
  return (
    <div className=" rounded-2xl">
      <div className="container  flex flex-col gap-4 text-secondary p-12 pb-8">
        <h1 className="text-4xl max-md:text-2xl max-lg:text-3xl text-center font-bold leading-[60px]">
          Accessing Apply Cyber
        </h1>
        <p className="text-xl text-center font-medium">
          Apply Cyber is designed for optimal viewing and interacrtion experince across all devices
        </p>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 ">
          {features.map((item, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center ">
                <div className="flex rounded-full size-60">
                  <img
                    src={item.image}
                    className="object-center object-contain"
                    alt="featureImage"
                  />
                  {/* <p className="text-lg">{item.description}</p> */}
                </div>
                <h1 className="text-3xl font-bold text-center">{item.title}</h1>
              </div>
            );
          })}
        </div>
        <div
          className="bg-secondary rounded-xl p-8 space-y-2 mt-8"
          style={{
            backgroundImage: `url(${comingSoon})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundOrigin: 'content-box'
          }}>
          <h1 className=" text-primary text-2xl max-md:text-2xl max-lg:text-3xl font-bold">
            APIs (Application Programming Interfaces)
          </h1>
          <p className="text-xl md:w-3/4 font-bold text-tertiary">
            Clients can integrate and access Apply Cyber&apos;s functionalities via APIs for newar
            Real-Time viewing of Cyber Complienece and Maturity
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPageAccessingApplyCyber;
