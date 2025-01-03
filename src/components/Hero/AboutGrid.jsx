
const AboutGrid = () => {
  const rooms = [
    {
      title: 'Premium Palace Rooms',
      description:
        'At the premier palace rooms of Rajasthali Resort and Spa...',
      image: 'https://picsum.photos/400/300?random=1',
    },
    {
      title: 'Deluxe Palace Room',
      image: 'https://picsum.photos/400/300?random=2',
    },
    {
      title: 'Royal Tent',
      image: 'https://picsum.photos/400/300?random=3',
    },
    {
      title: 'Grand Tent',
      image: 'https://picsum.photos/400/300?random=4',
    },
    {
      title: 'Suite',
      image: 'https://picsum.photos/400/300?random=5',
    },
    {
      title: 'Suite',
      image: 'https://picsum.photos/400/300?random=6',
    },
  ];
  return (
    
    <div className="p-6  mx-auto mt-20  ">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2 pb-4 lg:grid-cols-5" id="aboutgrid">
      {/* Left Section */}
      <div className="col-span-2 md:col-span-2 lg:col-span-3">
        <h1 className="text-5xl font-semibold mix-blend-difference">About Rajasthali Resort and Spa</h1>
        <p className="mt-4 font-medium text-lg mix-blend-difference ">
          A unique blend of tradition and dynamism!
        </p>
        <p className="mt-2 mix-blend-difference">
          Burrowed against the picturesque milieu of the Aravallis Hills, the Rajasthali Resort & Spa is an astounding amalgamation of culture and princely traditions of Rajasthan and modern hospitality.
        </p>
      </div>

      {/* Address Section */}
      <div className="col-span-1 mix-blend-difference">
        <h2 className="font-bold">Rajasthali Luxury Resort</h2>
        <p>Jaipur Delhi Highway,</p>
        <p>Kukas, Jaipur – 302028</p>
      </div>

      {/* Contact Section */}
      <div className="col-span-1 mix-blend-difference">
        <h2 className="font-bold">Available 24/7</h2>
        <p>For Reservations –</p>
        <p className="font-semibold">+91 8233092102</p>
      </div>
    </div>

    <p className="mix-blend-difference">
    Built in  Rajasthali resort and Spa has always been an appropriate example of tasteful luxury for its guests. The hotel strives to curate the experience of traditional Rajasthan for its guests who come in through the grand entrance of the hotel. Complete with all modern amenities and services, we strive to recreate the royal atmosphere for our precious guests.
    In the lap of the scenic Aravallis Hills, we welcome you to Rajasthali Resort & Spa for a unique accommodation experience. With its 115 opulently designed guest rooms, including a presidential suite, 01 Aravali room, 03 Three bedroom Suite tent, 02 Two bedroom suite tent, 14 grand luxury tents with Jacuzzi, 15 royal luxury tents with Jacuzzi, 26 royal luxury tent with balcony, 1 two bedroom villa with private pool,  2 one bedroom villa with private pool, 2 one bedroom villa with Jacuzzi, 8 deluxe palace rooms and, 22 premium palace room,  Rajasthali Resort and Spa seeks to provide a comfortable and premium stay experience, irrespective of whether you are here for business or leisure. Additionally, thereafter a plethora of elaborate and unique facilities. The Rajasthali Resort team is dedicated to providing great comfort to our guests.  With the spirit of Indian hospitality and our commitment to providing it flawlessly to our customers, imbibed in our service culture and practices, we welcome you to a one-of-a-kind luxury experience at Rajasthali.
    </p>
    <div className="grid grid-cols-2 max-w-6xl mx-auto md:grid-cols-2 mt-20 lg:grid-cols-3 gap-4">
  {rooms.map((room, index) => (
    <div
      key={index}
      className={`relative group rounded-lg overflow-hidden shadow-lg ${
        index === 0 ? 'lg:col-span-2 lg:row-span-2' : '' 
      } ${index === 1 ? 'lg:-mt-10': ''} ${index === 3 ? 'lg:-ml-10': ''}`}
    >
      <img
        src={room.image}
        alt={room.title}
        className="w-full h-full object-cover transition-transform "
      />
      <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute inset-x-0 bottom-1 md:bottom-10  flex flex-col justify-center items-center md:opacity-0 group-hover:opacity-100 transition-opacity">
        {/* <h2 className="text-white text-lg font-semibold">{room.title}</h2> */}
        {room.description && (
          <p className="text-white text-sm px-4 text-center mt-2">
            {/* {room.description} */}
          </p>
        )}
        <button className="mt-4 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg">
          Know More
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
    
  );
};

export default AboutGrid;
