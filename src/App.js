import './App.css';
import Footer from './components/Footer/Footer';
import Page from './Page/Page';
import {motion} from "framer-motion"
import Navbar from "./components/Navbar/Navbar"


function App() {
  return (
    <motion.div initial="hidden" animate="show">
      
      <Navbar />
      <Page />
      <Footer />

    </motion.div>
  );
}

export default App;
