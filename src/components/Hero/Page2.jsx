import React from 'react';
import desert from '../../assets/Hero/desert.png'
import desert2 from '../../assets/Hero/desert2.jpeg'
const Page2 = () => {
  return (
    <div className="bg-[#4CAF50] flex flex-col items-center justify-center min-h-[45em] p-4 relative">
      <div className="text-center max-w-2xl z-10">
        <h2 className="text-sm font-medium tracking-widest text-[#2c2c2c] mb-2">
          DISCOVER THE WORLD OF
        </h2>
        <h1 className="text-4xl text-[#a0522d] font-bold mb-4">
          The Tree House Resort
        </h1>
        <p className="text-[#2c2c2c] mb-4">
          The Tree House Resort is an award-winning property that was built on the principles of Eco-luxury and unconventionality.
        </p>
        <p className="text-[#2c2c2c] mb-4">
          Not only was breaking away from the stereotypical heritage fanfare and “Bed in a box” mentality of absolute necessity, but also a gateway to innovative yet responsible hospitality.
        </p>
        <p className="text-[#2c2c2c] mb-4">
          Nestled in the scenic Syari Valley, with an amazing view of the mighty Aravallis,
        </p>
        <p className="text-[#2c2c2c] mb-4">
          The Tree House Resort is situated at Nature Farms which is spread around 300 acres of pristine landscape. The resort derives its inspiration from the three elements of nature; Air, Water &amp; Earth.
        </p>
        <p className="text-[#2c2c2c] mb-4">
          The décor is in sync with the theme of nature with tree top rooms and over-water suites essentially made of wood under the Eco-friendly standards of construction.
        </p>
        <p className="text-[#2c2c2c] mb-4">
          The meandering pathways navigate through lush green vegetation, water bodies, &amp; waterfalls so as to ensure that the soothing sound of flowing/falling water does not leave the guests ears as they move around discovering the property. In addition, there are several wooden gazebos adorning the property where guests can indulge in meditation, reading and relaxing in the midst of un-spoilt nature.
        </p>
      </div>
      <div className="flex justify-between w-full max-w-2xl mt-8">
        <img
          alt="Illustration of a tree house on the left"
          className="xl:w-80 xl:h-80 h-40 w-40 hidden lg:block absolute bottom-0 left-0 "
          height="100"
          src={desert2}
          width="100"
        />
        <img
          alt="Illustration of tree branches on the right"
          className="xl:w-80 xl:h-80 h-40 w-40 hidden lg:block absolute top-0 right-0 m"
          height="100"
          src={desert}
          width="100"
        />
      </div>
    </div>
  );
};

export default Page2;
