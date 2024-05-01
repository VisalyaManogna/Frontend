import React from "react";
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

const Home = () => {
  const vegetableImages = [vege1, vege2, vege3, vege4, vege5];
  const fruitImages = [fruit5, fruit1, fruit2, fruit3, fruit4];
  const soilClayImages = [clay1, clay2, clay3, clay4, clay5];

  return (
    <div className="container mx-auto p-4">
      <div className="md:flex gap-4 py-8">
        <div className="md:w-1/2">
          {/* Default Home Page Content */}
          <div className="flex flex-col justify-center items-center bg-blue-200 px-4 py-8 rounded-lg mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-5"
              alt="Free Delivery Icon"
            />
            <p className="text-lg font-semibold text-blue-800">Free Delivery</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 py-3">
            Building a Sustainable Agricultural{" "}
            <span className="text-blue-600">Ecosystem</span>
          </h2>
          <p className="py-3 text-base text-gray-700">
            Welcome to our agricultural platform, where we cultivate innovation
            and sustainability. Through meticulous research and hands-on
            expertise, we strive to revolutionize farming practices for a
            greener tomorrow. From precision agriculture techniques to
            eco-friendly solutions, we are committed to maximizing yield while
            minimizing environmental impact. Join us as we harness the power of
            technology and tradition to nourish communities and cultivate a
            thriving future for generations to come.
          </p>
          <button className="font-bold bg-blue-500 text-gray-200 px-6 py-3 rounded-md hover:bg-blue-600">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2">
          {/* Images from About Page */}
          <div className="grid grid-cols-3 gap-4">
            {vegetableImages.map((image, index) => (
              <img
                key={`vegetable-${index}`}
                src={image}
                alt={`Vegetable ${index + 1}`}
                className="h-24 w-24 object-cover rounded-full"
              />
            ))}
            {fruitImages.map((image, index) => (
              <img
                key={`fruit-${index}`}
                src={image}
                alt={`Fruit ${index + 1}`}
                className="h-24 w-24 object-cover rounded-full"
              />
            ))}
            {soilClayImages.map((image, index) => (
              <img
                key={`clay-${index}`}
                src={image}
                alt={`Clay ${index + 1}`}
                className="h-24 w-24 object-cover rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
