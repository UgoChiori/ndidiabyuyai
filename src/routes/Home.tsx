
// import { FaArrowRight, FaStar, FaUtensils, FaTruck } from "react-icons/fa";

// export default function LandingPage() {
//   return (
//     <div className="bg-gray-100 text-black ">
   
//       <section className="bg-gray-400 text-black w-full md:w-[70%] h-[50vh] md:h-screen mx-auto flex flex-col items-center justify-center text-center px-4 md:px-6 rounded-lg shadow-lg">

//         <div className="max-w-5xl">
//           <h1 className="text-3xl md:text-5xl font-bold">Welcome to Ndidia By Uyai</h1>
//           <p className="mt-4 text-base md:text-lg">Authentic Nigerian Cuisine, Made with Love</p>
//           <a
//             href="/menu"
//             className="mt-6 inline-block bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-800"
//           >
//             Explore Our Menu
//           </a>
//         </div>
//       </section>

      
//       <section className="py-12 md:py-16 px-4 md:px-16 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us?</h2>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {[
//             { icon: <FaTruck className="text-black" />, title: "Fast Delivery", desc: "We ensure quick and efficient delivery of your favorite dishes." },
//             { icon: <FaUtensils className="text-black"/>, title: "Authentic Recipes", desc: "We prepare meals with traditional flavors and techniques." },
//             { icon: <FaStar className="text-black" />, title: "Top Chefs", desc: "Our experienced chefs bring you the best Nigerian cuisine." },
//           ].map((item, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
//               <div className="text-4xl text-[#ffde59] mb-4">{item.icon}</div>
//               <h3 className="text-xl font-semibold">{item.title}</h3>
//               <p className="mt-2 text-gray-700">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="bg-[#ffff] text-black py-12 md:py-16 text-center px-4 md:px-16">
//         <h2 className="text-2xl md:text-3xl font-bold">Loved by Thousands</h2>
//         <p className="mt-4 text-base md:text-lg">See why our customers keep coming back.</p>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {[
//             { name: "Adebayo T.", review: "Best Jollof Rice I’ve ever had!" },
//             { name: "Chioma U.", review: "Feels like home with every bite." },
//             { name: "Ekanem T.", review: "The best I have ever had" },
//             { name: "Abdullahi Ahmed", review: "I definitely recommend" },
//           ].map((testimonial, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-black">
//               <p className="text-gray-700">“{testimonial.review}”</p>
//               <h4 className="mt-3 font-semibold">{testimonial.name}</h4>
//             </div>
//           ))}
//         </div>
//         <a
//           href="/reviews"
//           className="mt-6 inline-block text-black underline hover:text-gray-300"
//         >
//           Read More Reviews
//         </a>
//       </section>

      
//       <section className="bg-[#ffff] text-black py-12 md:py-16 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold">Join Us on This Flavorful Journey</h2>
//         <a
//           href="/menu"
//           className="mt-6 inline-flex items-center bg-black text-[#ffff] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-800"
//         >
//           Learn More <FaArrowRight className="ml-2" />
//         </a>
//       </section>
//     </div>
//   );
// }

import { FaArrowRight, FaStar, FaUtensils, FaTruck } from "react-icons/fa";

export default function LandingPage() {
    const backgroundImageUrl =
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="bg-gray-100 text-black font-poppins">
     
      <section
        className="relative w-full h-[70vh] md:h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 "
        style={{
          backgroundImage: `url(${backgroundImageUrl})`, // Use the image URL here
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl">
          <h1  className="text-4xl md:text-6xl font-bold  text-gray-300 mb-4">
            Welcome to Ndidia By Uyai.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Authentic Nigerian Cuisine, Made with Love
          </p>
          <a
            href="/menu"
            className="mt-6 inline-block bg-black text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-300"
          >
            Explore Our Menu
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-4 md:px-16 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaTruck className="text-4xl text-black" />, title: "Fast Delivery", desc: "We ensure quick and efficient delivery of your favorite dishes." },
            { icon: <FaUtensils className="text-4xl text-black" />, title: "Authentic Recipes", desc: "We prepare meals with traditional flavors and techniques." },
            { icon: <FaStar className="text-4xl text-black" />, title: "Top Chefs", desc: "Our experienced chefs bring you the best Nigerian cuisine." },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 md:py-16 text-center px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-6">
          Loved by Thousands
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          See why our customers keep coming back.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Adebayo T.", review: "Best Jollof Rice I’ve ever had!" },
            { name: "Chioma U.", review: "Feels like home with every bite." },
            { name: "Ekanem T.", review: "The best I have ever had" },
            { name: "Abdullahi Ahmed", review: "I definitely recommend" },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700">“{testimonial.review}”</p>
              <h4 className="mt-3 font-semibold text-gray-800">{testimonial.name}</h4>
            </div>
          ))}
        </div>
        <a
          href="/reviews"
          className="mt-6 inline-block text-black underline hover:text-gray-600"
        >
          Read More Reviews
        </a>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ffff] text-black py-12 md:py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-800 mb-6">
          Join Us on This Flavorful Journey
        </h2>
        <a
          href="/menu"
          className="mt-6 inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
        >
          Learn More <FaArrowRight className="ml-2" />
        </a>
      </section>
    </div>
  );
}