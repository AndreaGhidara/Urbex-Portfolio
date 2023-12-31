import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";


function App() {


  return (
    <>
      <BrowserRouter>
        <div className="h-screen flex flex-col sm:justify-between">
          <h1 className="font-bold text-3xl text-center p-5">
            Andrew Urbex
          </h1>
          <div>
            <Routes>
              <Route>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
              </Route>
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
