import { useLoaderData } from 'react-router-dom';
import { HiStar, HiOutlineStar } from 'react-icons/hi2';
import { BiSolidDollarCircle } from 'react-icons/bi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className="flex flex-col justify-start items-center max-w-8xl py-10 mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="flex w-full gap-16">
        <div className="w-1/2">
          <img
            src={product?.product_image}
            alt={product?.name}
            className="w-full object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-y-3 pt-10">
          <p className="uppercase text-sm font-bold text-gray-500 m-0 p-0">{product?.brand}</p>
          <p className="text-4xl font-bold">{product?.name}</p>
          <p className="flex pb-5">
            {Array(parseInt(product?.rating))
              .fill(true)
              .map((item, idx) => (
                <HiStar
                  key={idx}
                  className="text-yellow-500 text-xl"
                />
              ))}
            {Array(5 - parseInt(product?.rating))
              .fill(true)
              .map((item, idx) => (
                <HiOutlineStar
                  key={idx}
                  className="text-yellow-500 text-xl"
                />
              ))}
          </p>
          <p className="max-w-xl">{product?.description}</p>
          <p className="space-x-3">
            <span className="font-semibold">Type</span>:<span>{product?.type}</span>
          </p>
          <div className="mt-10 flex items-center justify-star gap-x-20">
            <p className="text-4xl font-semibold flex gap-x-2">
              <BiSolidDollarCircle className="text-yellow-500 text-5xl" />
              <span className="py-1">{product?.price}</span>
            </p>
            <div className="flex gap-x-4">
              <button className="text-lg font-bold border-2 border-transparent bg-green-600 text-white px-6 py-3 rounded-sm flex justify-center transition-all duration-300 hover:scale-105">
                <MdOutlineAddShoppingCart className="text-2xl mr-2" /> <span>Add To Cart</span>
              </button>
              <button className="text-lg font-bold border-2 border-gray-500  hover:border-gray-700 text-gray-500 hover:text-gray-700 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-sm flex justify-center">
                <FiEdit className="text-2xl mr-2" /> <span>Update Product</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
