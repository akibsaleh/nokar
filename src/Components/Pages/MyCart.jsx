import { useState } from 'react';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import toast from 'react-hot-toast';
import AnotherLoader from '../CustomLoader/AnotherLoader';

const MyCart = () => {
  const [uid, setuid] = useState(null);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setuid(user.uid);
        if (uid) {
          fetch(`https://nokar-shop-server.vercel.app/cart/${uid}`)
            .then((res) => res.json())
            .then((data) => {
              setCart(data);
            });
        }
      }
    });
  }, [cart, uid]);

  const handleDelete = (id) => {
    fetch(`https://nokar-shop-server.vercel.app/cart/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remainingCartItem = cart.filter((item) => item._id !== id);
          setCart(remainingCartItem);
          toast.success('Product Deleted from cart Successfully');
        }
      });
  };

  if (cart) {
    return (
      <div className="flex flex-col justify-start items-center max-w-1440 min-h-[80vh] w-full py-10 mx-auto px-4 sm:px-6 lg:px-8 gap-y-5">
        <div className="text-center py-10 mb-5">
          <h2 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100">My Cart</h2>
          <p className="text-lg text-gray-700 dark:text-gray-100">Here is the list of all the products you have added to cart</p>
        </div>
        {cart.length > 0 ? (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col lg:flex-row justify-between items-center w-full max-w-3xl border-gray-200 border px-5 py-2 rounded-sm gap-y-5"
            >
              <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                <img
                  src={product?.product_image}
                  alt={product?.name}
                  className="w-16 h-16 object-cover rounded-full drop-shadow-md"
                />
                <p className="text-xl font-semibold">{product?.name}</p>
              </div>
              <div className="flex items-center gap-x-5">
                <p className="text-xl font-bold">${product?.price}</p>
                <button
                  onClick={() => {
                    handleDelete(product._id);
                  }}
                  className="p-3 text-2xl border-red-500 bg-red-500 rounded-sm text-white hover:scale-110 transition-all duration-300"
                >
                  <RiDeleteBin2Fill />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="font-bold text-2xl">Your Cart is Empty</p>
        )}
      </div>
    );
  } else {
    return <AnotherLoader></AnotherLoader>;
  }
};

export default MyCart;
