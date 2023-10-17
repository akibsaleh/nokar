import { PiArrowCircleDownThin } from 'react-icons/pi';

const Home = () => {
  return (
    <div className="flex flex-grow">
      <div
        className="text-center w-full min-h-[90vh] bg-cover bg-no-repeat bg-center flex flex-col"
        style={{ backgroundImage: "url('https://i.ibb.co/d2ncGFH/hero-Banner.webp')" }}
      >
        <h1
          className="text-5xl leading-tight uppercase font-extrabold bg-gradient-to-r bg-clip-text  text-transparent 
            from-slate-900 via-white to-indigo-900
            animate-text pt-[5vw] pb-2"
        >
          Experience the
          <br />
          Star Quality in Every Ride
        </h1>
        <div className="flex-grow"></div>
        <div className="text-white animate-bounce-slow text-7xl w-full flex justify-center pb-5">
          <PiArrowCircleDownThin />
        </div>
      </div>
    </div>
  );
};

export default Home;
