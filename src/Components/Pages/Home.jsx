import { PiArrowCircleDownThin, PiCirclesThreePlusLight, PiShootingStarLight } from 'react-icons/pi';
import { PiGearLight, PiSketchLogoLight, PiUserCircleGearLight, PiWalletLight } from 'react-icons/pi';
import { Link, useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonial from '../SharedComponents/Testimonial';
import Marquee from 'react-fast-marquee';
AOS.init();

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="flex flex-grow">
        <div className="text-center w-full min-h-[300px] lg:min-h-[640px] flex flex-col relative bg-black">
          <img
            src="https://i.ibb.co/1RbcsK3/hero-Banner-slim.webp"
            className="w-full h-full absolute inset-0 object-contain z-0"
          />
          <h1
            className="text-2xl lg:text-5xl leading-tight uppercase font-extrabold bg-gradient-to-r bg-clip-text  text-transparent 
            from-slate-900 via-white to-indigo-900
            animate-text pt-[5vw] pb-2 z-10"
          >
            Experience the
            <br />
            Star Quality in Every Ride
          </h1>
          <div className="flex-grow"></div>
          <div className="text-white animate-bounce-slow text-5xl lg:text-7xl w-full flex justify-center pb-5">
            <PiArrowCircleDownThin />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-w-1440 py-10 mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center py-10">
          <h2 className="text-4xl lg:text-6xl font-extralight uppercase mb-2  text-gray-800 dark:text-white">Our Brands</h2>
          <p className="text-sm lg:text-lg text-gray-700 dark:text-white w-full">Check out our brands that represent automotive excellence</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
          {data?.map((item) => (
            <Link
              key={item?._id}
              to={`/products/${item?.name.toLowerCase()}`}
            >
              <div className="flex flex-col w-full relative duration-300 hover:opacity-90 hover:scale-95">
                <img
                  src={item?.thumb}
                  alt={item?.name}
                  className="w-full block object-cover h-full"
                />
                <p className="pb-10 pt-20 bg-gradient-to-t from-gray-900 via-gray-800/75 via-gray-700/50 via-gray-600/10 to-transparent uppercase tracking-wider  text-center absolute bottom-0 text-white text-3xl font-bold w-full">
                  {item?.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center py-10 mt-16">
          <h2 className="text-4xl lg:text-6xl font-extralight uppercase mb-2  text-gray-800 dark:text-white">Why Choose us</h2>
          <p className="text-sm lg:text-lg text-gray-700 dark:text-white">Check out our brands that represent automotive excellence</p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-x-5 pb-20">
          <div className="space-y-10">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-end gap-6">
              <div className="p-8 shadow-md border border-slate-50 dark:border-slate-950 max-w-xs rounded-sm text-gray-600 dark:text-white">
                <h3 className="text-xl font-semibold mb-3">Leader of the industry</h3>
                <p className="text-sm">As a sister concern of Belresheed Group we have the strong reputation and leadership in the market.</p>
              </div>
              <div className="w-28 h-28 flex border border-slate-50 dark:border-slate-950  justify-center items-center rounded-full shadow-xl">
                <PiSketchLogoLight className="text-5xl text-gray-700 dark:text-white" />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-end gap-6">
              <div className="p-8 shadow-md border border-slate-50 dark:border-slate-950 max-w-xs rounded-sm text-gray-600 dark:text-white">
                <h3 className="text-xl font-semibold mb-3">Commitment to excellence</h3>
                <p className="text-sm">To provide highest quality vehicles which contains well maintained machine and bodies under certified renowned international standards.</p>
              </div>
              <div className="w-28 h-28 flex border border-slate-50 dark:border-slate-950 justify-center items-center rounded-full shadow-xl">
                <PiGearLight className="text-5xl text-gray-700 dark:text-white" />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-end gap-6">
              <div className="p-8 shadow-md border border-slate-50 dark:border-slate-950 max-w-xs rounded-sm text-gray-600 dark:text-white">
                <h3 className="text-xl font-semibold mb-3">Professional team</h3>
                <p className="text-sm">Our professional team always make sure that our clients are satisfied on each deal and after sales processes.</p>
              </div>
              <div className="w-28 h-28 flex border border-slate-50 dark:border-slate-950 justify-center items-center rounded-full shadow-xl">
                <PiUserCircleGearLight className="text-5xl text-gray-700 dark:text-white" />
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center"
            data-aos="slide-up"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <img
              src="https://i.ibb.co/zJk7dN4/top-view-car.png"
              alt=""
            />
          </div>
          <div className="space-y-10">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-end gap-6">
              <div className="p-8 shadow-md border border-slate-50 dark:border-slate-950 max-w-xs rounded-sm text-gray-600 dark:text-white">
                <h3 className="text-xl font-semibold mb-3">Worth of your Money</h3>
                <p className="text-sm">We always aim to provide you best service at value for money with secure and flexible payment plans.</p>
              </div>
              <div className="w-28 h-28 flex border border-slate-50 dark:border-slate-950  justify-center items-center rounded-full shadow-xl">
                <PiWalletLight className="text-5xl text-gray-700 dark:text-white" />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-end gap-6">
              <div className="p-8 shadow-md border border-slate-50 dark:border-slate-950 max-w-xs rounded-sm text-gray-600 dark:text-white">
                <h3 className="text-xl font-semibold mb-3">We are transparent</h3>
                <p className="text-sm">Assuring you to provide best of our services with proper business ethics and committed towards trust building.</p>
              </div>
              <div className="w-28 h-28 flex border border-slate-50 dark:border-slate-950 justify-center items-center rounded-full shadow-xl">
                <PiShootingStarLight className="text-5xl text-gray-700 dark:text-white" />
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-end gap-6">
              <div className="p-8 shadow-md border border-slate-50 dark:border-slate-950 max-w-xs rounded-sm text-gray-600 dark:text-white">
                <h3 className="text-xl font-semibold mb-3">Easy Customization</h3>
                <p className="text-sm">Our professional team always make sure that our clients are satisfied on each deal and after sales processes.</p>
              </div>
              <div className="w-28 h-28 flex border border-slate-50 dark:border-slate-950 justify-center items-center rounded-full shadow-xl">
                <PiCirclesThreePlusLight className="text-5xl text-gray-700 dark:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 dark:bg-indigo-200 py-20 w-full">
        <div className="text-center py-10 ">
          <h2 className="text-4xl lg:text-6xl font-extralight uppercase mb-2  text-white dark:text-gray-900">Social Proof</h2>
          <p className="text-sm lg:text-lg text-white dark:text-gray-900">We&#39;re Proud of What Our Customers Have to Say</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonial />
        </div>
      </div>
      <div className="bg-gray-900 py-20 w-full">
        <div className="text-center py-10 mb-5">
          <h2 className="text-4xl lg:text-6xl font-extralight uppercase mb-2  text-white">Featured on</h2>
          <p className="text-sm lg:text-lg text-white">We are proud to be featured on these platforms</p>
        </div>
        <Marquee autoFill="true">
          <img
            src="https://i.ibb.co/pXsfYtW/1.png"
            alt=""
            className="px-10"
          />
          <img
            src="https://i.ibb.co/pL1pPRH/2.png"
            alt=""
            className="px-10"
          />
          <img
            src="https://i.ibb.co/cbRwS4x/3.png"
            alt=""
            className="px-10"
          />
          <img
            src="https://i.ibb.co/DR2RfJT/4.png"
            alt=""
            className="px-10"
          />
          <img
            src="https://i.ibb.co/xJgB34P/5.png"
            alt=""
            className="px-10"
          />
          <img
            src="https://i.ibb.co/z6q5Sq7/6.png"
            alt=""
            className="px-10"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
