import { useLoaderData } from 'react-router-dom';
import { HiStar, HiOutlineStar } from 'react-icons/hi2';
import { BiSolidDollarCircle } from 'react-icons/bi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const ProductDetails = () => {
  const product = useLoaderData();
  const { loggedUser } = useContext(AuthContext);

  const handleAddToCart = (product, uid) => {
    const { name, price, product_image } = product;
    console.log('Product added to cart', { uid, name, price, product_image });

    fetch('https://nokar-shop-server.vercel.app/cart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ uid, name, price, product_image }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) toast.success('Product Added to car Successfully');
      });
  };

  return (
    <div className="flex flex-col justify-start items-center max-w-1440 py-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row w-full gap-16">
        <div className="w-full lg:w-1/2">
          <img
            src={product?.product_image}
            alt={product?.name}
            className="w-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-y-3 justify-center">
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
          <div className="mt-10 flex flex-col lg:flex-row items-center justify-star gap-x-10 gap-y-5">
            <p className="text-4xl font-semibold flex gap-x-2">
              <BiSolidDollarCircle className="text-yellow-500 text-5xl" />
              <span className="py-1">{product?.price}</span>
            </p>
            <div className="flex gap-x-4">
              <button
                onClick={() => {
                  handleAddToCart(product, loggedUser?.uid);
                }}
                className="text-lg font-bold border-2 border-transparent bg-green-600 text-white px-6 py-3 rounded-sm flex justify-center transition-all duration-300 hover:scale-105"
              >
                <MdOutlineAddShoppingCart className="text-2xl mr-2" /> <span>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
