import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddBrands = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      thumb: '',
      banner1: '',
      banner2: '',
      banner3: '',
    },
  });

  const handleOnSubmit = ({ name, thumb, banner1, banner2, banner3 }) => {
    const updatedName = name.toLowerCase();
    const updatedData = { name: updatedName, thumb, banner1, banner2, banner3 };

    fetch('https://nokar-shop-server.vercel.app/brands', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) toast.success('Brand Added Successfully');
        else toast.error('Failed to add brand');
      });
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-1440 py-10 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Add Brands</h2>
        <p className="text-lg text-gray-700">Fill up the form below to add a brand</p>
      </div>
      <div className="max-w-3xl w-full border border-gray-200 p-10 shadow-lg bg-gray-100 my-10">
        <form
          className="flex flex-col gap-y-4"
          onSubmit={handleSubmit(handleOnSubmit)}
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
              placeholder="Enter Brand Name"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              {...register('name')}
            />
          </div>
          <div id="thumbBox">
            <label
              htmlFor="brand-thumb"
              className="text-gray-700"
            >
              Brand Thumbnail
            </label>
            <input
              type="text"
              id="brand-thumb"
              placeholder="Enter Brand Thumbnail Image Link"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              {...register('thumb')}
            />
          </div>
          <div id="BannerBox1">
            <label
              htmlFor="brand-banner"
              className="text-gray-700"
            >
              Brand Banner Image 1
            </label>
            <input
              type="text"
              id="brand-banner"
              placeholder="Enter Brand Banner Image Link 1"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              {...register('banner1')}
            />
          </div>
          <div id="BannerBox2">
            <label
              htmlFor="brand-banner2"
              className="text-gray-700"
            >
              Brand Banner Image 2
            </label>
            <input
              type="text"
              id="brand-banner2"
              placeholder="Enter Brand Banner Image Link 2"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              {...register('banner2')}
            />
          </div>
          <div id="BannerBox3">
            <label
              htmlFor="brand-banner3"
              className="text-gray-700"
            >
              Brand Banner Image 3
            </label>
            <input
              type="text"
              id="brand-banner3"
              placeholder="Enter Brand Banner Image Link 3"
              className="w-full py-3 px-4 mt-2 border rounded-sm shadow-sm"
              {...register('banner3')}
            />
          </div>
          <div className="py-5 flex justify-center">
            <button
              className="rounded-sm border-transparent border-2 bg-gray-700 px-4 py-3 font-medium text-white transition-all hover:border-gray-700 hover:text-gray-700 hover:scale-95 hover:bg-transparent"
              type="submit"
            >
              Submit Brand
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrands;
