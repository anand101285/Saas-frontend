import Dots2 from 'assets/img/Dots2';
import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingPageStats = () => {
  const stats = [
    {
      title: 'Phished Till Date',
      count: 100,
      postFix: '+ M'
    },
    {
      title: 'Billions Lost Annually',
      count: 40,
      preFix: '$'
    },
    {
      title: 'Ways to Phish',
      count: 5,
      postFix: '+'
    }
  ];

  return (
    <div className="bg-primary py-16 text-tertiary relative">
      <div className="text-secondary flex max-lg:flex-col max-lg:justify-center justify-between items-center w-full gap-20 max-lg:gap-10 container">
        <p className="text-3xl max-md:text-xl leading-[40px] w-1/2 max-lg:w-full font-semibold container max-lg:text-center">
          Phishing attacks accounted for 36% of all data breaches in 2021, with millions of
          individuals targeted globally each year.
        </p>
        <div className="h-40 w-[0.5px] bg-secondary max-lg:hidden"></div>
        <div className=" w-1/2 max-lg:w-full container space-y-4">
          <p className="text-lg max-md:text-sm leading-[25px] max-lg:text-center">
            We educate users about phishing through interactive modules, real-world examples, and
            actionable tips. It helps identify phishing attempts, understand risks, and apply best
            practices, enhancing awareness and cybersecurity skills to protect against these common
            threats.
          </p>
          <div className="flex justify-between max-lg:flex-col ">
            {stats.map((stat, index) => {
              return (
                <div key={index} className="flex flex-col items-center gap-2 mt-4">
                  <p className="text-5xl max-md:text-3xl font-semibold text-secondary flex items-center justify-center">
                    {stat.preFix ? (
                      <span className="text-5xl  max-md:text-3xl font-semibold text-secondary">
                        {stat.preFix}
                      </span>
                    ) : (
                      ''
                    )}
                    <Counter from={0} to={stat.count} />
                    {stat.postFix ? (
                      <span className="text-5xl  max-md:text-3xl font-semibold text-secondary">
                        {stat.postFix}
                      </span>
                    ) : (
                      ''
                    )}
                  </p>
                  <p className="text-lg  max-md:text-sm">{stat.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Dots2 className="absolute bottom-0 left-0 p-4" />
        <Dots2 className="absolute top-0 right-0 p-4" />
      </div>
    </div>
  );
};

export default LandingPageStats;

/**
 * A simple counter component that takes a `from` and `to` number and
 * animates the count from `from` to `to` with a duration of 1 second.
 *
 * @param {{ from: number, to: number }} props
 * @returns {ReactElement}
 */
const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef() as any;

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 5,
      onUpdate: function (value) {
        node.textContent = value.toFixed(0);
      }
    });

    return () => {
      controls.stop();
    };
  }, [from, to]);

  return <p ref={nodeRef} />;
};
