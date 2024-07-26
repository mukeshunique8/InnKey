import React from 'react';
import Hotel from './Hotel';

export default function HotelList() {
  const hotels = [
    {
      src: '/room1.jpg',
      name: 'Ocean View Suite',
      location: 'Miami, FL',
    },
    {
      src: '/room2.jpg',
      name: 'Mountain Lodge',
      location: 'Aspen, CO',
    },
  ];

  const renderHotels = hotels.map((hotel, idx) => (
    <div key={idx} className="w-full md:w-1/2 p-2">
      <Hotel
        src={hotel.src}
        name={hotel.name}
        location={hotel.location}
        style={idx === 0 ? 'right-0' : 'left-0'}
      />
    </div>
  ));

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-2">
        {renderHotels}
      </div>
    </div>
  );
}
