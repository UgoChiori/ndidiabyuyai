import { Routes , Route} from "react-router-dom";
import Footer from "./components/Footer"
import Navbar from "./components/Navigation"
import LandingPage from "./routes/Home";
import Menu from "./routes/Menu";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        
       
      </main>
      <Footer />
    </div>
  );
}

export default App;



