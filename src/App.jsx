import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import Counter from './components/Counter';
import PopularServices from './components/PupularServices';
import ProServices from './components/ProServices';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import Departments from './components/Departments';
import MyPlayer from './components/videoPlayer';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';
import Category from './components/Category';
import Blog from './components/Blog';
// import Ee from './components/Ee';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     
     <Banner />
     <Category />
     <Departments />
     {/* <Counter /> */}
     {/* <PopularServices /> */}
     <ProServices />
     <Blog />
     <ImageGallery />
     {/* <Carousel />  */}
     <MyPlayer />
     <Footer />
     {/* <Ee /> */}
    </>
  );
};

export default App
