import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ProductCard from '../ProductCard.jsx/ProductCard';

/* eslint-disable react/prop-types */
const BrandProducts = () => {
  const [brand, setBrand] = useState(null);
  const { brand_name } = useParams();
  const products = useLoaderData();

  useEffect(() => {
    fetch(`https://nokar-shop-server.vercel.app/brands/${brand_name}`)
      .then((res) => res.json())
      .then((data) => setBrand(data[0]));
  }, [brand_name]);

  return (
    <div className="flex flex-col justify-center items-center max-w-1440 py-10 mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full rounded-md shadow-lg overflow-hidden">
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
      <div className="grid grid-cols-2 gap-x-6 gap-y-14">
        {products.map((product) => (
          <ProductCard
            key={product?._id}
            product={product}
          ></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
