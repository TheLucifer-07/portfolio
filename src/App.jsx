import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Page */}
      <main>
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;