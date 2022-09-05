import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Page from './Page/Page';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Page />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
