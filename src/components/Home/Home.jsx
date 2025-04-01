import Banner from "./Banner";
import Category from "./Category";
import Departments from "./Departments";
import ProServices from "./ProServices";
import Blog from "./Blog";
import ImageGallery from "./ImageGallery";
import MyPlayer from "./videoPlayer";
import Footer from "./Footer";


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
        <Footer />
      </>
    );
  }
  
  export default Home;
  