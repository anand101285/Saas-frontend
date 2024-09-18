import { useState } from 'react';
/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPagePhishedDataUsage = () => {
  const [active, setActive] = useState(0);
  const services = [
    {
      title: 'Overall status Percentage',
      description: 'Implemented, Activated, Restricted, Completed, Hardened'
    },
    {
      title: 'Date of Implementation',
      description: 'Range of dates for implementation of various components'
    },
    {
      title: 'Implementation Date',
      description: 'The implementation date range of various components'
    },
    {
      title: 'Compliance Status by Year, Quarter and Month',
      description: 'Trend line showing compliance status over line for various componets'
    },
    {
      title: 'Maturity Level',
      description: 'Illustration of maturity levels (Levels 0, 1, 2, and 3)'
    },
    {
      title: 'Count of Test Results by Months',
      description: 'Number of Test Results by month'
    },
    {
      title: 'Success/Faliure Status Count by Component',
      description: 'Percentage of Success and Faliur status for each component '
    },
    {
      title: 'Components by Tree',
      description:
        'Number of components by type (for example Multi-factor Authentication, Admin restrictions and Daily Backup)'
    }
  ];
  return (
    <div className="bg-secondary p-8 rounded-3xl ">
      <div className="container flex flex-col gap-8 max-md:gap-4">
        <h1 className="text-4xl max-md:text-2xl font-bold text-center mb-6 max-md:mb-2 text-primary">
          Apply Cyber Main Dashboard
        </h1>
        <p className="text-lg max-md:text-sm leading-[20px] xl:mx-[10rem] text-center text-tertiary">
          Apply cyber dashboard helps visulize key cyber security cmplience and maturity factors
        </p>
        <div className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1">
          {services.map((service, index: number) => {
            return (
              <div
                className={`flex flex-col gap-5 p-8 max-md:p-4 cursor-pointer ${
                  active === index && 'bg-primary'
                }
              ${index === 1 && 'border-r-2 border-l-2 border-b-2 border-primary/10'} ${
                  (index === 0 || index === 2) && 'border-b-2 border-primary/10'
                }
              ${index === 4 && 'border-r-2 border-l-2  border-primary/10'}
              max-xl:border-2 border-primary/10`}
                key={index}
                onClick={() => {
                  return setActive(index);
                }}>
                {/* <div className="flex items-center justify-center max-md:scale-75">
                  {service.icon}
                </div> */}
                <h1
                  className={`text-2xl max-md:text-xl font-bold text-center text-primary ${
                    active === index && 'text-secondary'
                  }`}>
                  {service.title}
                </h1>
                <p
                  className={`text-xl max-md:text-sm text-center text-tertiary ${
                    active === index && ''
                  }`}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPagePhishedDataUsage;
