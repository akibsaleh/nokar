import { PropTypes } from 'prop-types';
import { RiArrowRightSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { HiStar } from 'react-icons/hi2';

const ProductCard = ({ product }) => {
  const { _id, product_image, name, brand, type, rating, price } = product;
  return (
    <div className="w-full rounded-sm  overflow-hidden relative flex flex-col justify-center items-center">
      <img
        src={product_image}
        className="w-full rounded-sm shadow-md"
      />
      <div className="px-8 py-6 bg-gray-950 w-full lg:w-[90%] lg:-mt-24 rounded-sm flex flex-col lg:flex-row justify-between items-center">
        <div className="text-white flex flex-col gap-y-3 shadow-xl text-center lg:text-left">
          <p className="text-xl font-semibold flex gap-3">
            <span>{name}</span>
            <span className="inline-flex items-center gap-1">
              {rating} <HiStar className="text-yellow-400 text-base" />
            </span>
          </p>
          <p className="text-xl font-semibold">Price: {price} USD</p>
          <p className="font-medium capitalize">Brand: {brand}</p>
          <p className="font-medium">Type: {type}</p>
        </div>
        <div className="flex lg:flex-col gap-4 pt-4 lg:pt-0">
          <Link to={`/product/${_id}`}>
            <button className="px-4 py-3 w-full bg-green-700 text-white flex justify-center items-center rounded-sm">
              Details <RiArrowRightSFill />
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
            <button className="px-4 py-3 w-full bg-gray-600 text-white flex justify-center items-center rounded-sm">
              Update <RiArrowRightSFill />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
