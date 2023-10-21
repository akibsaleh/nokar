import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import { PiArrowCircleLeftLight, PiArrowCircleRightLight } from 'react-icons/pi';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 75, modifier: 2.5 }}
        modules={[EffectCoverflow, Navigation]}
        className={'max-w-sm lg:max-w-2xl w-full !overflow-visible'}
        navigation={{
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="max-w-sm lg:max-w-2xl bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 p-10 pt-24 rounded-sm relative flex flex-col items-center">
            <BiSolidQuoteAltLeft className="text-7xl text-gray-600 absolute top-3 left-3" />
            <p className="text-center text-gray-400 dark:text-gray-900 leading-7">
              I was really impressed with the customer service at Nokar. My salesperson was very knowledgeable and helpful, and they made sure to answer all of my questions. I also felt like I got a
              great deal on my car. I would definitely recommend Nokar to anyone looking for a new car.
            </p>
            <div className="flex gap-x-3 justify-center items-center mt-8 border border-gray-800 rounded-sm p-5 w-fit">
              <img
                src="https://i.imgur.com/gsMXmNpb.png"
                alt=""
                className="rounded-full w-16 h-16 "
              />
              <div className="text-left text-gray-400 dark:text-gray-900 ">
                <p>Sarah Jones</p>
                <p>Software Engineer</p>
              </div>
              <BiSolidQuoteAltRight className="text-7xl text-gray-600 absolute bottom-3 right-3 rotate-x-180" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-sm lg:max-w-2xl bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 p-10 pt-24 rounded-sm relative flex flex-col items-center">
            <BiSolidQuoteAltLeft className="text-7xl text-gray-600 absolute top-3 left-3" />
            <p className="text-center text-gray-400 dark:text-gray-900 leading-7">
              I was really impressed with the customer service at Nokar. My salesperson was very knowledgeable and helpful, and they made sure to answer all of my questions. I also felt like I got a
              great deal on my car. I would definitely recommend Nokar to anyone looking for a new car.
            </p>
            <div className="flex gap-x-3 justify-center items-center mt-8 border border-gray-800 rounded-sm p-5 w-fit">
              <img
                src="https://i.imgur.com/gsMXmNpb.png"
                alt=""
                className="rounded-full w-16 h-16 "
              />
              <div className="text-left text-gray-400 dark:text-gray-900 ">
                <p>Sarah Jones</p>
                <p>Software Engineer</p>
              </div>
              <BiSolidQuoteAltRight className="text-7xl text-gray-600 absolute bottom-3 right-3 rotate-x-180" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-sm lg:max-w-2xl bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 p-10 pt-24 rounded-sm relative flex flex-col items-center">
            <BiSolidQuoteAltLeft className="text-7xl text-gray-600 absolute top-3 left-3" />
            <p className="text-center text-gray-400 dark:text-gray-900 leading-7">
              I was really impressed with the customer service at Nokar. My salesperson was very knowledgeable and helpful, and they made sure to answer all of my questions. I also felt like I got a
              great deal on my car. I would definitely recommend Nokar to anyone looking for a new car.
            </p>
            <div className="flex gap-x-3 justify-center items-center mt-8 border border-gray-800 rounded-sm p-5 w-fit">
              <img
                src="https://i.imgur.com/gsMXmNpb.png"
                alt=""
                className="rounded-full w-16 h-16 "
              />
              <div className="text-left text-gray-400 dark:text-gray-900 ">
                <p>Sarah Jones</p>
                <p>Software Engineer</p>
              </div>
              <BiSolidQuoteAltRight className="text-7xl text-gray-600 absolute bottom-3 right-3 rotate-x-180" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-sm lg:max-w-2xl bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 p-10 pt-24 rounded-sm relative flex flex-col items-center">
            <BiSolidQuoteAltLeft className="text-7xl text-gray-600 absolute top-3 left-3" />
            <p className="text-center text-gray-400 dark:text-gray-900 leading-7">
              I was really impressed with the customer service at Nokar. My salesperson was very knowledgeable and helpful, and they made sure to answer all of my questions. I also felt like I got a
              great deal on my car. I would definitely recommend Nokar to anyone looking for a new car.
            </p>
            <div className="flex gap-x-3 justify-center items-center mt-8 border border-gray-800 rounded-sm p-5 w-fit">
              <img
                src="https://i.imgur.com/gsMXmNpb.png"
                alt=""
                className="rounded-full w-16 h-16 "
              />
              <div className="text-left text-gray-400 dark:text-gray-900 ">
                <p>Sarah Jones</p>
                <p>Software Engineer</p>
              </div>
              <BiSolidQuoteAltRight className="text-7xl text-gray-600 absolute bottom-3 right-3 rotate-x-180" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-sm lg:max-w-2xl bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 p-10 pt-24 rounded-sm relative flex flex-col items-center">
            <BiSolidQuoteAltLeft className="text-7xl text-gray-600 absolute top-3 left-3" />
            <p className="text-center text-gray-400 dark:text-gray-900 leading-7">
              I was really impressed with the customer service at Nokar. My salesperson was very knowledgeable and helpful, and they made sure to answer all of my questions. I also felt like I got a
              great deal on my car. I would definitely recommend Nokar to anyone looking for a new car.
            </p>
            <div className="flex gap-x-3 justify-center items-center mt-8 border border-gray-800 rounded-sm p-5 w-fit">
              <img
                src="https://i.imgur.com/gsMXmNpb.png"
                alt=""
                className="rounded-full w-16 h-16 "
              />
              <div className="text-left text-gray-400 dark:text-gray-900 ">
                <p>Sarah Jones</p>
                <p>Software Engineer</p>
              </div>
              <BiSolidQuoteAltRight className="text-7xl text-gray-600 absolute bottom-3 right-3 rotate-x-180" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-sm lg:max-w-2xl bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 p-10 pt-24 rounded-sm relative flex flex-col items-center">
            <BiSolidQuoteAltLeft className="text-7xl text-gray-600 absolute top-3 left-3" />
            <p className="text-center text-gray-400 dark:text-gray-900 leading-7">
              I was really impressed with the customer service at Nokar. My salesperson was very knowledgeable and helpful, and they made sure to answer all of my questions. I also felt like I got a
              great deal on my car. I would definitely recommend Nokar to anyone looking for a new car.
            </p>
            <div className="flex gap-x-3 justify-center items-center mt-8 border border-gray-800 rounded-sm p-5 w-fit">
              <img
                src="https://i.imgur.com/gsMXmNpb.png"
                alt=""
                className="rounded-full w-16 h-16 "
              />
              <div className="text-left text-gray-400 dark:text-gray-900 ">
                <p>Sarah Jones</p>
                <p>Software Engineer</p>
              </div>
              <BiSolidQuoteAltRight className="text-7xl text-gray-600 absolute bottom-3 right-3 rotate-x-180" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-sm lg:max-w-2xl bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 p-10 pt-24 rounded-sm relative flex flex-col items-center">
            <BiSolidQuoteAltLeft className="text-7xl text-gray-600 absolute top-3 left-3" />
            <p className="text-center text-gray-400 dark:text-gray-900 leading-7">
              I was really impressed with the customer service at Nokar. My salesperson was very knowledgeable and helpful, and they made sure to answer all of my questions. I also felt like I got a
              great deal on my car. I would definitely recommend Nokar to anyone looking for a new car.
            </p>
            <div className="flex gap-x-3 justify-center items-center mt-8 border border-gray-800 rounded-sm p-5 w-fit">
              <img
                src="https://i.imgur.com/gsMXmNpb.png"
                alt=""
                className="rounded-full w-16 h-16 "
              />
              <div className="text-left text-gray-400 dark:text-gray-900 ">
                <p>Sarah Jones</p>
                <p>Software Engineer</p>
              </div>
              <BiSolidQuoteAltRight className="text-7xl text-gray-600 absolute bottom-3 right-3 rotate-x-180" />
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controler flex justify-center gap-x-5 mt-10">
          <div className="swiper-btn-prev">
            <PiArrowCircleLeftLight className="text-5xl text-gray-400 dark:text-gray-900" />
          </div>
          <div className="swiper-btn-next">
            <PiArrowCircleRightLight className="text-5xl text-gray-400 dark:text-gray-900" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
};

export default Testimonial;
