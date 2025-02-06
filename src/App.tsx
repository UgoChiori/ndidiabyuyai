import { Routes , Route} from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navigation"
import LandingPage from "./routes/Home";
import Menu from "./routes/Menu";
import Reservations from "./routes/Reservations";
import Reviews from "./routes/Reviews";
import Contact from "./routes/ContactForm";
import FAQ from "./routes/FAQs";
import LoyaltyProgram from "./routes/LoyaltyProgram";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/loyalty" element={<LoyaltyProgram />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Analytics/>
       
      </main>
      <Footer />
    </div>
  );
}

export default App;




