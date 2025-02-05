import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-black py-10 px-6 md:px-16 text-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        
      
        <div className="flex flex-col items-start md:items-start">
          <img src="/images/logo2.png" alt="logo" className="w-28 h-auto mb-3" />
         
        </div>
        
      
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/menu" className="hover:text-gray-800 hover:underline">Menu</a></li>
            <li><a href="/reservations" className="hover:text-gray-800 hover:underline">Reservations</a></li>
            <li><a href="/contact" className="hover:text-gray-800 hover:underline">Contact</a></li>
          </ul>
        </div>
        
       
        <div>
          <h3 className="font-semibold text-lg">Customer Care</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/faqs" className="hover:text-gray-800 hover:underline">FAQs</a></li>
            <li><a href="/loyalty" className="hover:text-gray-800 hover:underline">Loyalty Program</a></li>
            <li><a href="/support" className="hover:text-gray-800 hover:underline">Support</a></li>
          </ul>
        </div>
        
     
        <div>
          <h3 className="font-semibold text-lg">Contact</h3>
          <p className="mt-3 text-sm">123 Foodie Street, Lagos, Nigeria.</p>
          <p className="text-sm">Email: ndidiabyuyai@gmail.com</p>
          <p className="text-sm">Phone: +234 123 456 7890</p>
          
          
          <div className="flex gap-4 text-xl mt-4">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          </div>
        </div>
      </div>
      
      
      <div className="mt-10 text-sm text-gray-400">
        © 2024 Ndidia By Uyai. All rights reserved.
      </div>
    </footer>
  );
}
