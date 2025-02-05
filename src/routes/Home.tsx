
import { FaArrowRight, FaStar, FaUtensils, FaTruck } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="bg-gray-100 text-black ">
      {/* Hero Section */}
      <section className="bg-gray-400 text-black w-full md:w-[70%] h-[50vh] md:h-screen mx-auto flex flex-col items-center justify-center text-center px-4 md:px-6 rounded-lg shadow-lg">

        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold">Welcome to Ndidia By Uyai</h1>
          <p className="mt-4 text-base md:text-lg">Authentic Nigerian Cuisine, Made with Love</p>
          <a
            href="/menu"
            className="mt-6 inline-block bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-yellow-500"
          >
            Explore Our Menu
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 px-4 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us?</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <FaTruck className="text-black" />, title: "Fast Delivery", desc: "We ensure quick and efficient delivery of your favorite dishes." },
            { icon: <FaUtensils className="text-black"/>, title: "Authentic Recipes", desc: "We prepare meals with traditional flavors and techniques." },
            { icon: <FaStar className="text-black" />, title: "Top Chefs", desc: "Our experienced chefs bring you the best Nigerian cuisine." },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="text-4xl text-[#ffde59] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-[#ffff] text-black py-12 md:py-16 text-center px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold">Loved by Thousands</h2>
        <p className="mt-4 text-base md:text-lg">See why our customers keep coming back.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: "Adebayo T.", review: "Best Jollof Rice I’ve ever had!" },
            { name: "Chioma U.", review: "Feels like home with every bite." },
            { name: "Ekanem T.", review: "The best I have ever had" },
            { name: "Abdullahi Ahmed", review: "I definitely recommend" },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-black">
              <p className="text-gray-700">“{testimonial.review}”</p>
              <h4 className="mt-3 font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
        <a
          href="/testimonials"
          className="mt-6 inline-block text-black underline hover:text-gray-300"
        >
          Read More Reviews
        </a>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ffff] text-black py-12 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Join Us on This Flavorful Journey</h2>
        <a
          href="/about"
          className="mt-6 inline-flex items-center bg-black text-[#ffff] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-800"
        >
          Learn More <FaArrowRight className="ml-2" />
        </a>
      </section>
    </div>
  );
}