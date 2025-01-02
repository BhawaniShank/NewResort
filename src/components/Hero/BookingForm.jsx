import React from "react";
import { useForm } from "react-hook-form";

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
    <div className="">
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:bg-black bg-opacity-50 p-4 md:rounded-md grid grid-cols-3 sm:grid-cols-5 h-full md:h-min  gap-2 md:gap-4 max-w-4xl  lg:mt-0 w-full absolute inset-x-0 inset-y-[70%]  mx-auto"
      >
        {/* Check In */}
        <div className="text-white hidden md:block">
          <label className="block mb-1  font-medium text-sm">Check In</label>
          <div className="flex items-center space-x-1">
            <input
              type="date"
              {...register("checkIn", { required: "Check-in date is required" })}
              className="w-full bg-white text-black p-1 rounded text-sm"
            />
          </div>
          {errors.checkIn && (
            <p className="text-red-500 text-xs mt-1">{errors.checkIn.message}</p>
          )}
        </div>

        {/* Check Out */}
        <div className="text-white hidden md:block">
          <label className="block mb-1 font-medium text-sm">Check Out</label>
          <div className="flex items-center space-x-1">
            <input
              type="date"
              {...register("checkOut", { required: "Check-out date is required" })}
              className="w-full bg-white text-black p-1 rounded text-sm"
            />
          </div>
          {errors.checkOut && (
            <p className="text-red-500 text-xs mt-1">{errors.checkOut.message}</p>
          )}
        </div>

        {/* Adults */}
        <div className="text-white hidden md:block">
          <label className="block mb-1 font-medium text-sm">Adults</label>
          <div className="flex items-center space-x-1">
            <select
              {...register("adults", { required: "Please select the number of adults" })}
              className="w-full bg-white text-black p-1 rounded text-sm"
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          {errors.adults && (
            <p className="text-red-500 text-xs mt-1">{errors.adults.message}</p>
          )}
        </div>

        {/* Children */}
        <div className="text-white hidden md:block">
          <label className="block mb-1 font-medium text-sm">Children</label>
          <div className="flex items-center space-x-1">
            <select
              {...register("children", { required: "Please select the number of children" })}
              className="w-full bg-white text-black p-1 rounded text-sm"
            >
              <option value="">Select</option>
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
        <div className="text-white col-span-3 sm:col-span-5  md:col-span-1 mt-6 md:-mt-1 text-center">
          <p className="text-yellow-400 mb-1 hidden lg:block self-center text-base font-medium">
            From 8,925 INR/Night
          </p>
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-4 mt-7 lg:mt-0 rounded text-xl md:text-xs lg:text-sm transition-all duration-300"
          >
          Check availability
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
