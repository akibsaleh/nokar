import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddProducts = () => {
  const [rating, setRating] = useState(0);

  const brands = useLoaderData();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      brand: '',
      product_image: '',
      type: '',
      price: 0,
      rating: 0,
      description: '',
    },
  });

  const handleOnSubmit = (data) => {
    fetch('https://nokar-shop-server.vercel.app/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) toast.success('Product Added Successfully');
        else toast.error('Something Went Wrong');
      });
    reset();
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-8xl py-10 mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Add Products</h2>
        <p className="text-lg text-gray-700">Fill up the form below to add a products</p>
      </div>
      <div className="max-w-3xl w-full p-10 border border-gray-200 shadow-lg bg-gray-100 my-10">
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <div id="nameBox">
            <label
              htmlFor="name"
              className="text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Product Name"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              {...register('name')}
            />
          </div>
          <div id="brandBox">
            <label
              htmlFor="brand"
              className="text-gray-700 flex justify-between items-center"
            >
              <span>Brand</span>
              <Link
                className="text-xs font-medium text-indigo-500"
                to="/add-brands"
              >
                Add New*
              </Link>
            </label>
            <select
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              placeholder="Choose a Brand"
              {...register('brand')}
            >
              <option
                value=""
                disabled
                selected
              >
                Choose a Brand
              </option>
              {brands.map((brand) => (
                <option
                  key={brand._id}
                  value={brand.name}
                >
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <div
            id="imageBox"
            className="col-span-2"
          >
            <label
              htmlFor="product_image"
              className="text-gray-700"
            >
              Product Image
            </label>
            <input
              type="text"
              id="product_image"
              placeholder="Enter Image Link"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              {...register('product_image')}
            />
          </div>
          <div id="typeBox">
            <label
              htmlFor="type"
              className="text-gray-700"
            >
              Type
            </label>
            <input
              type="text"
              id="type"
              placeholder="Enter Car Type"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              {...register('type')}
            />
          </div>
          <div id="Price">
            <label
              htmlFor="price"
              className="text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Enter Price"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              {...register('price')}
            />
          </div>
          <div
            id="description"
            className="col-span-2"
          >
            <label
              htmlFor="desc"
              className="text-gray-700"
            >
              Short Description
            </label>
            <textarea
              id="desc"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              rows={4}
              {...register('description')}
            />
          </div>
          <div
            id="ratingBox"
            className="col-span-2 flex justify-center items-center gap-x-4 pt-5 pb-10"
          >
            <p>Rating</p>

            <fieldset className="text-xl inline-flex gap-0.5">
              <label
                htmlFor="rating-1"
                onClick={() => setRating(1)}
              >
                {rating >= 1 ? <AiFillStar /> : <AiOutlineStar />}
                <input
                  type="radio"
                  value="1"
                  className="hidden"
                  id="rating-1"
                  {...register('rating')}
                />
              </label>
              <label
                htmlFor="rating-2"
                onClick={() => setRating(2)}
              >
                {rating >= 2 ? <AiFillStar /> : <AiOutlineStar />}
                <input
                  type="radio"
                  value="2"
                  className="hidden"
                  id="rating-2"
                  {...register('rating')}
                />
              </label>
              <label
                htmlFor="rating-3"
                onClick={() => setRating(3)}
              >
                {rating >= 3 ? <AiFillStar /> : <AiOutlineStar />}
                <input
                  type="radio"
                  value="3"
                  className="hidden"
                  id="rating-3"
                  {...register('rating')}
                />
              </label>
              <label
                htmlFor="rating-4"
                onClick={() => setRating(4)}
              >
                {rating >= 4 ? <AiFillStar /> : <AiOutlineStar />}
                <input
                  type="radio"
                  value="4"
                  className="hidden"
                  id="rating-4"
                  {...register('rating')}
                />
              </label>
              <label
                htmlFor="rating-5"
                onClick={() => setRating(5)}
              >
                {rating >= 5 ? <AiFillStar /> : <AiOutlineStar />}
                <input
                  type="radio"
                  value="5"
                  className="hidden"
                  id="rating-5"
                  {...register('rating')}
                />
              </label>
            </fieldset>
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              className="rounded-sm border-transparent border-2 bg-gray-700 px-4 py-3 font-medium text-white transition-all hover:border-gray-700 hover:text-gray-700 hover:scale-95 hover:bg-transparent"
              type="submit"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
