

const Big3 = () => {
  const data = [
    {
      id: 1,
      image: "https://picsum.photos/1200/600?random=1",
      title: "Luxurious Room 1",
      description: "The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design."
    },
    {
      id: 2,
      image: "https://picsum.photos/1200/600?random=2",
      title: "Luxurious Room 2",
      description: "Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design."
    },
    {
      id: 3,
      image: "https://picsum.photos/1200/600?random=3",
      title: "Luxurious Room 3",
      description: "Experience the pinnacle of comfort and style in these luxury bedrooms, where every detail is meticulously crafted for a perfect ambiance."
    }
  ];

  const renderCard = ({ id, image, title, description }) => (

    <div key={id} className="bg-white rounded-3xl md:px-20  overflow-hidden p-4 md:pb-20 w-full  mx-auto ">
      <img
        src={image}
        alt={title}
        className="w-full rounded-3xl h-auto"
      />
      <div className="md:p-6 p-2 bg-white border-t-[2em] border-[#7c6a46] relative -mt-10 md:-mt-28 mx-8 lg:mx-40 rounded-3xl shadow-lg">
       
        <div className="bg-white md:p-6 rounded-b-lg">
          <h2 className="text-center text-2xl font-medium text-gray-700 mb-4">
            {title}
          </h2>
          <p className="text-center text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" flex flex-col items-center justify-center  font-roboto">
      <h1 className="py-10 text-4xl font-semibold">Take a tour</h1>
      {data.map((card) => renderCard(card))}
    </div>
  );
};

export default Big3;
