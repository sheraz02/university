import Banner from "./HomeComponents/Banner";
import Category from "./HomeComponents/Category";
import Departments from "./HomeComponents/Departments";
import ProServices from "./HomeComponents/ProServices";
import Blog from "./HomeComponents/Blog";
import ImageGallery from "./HomeComponents/ImageGallery";
import MyPlayer from "./HomeComponents/videoPlayer";
import Footer from "./HomeComponents/Footer";


function Home() {
    return (
      <>
        <Banner />
        <Category />
        <Departments />
        <ProServices />
        <Blog />
        <ImageGallery />
        <MyPlayer />
        {/* <Footer /> */}
      </>
    );
  }
  
  export default Home;
  