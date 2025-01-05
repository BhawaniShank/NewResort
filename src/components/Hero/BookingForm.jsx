import React from "react";
import { useForm } from "react-hook-form";
import { FaUserLarge } from "react-icons/fa6";
const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="      lg:mt-0 w-full absolute inset-x-0 inset-y-[70%] md:inset-y-auto md:-bottom-14  md:px-20 lg:px-40  mx-auto"
      >
        <div className="md:rounded-lg grid grid-cols-3 sm:grid-cols-4 h-full p-4 md:h-min  gap-2 md:gap-4 md:bg-[#3b2d26]/50">
        {/* Check In */}
        <div className="text-white hidden md:block">
          <label className="block mb-1  font-medium text-lg">Check In</label>
          <div className="flex items-center space-x-1">
            <input
              type="date"
              {...register("checkIn", { required: "Check-in date is required" })}
              className="w-full bg-white text-black p-4 rounded-lg text-sm"
            />
          </div>
          {errors.checkIn && (
            <p className="text-red-500 text-xs mt-1">{errors.checkIn.message}</p>
          )}
        </div>

        {/* Check Out */}
        <div className="text-white hidden md:block">
          <label className="block mb-1 font-medium text-lg">Check Out</label>
          <div className="flex items-center space-x-1">
            <input
              type="date"
              {...register("checkOut", { required: "Check-out date is required" })}
              className="w-full bg-white text-black p-4 rounded-lg text-sm"
            />
          </div>
          {errors.checkOut && (
            <p className="text-red-500 text-xs mt-1">{errors.checkOut.message}</p>
          )}
        </div>

        {/* Adults */}
        <div className="text-white hidden md:block">
  <label className="mb-1 ml-2 font-medium text-lg">
   
    Adults
  </label>
  <div className="flex items-center space-x-2 relative">
    <FaUserLarge className="absolute left-8 top-1/2 transform -translate-y-1/2 text-black" />
    <select
      {...register("children", { required: "Please select the number of children" })}
      className="w-full bg-white text-black p-4 pl-10 rounded-lg text-sm"
    >
      <option value="">Select </option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>
  {errors.children && (
    <p className="text-red-500 text-xs mt-1">{errors.children.message}</p>
  )}
</div>


        <div className="text-white hidden md:block">
  <label className="mb-1 ml-2 font-medium text-lg">
   
    Children
  </label>
  <div className="flex items-center space-x-2 relative">
    <FaUserLarge className="absolute left-8 top-1/2 transform -translate-y-1/2 text-black" />
    <select
      {...register("children", { required: "Please select the number of children" })}
      className="w-full bg-white text-black p-4 pl-10 rounded-lg text-sm"
    >
      <option value="">Select </option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div>
  {errors.children && (
    <p className="text-red-500 text-xs mt-1">{errors.children.message}</p>
  )}
</div>


      

        {/* Book Now Button */}
        <div className="text-white col-span-3 sm:col-span-4   mt-6 md:-mt-1 text-center">
         
          <button
            type="submit"
            className="bg-yellow-600 w-full hover:bg-yellow-700 text-white font-bold py-4 px-4 mt-7 lg:mt-0 rounded-lg text-xl  transition-all duration-300"
          >
          Check availability
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
