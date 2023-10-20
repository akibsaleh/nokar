import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiArrowRightSFill } from 'react-icons/ri';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

/* eslint-disable react/prop-types */
const BrandProducts = () => {
  const [brand, setBrand] = useState(null);
  const { brand_name } = useParams();
  const products = useLoaderData();
  console.log(products);

  useEffect(() => {
    fetch(`https://nokar-shop-server.vercel.app/brands/${brand_name}`)
      .then((res) => res.json())
      .then((data) => setBrand(data[0]));
  }, [brand_name]);

  return (
    <div className="flex flex-col justify-center items-center max-w-8xl py-10 mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-h-[560px] rounded-md shadow-lg overflow-hidden">
        {brand ? (
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              color: '#ffffff',
              size: '20px',
            }}
            autoplay={{ delay: 3500 }}
          >
            <SwiperSlide>
              <img
                src={brand.banner1}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={brand.banner2}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={brand.banner3}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        ) : (
          <div></div>
        )}
      </div>
      <div className="text-center py-10 mt-16 mb-6">
        <h2 className="text-6xl font-extralight uppercase mb-2  text-gray-800">{brand_name} Cars</h2>
        <p className="text-lg  text-gray-700">Check out our car collection and grab one today</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-full max-h-[560px] rounded-sm shadow-lg overflow-hidden relative flex justify-center"
          >
            <img
              src={product?.product_image}
              className="w-full h-full object-cover"
            />
            <div className="px-8 py-6 bg-gray-950/75 absolute w-[90%] bottom-5 rounded-sm flex justify-between items-center">
              <p className="text-white text-xl font-semibold">{product?.name}</p>
              <Link to={`/product/${product._id}`}>
                <button className="px-4 py-3 bg-gray-600 text-white flex justify-center items-center rounded-sm">
                  Details <RiArrowRightSFill />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
