import React from 'react';
import vege1 from '../assest/vege1.jpg';
import vege2 from '../assest/vege2.jpg';
import vege3 from '../assest/vege3.jpg';
import vege4 from '../assest/vege4.jpg';
import vege5 from '../assest/vege5.jpeg';
import fruit5 from '../assest/fruit5.jpeg';
import fruit1 from '../assest/fruit1.jpeg';
import fruit2 from '../assest/fruit2.jpeg';
import fruit3 from '../assest/fruit3.jpeg';
import fruit4 from '../assest/fruit4.jpeg';
import clay1 from '../assest/clay1.webp';
import clay2 from '../assest/clay2.webp';
import clay3 from '../assest/clay3.jpeg';
import clay4 from '../assest/clay4.webp';
import clay5 from '../assest/clay5.webp';

const About = () => {
  const vegetableImages = [vege1, vege2, vege3, vege4, vege5];
  const fruitImages = [fruit5,fruit1, fruit2, fruit3, fruit4];
  const soilClayImages = [clay1, clay2, clay3, clay4, clay5];

  const vegetables = [
    { name: "Bunch_astron", price: "259/-", rating: 4 },
    { name: "Coriander", price: "269/-", rating: 3.5 },
    { name: "Beans", price: "230/-", rating: 4.5 },
    { name: "Guva", price: "198/-", rating: 4 },
    { name: "Cucumber", price: "145/-", rating: 3 },
    
  ];

  const fruits = [
    { name: "Tomato", price: "129/-", rating: 4.5 },
    { name: "Banana", price: "159/-", rating: 4 },
    { name: "Oninon", price: "200/-", rating: 3.5 },
    { name: "Watermelon", price: "169/-", rating: 4 },
    { name: "Tomatos", price: "169/-", rating: 3.5 },
  ];

  const clays = [
    { name: "Silver Clay", price: "179/-", rating: 4 },
    { name: "Almond Clay", price: "159/-", rating: 3.5 },
    { name: "Terracotta Clay", price: "149/-", rating: 4 },
    { name: "Chirag", price: "169/-", rating: 3 },
    { name: "Village Decor", price: "179/-", rating: 4.5 },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Vegetables</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {vegetables.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4">
              <div className="mb-2 h-36 w-full">
                <img src={vegetableImages[index % vegetableImages.length]} alt={`Vegetable ${index + 1}`} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col items-start mt-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.price}</p>
                <div className="flex items-center mt-1">
                  {Array.from(Array(Math.floor(item.rating)), (_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8"></div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Fruits</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {fruits.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4">
              <div className="mb-2 h-36 w-full">
                <img src={fruitImages[index % fruitImages.length]} alt={`Fruit ${index + 1}`} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col items-start mt-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.price}</p>
                <div className="flex items-center mt-1">
                  {Array.from(Array(Math.floor(item.rating)), (_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8"></div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Soil & Clays</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {clays.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-4">
              <div className="mb-2 h-36 w-full">
                <img src={soilClayImages[index % soilClayImages.length]} alt={`Clay ${index + 1}`} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col items-start mt-2">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.price}</p>
                <div className="flex items-center mt-1">
                  {Array.from(Array(Math.floor(item.rating)), (_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-2">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
